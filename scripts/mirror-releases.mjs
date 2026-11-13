// Mirror releases from the source repos into THIS repository (the public release repo), so
// customers download both the desktop installer and the Android APK from one place.
//
// This script lives here, not in the product repos: mirroring is a release-repo job and both
// products must land in the same place. Rule: every released version of both products belongs
// in this repo.
//
//   node scripts/mirror-releases.mjs                 # both products, every release
//   node scripts/mirror-releases.mjs --product mobile
//   node scripts/mirror-releases.mjs --only v1.1.3
//   node scripts/mirror-releases.mjs --dry-run
//
// Both products are released from ONE monorepo (CloverKG369/qlbh) since the migration:
//   desktop -> tag `vX.Y.Z`        (electron-updater's GitHub provider needs the version tag)
//   mobile  -> tag `mobile-vX.Y.Z` (keeps the two products apart when the phone app reaches 1.x)
// The mirror keeps those tag names as-is, so `--only` arguments and in-app feeds line up.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const TARGET = process.env.QLBH_RELEASES_REPO || 'CloverKG369/qlbh-releases';
const PRODUCTS = {
  desktop: { repo: 'CloverKG369/qlbh', label: 'QLBH desktop', matches: (tag) => /^v\d+\.\d+\.\d+$/.test(tag) },
  mobile: { repo: 'CloverKG369/qlbh', label: 'QLBH Mobile', matches: (tag) => tag.startsWith('mobile-v') },
};

const args = process.argv.slice(2);
const arg = (name, fallback = '') => {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1] ?? fallback;
};
const has = (name) => args.includes(name);
const dryRun = has('--dry-run');
const onlyTag = arg('--only', '');
const productArg = arg('--product', 'all');
const products = productArg === 'all' ? Object.keys(PRODUCTS) : [productArg];

const gh = (argv, options = {}) =>
  execFileSync('gh', argv, { encoding: 'utf8', stdio: options.inherit ? 'inherit' : 'pipe', ...options });

function listReleases(repo) {
  const raw = gh(['release', 'list', '--repo', repo, '--limit', '100', '--json', 'tagName,name,isDraft,isPrerelease']);
  return JSON.parse(raw).filter((r) => !r.isDraft);
}

function releaseInfo(repo, tag) {
  return JSON.parse(gh(['release', 'view', tag, '--repo', repo, '--json', 'body,name,assets']));
}

function mirroredTags() {
  try {
    const raw = gh(['release', 'list', '--repo', TARGET, '--limit', '200', '--json', 'tagName']);
    return new Set(JSON.parse(raw).map((r) => r.tagName));
  } catch {
    return new Set();
  }
}

function assetNames(tag) {
  try {
    const raw = gh(['release', 'view', tag, '--repo', TARGET, '--json', 'assets']);
    return JSON.parse(raw).assets.map((a) => a.name);
  } catch {
    return [];
  }
}

let copied = 0;
let skipped = 0;

for (const product of products) {
  const config = PRODUCTS[product];
  if (!config) {
    console.error(`Sản phẩm không hợp lệ: ${product}`);
    process.exit(1);
  }
  const releases = listReleases(config.repo)
    .filter((r) => config.matches(r.tagName))
    .reverse(); // oldest first, so tags appear in order
  console.log(`\n== ${config.label}: ${releases.length} bản trong ${config.repo}`);

  for (const release of releases) {
    if (onlyTag && release.tagName !== onlyTag) continue;
    const targetTag = release.tagName;
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), `mirror-${product}-`));

    if (mirroredTags().has(targetTag) && !onlyTag) {
      console.log(`  = ${targetTag} đã có, bỏ qua`);
      skipped += 1;
      continue;
    }

    console.log(`  → ${targetTag} (asset: ${releaseInfo(config.repo, release.tagName).assets.length})`);
    if (dryRun) continue;

    try {
      gh(['release', 'download', release.tagName, '--repo', config.repo, '--dir', dir], { inherit: true });
      const files = fs.readdirSync(dir).map((f) => path.join(dir, f));
      if (!files.length) {
        console.log('    ! không có asset, bỏ qua');
        continue;
      }

      const info = releaseInfo(config.repo, release.tagName);
      const notesFile = path.join(dir, '.notes.md');
      fs.writeFileSync(notesFile, info.body || '');

      if (assetNames(targetTag).length) {
        gh(['release', 'upload', targetTag, ...files, '--repo', TARGET, '--clobber'], { inherit: true });
      } else {
        gh(
          [
            'release', 'create', targetTag, ...files,
            '--repo', TARGET,
            '--title', `${config.label} ${release.tagName}`,
            '--notes-file', notesFile,
          ],
          { inherit: true }
        );
      }
      copied += 1;
    } catch (err) {
      console.error(`    ! lỗi: ${String(err.message || err).slice(0, 200)}`);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  }
}

// A single front door. The "Latest" badge can only sit on one release, and the phone's APK is a
// different release, so a visitor landing on Latest saw desktop files only and asked where the APK
// (and sometimes Linux) went. Tag `latest` carries every current installer in one place; it is
// refreshed on every release and never wears the Latest badge itself.
function refreshFrontDoor() {
  if (dryRun) return;
  const work = fs.mkdtempSync(path.join(os.tmpdir(), 'front-door-'));
  try {
    const pick = (repo, matches) => listReleases(repo).find((r) => matches(r.tagName));
    const desktop = pick(PRODUCTS.desktop.repo, PRODUCTS.desktop.matches);
    const mobile = pick(PRODUCTS.mobile.repo, PRODUCTS.mobile.matches);
    if (!desktop || !mobile) return;

    for (const [repo, tag] of [[PRODUCTS.desktop.repo, desktop.tagName], [PRODUCTS.mobile.repo, mobile.tagName]]) {
      gh(['release', 'download', tag, '--repo', repo, '--dir', work], { inherit: true });
    }
    // The directory holds both products' files; keep just the installers and their feeds.
    for (const file of fs.readdirSync(work)) {
      if (!/\.(exe|AppImage|blockmap|apk|yml|json)$/.test(file)) fs.rmSync(path.join(work, file), { force: true });
    }

    const notes = [
      '# QLBH — tải bản mới nhất',
      '',
      '| Sản phẩm | File |',
      '| --- | --- |',
      `| Windows 10/11 | \`${desktop.tagName}\` — QLBH-Setup-*.exe |`,
      `| Linux | \`${desktop.tagName}\` — QLBH-Setup-*.AppImage |`,
      `| Android 7.0+ | \`${mobile.tagName}\` — QLBH-Mobile-*.apk |`,
      '',
      'Mỗi bản cũng có trang riêng theo tag tương ứng. Bản desktop tự cập nhật qua `desktop-latest`,',
      'app Android tự cập nhật qua `android-latest`.',
    ].join('\n');
    const notesFile = path.join(work, 'README.md');
    fs.writeFileSync(notesFile, notes);

    const files = fs.readdirSync(work).map((f) => path.join(work, f));
    try {
      gh(['release', 'delete', 'latest', '--repo', TARGET, '--yes', '--cleanup-tag']);
    } catch {
      /* first time */
    }
    gh(['release', 'create', 'latest', ...files, '--repo', TARGET, '--latest=false',
      '--title', 'Tải bản mới nhất (Windows · Linux · Android)', '--notes-file', notesFile], { inherit: true });
    console.log('  → làm mới trang tải tổng: tag latest');
  } catch (err) {
    console.error('  ! không làm mới được trang tải tổng:', String(err.message || err).slice(0, 200));
  } finally {
    fs.rmSync(work, { recursive: true, force: true });
  }
}

if (!dryRun) {
  // One "Latest" marker per repo: point it at the newest desktop release, which is what a
  // first-time visitor should install.
  const newestDesktop = listReleases(PRODUCTS.desktop.repo).find((r) => PRODUCTS.desktop.matches(r.tagName));
  if (newestDesktop) {
    try {
      gh(['release', 'edit', newestDesktop.tagName, '--repo', TARGET, '--latest'], { inherit: true });
    } catch {
      console.log('  (không đặt được nhãn Latest — bỏ qua)');
    }
  }
}

refreshFrontDoor();

console.log(`\nXong: ${copied} bản được sao, ${skipped} bản đã có sẵn. Repo đích: ${TARGET}`);
