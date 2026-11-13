# QLBH — kho phát hành chung (desktop + Android)

Tất cả bản cài của **hai** sản phẩm được phát hành tại đây, để khách chỉ cần một nơi:

| Sản phẩm | Nền tảng | Mã nguồn |
| --- | --- | --- |
| **QLBH desktop** — bán hàng, kho, công nợ trên máy tính | Windows (NSIS), Linux (AppImage) | https://github.com/CloverKG369/qlbh |
| **QLBH Mobile** — cùng nghiệp vụ trên điện thoại Android | Android (APK) | https://github.com/CloverKG369/qlbh (`apps/mobile`) |

Repo này **chỉ chứa file cài + feed cập nhật**. Không chứa mã nguồn.

---

## 1. Tải bản mới nhất

| Nền tảng | Bản mới nhất | File |
| --- | --- | --- |
| Windows 10/11 | **desktop v1.1.14** | [QLBH-Setup-1.1.14.exe](https://github.com/CloverKG369/qlbh-releases/releases/download/v1.1.14/QLBH-Setup-1.1.14.exe) |
| Linux | **desktop v1.1.14** | [QLBH-Setup-1.1.14.AppImage](https://github.com/CloverKG369/qlbh-releases/releases/download/v1.1.14/QLBH-Setup-1.1.14.AppImage) |
| Android 7.0+ | **mobile v0.3.12** | [QLBH-Mobile-v0.3.12.apk](https://github.com/CloverKG369/qlbh-releases/releases/download/mobile-v0.3.12/QLBH-Mobile-v0.3.12.apk) |

Tất cả bản cũ nằm ở mục **Releases** bên phải.

### Cài trên Windows

1. Tải file `.exe`, chạy.
2. Chọn thư mục cài (mặc định `%LOCALAPPDATA%\Programs\QLBH`, cài theo từng người dùng).
3. Mở app → dùng thử 14 ngày, nhập mã bản quyền khi có.
4. Lần cập nhật sau app **tự tải delta** (~28 MB thay vì 119 MB).

Windows SmartScreen có thể cảnh báo vì bộ cài chưa ký số — chọn **More info → Run anyway**.

### Cài trên điện thoại Android

1. Tải file `.apk` bằng **Chrome** trên điện thoại. Nếu đang mở trong Zalo/Messenger: bấm **⋯ → Mở bằng trình duyệt** (các app này chặn tệp APK).
2. Bật **Cài ứng dụng không rõ nguồn gốc** cho trình duyệt/file manager (Android sẽ hỏi).
3. Mở file vừa tải → Cài.
4. Lần đầu mở app đã có 4 sản phẩm mẫu để bán thử.
5. Cập nhật về sau: app tự kiểm tra feed trong **Cài đặt → Cập nhật**, hoặc tải APK mới và cài đè
   (phải cùng chữ ký).

### Cài trên Linux

```bash
chmod +x QLBH-Setup-1.1.14.AppImage
./QLBH-Setup-1.1.14.AppImage
```

## 2. Cập nhật tự động

App tự kiểm tra bản mới (máy tính khi mở app + mỗi 4 giờ; điện thoại trong Cài đặt → Hệ thống).
Link feed không công bố ở đây; file cài và APK tải tay ngay trong mục Releases.

## 3. Lịch sử phát hành

### Desktop (Windows/Linux)

| Tag | Ngày | Ghi chú chính |
| --- | --- | --- |
| `v1.1.14` | 2026-11-14 | Sửa nhập số (không còn 025000), thêm khách nhanh trong POS, báo cáo lọc theo kỳ + khách hàng, xem hàng theo danh mục, thêm nhanh NCC/kho trong phiếu nhập, danh sách đơn + tạo lại đơn, huỷ đơn có PIN và hoàn tiền vào ca |
| `v1.1.13` | 2026-11-14 | Bản Linux (AppImage) trong cả release và tag cập nhật; sửa đơn từ điện thoại bị mất khi hai máy khác id; màn Báo cáo điện thoại không còn trống |
| `v1.1.12` | 2026-11-14 | Nền tảng cho phát hành gộp Windows+Linux (bản này thiếu AppImage trong tag cập nhật) |
| `v1.1.11` | 2026-11-14 | *Không phát hành* — CI lỗi trước khi tạo bản; tag đã bỏ, số hiệu bỏ trống |
| `v1.1.10` | 2026-11-13 | Khôi phục màn hình bán hàng trên điện thoại; CI/release tự làm mới feed cố định; dọn dead code |
| `v1.1.6` | 2026-11-12 | Cập nhật qua GitHub (tag cố định `desktop-latest`), bản quyền qua workers.dev |
| `v1.1.5` | 2026-11-12 | Cài đặt gộp thành 4 nhóm (Cửa hàng / Vận hành / Dữ liệu / Hệ thống) |
| `v1.1.4` | 2026-11-12 | Điện thoại đồng bộ được qua LAN (CORS cho /api/sync); thêm công cụ kiểm tra endpoint và bố cục |
| `v1.1.3` | 2026-11-12 | Máy tính trở thành máy chủ đồng bộ cho app điện thoại |
| `v1.1.2` | 2026-11-11 | Menu chính dạng thanh bên có menu con; tiêu đề cửa sổ theo tên cửa hàng |
| `v1.1.1` | 2026-11-11 | Bỏ dòng "máy chủ cấp phép"; hiện đủ 8 menu kho |
| `v1.1.0` | 2026-11-11 | Bản quyền (6 tháng/1 năm/vĩnh viễn), dùng thử 14 ngày, quản lý mã bằng trang web |
| `v1.0.1` | 2026-11-11 | `.blockmap` cho cập nhật delta |
| `v1.0.0` | 2026-11-11 | Bản phát hành đầu tiên |

### Mobile (Android)

| Tag | Ngày | Ghi chú chính |
| --- | --- | --- |
| `mobile-v0.3.12` | 2026-11-13 | Sửa màn hình bán hàng bị cắt sau refactor (có lại giỏ hàng, mã vạch, bán chịu, VietQR, in) |
| `mobile-v0.3.9` | 2026-11-12 | Cập nhật qua GitHub (tag cố định `android-latest`), bản quyền qua workers.dev |
| `mobile-v0.3.8` | 2026-11-12 | APK ký bằng khoá phát hành (tự ký, miễn phí), tải được trên điện thoại |
| `mobile-v0.3.5` | 2026-11-12 | Bàn phím hoạt động, vùng an toàn Android 15, Cài đặt gộp 4 nhóm — kiểm trên máy ảo Android 15 |
| `mobile-v0.3.4` | 2026-11-12 | Sửa "Failed to fetch" (native HTTP), toàn bộ bảng lớn thành card, 20/20 màn không tràn ngang |
| `mobile-v0.3.3` | 2026-11-12 | Hạ tầng: APK tự động sang kho chung sau khi CI build |
| `mobile-v0.3.2` | 2026-11-12 | Hợp đồng API khớp desktop; thêm `check:parity` |
| `mobile-v0.3.1` | 2026-11-12 | Sửa hướng đồng bộ và con trỏ pull/push |
| `mobile-v0.3.0` | 2026-11-12 | In hoá đơn từ POS, đồng bộ LAN, bản quyền, tự cập nhật APK, giao diện card |
| `mobile-v0.2.0` | 2026-11-12 | Dữ liệu SQLite trên máy, giao diện điện thoại, đồng bộ hai chiều |
| `mobile-v0.1.0` | 2026-11-12 | Khung Android đầu tiên, in 58/80mm, 6 đường kết nối máy in |

## 4. Quy tắc của kho này

- **Mọi bản phát hành của cả desktop và mobile đều phải có mặt ở đây.** Bản mới phát hành ở repo
  nguồn thì **CI của repo đó tự chạy** `scripts/mirror-releases.mjs` (secret `RELEASES_TOKEN`);
  nếu CI lỗi thì chạy tay lệnh dưới.
- Tag giữ nguyên gốc: desktop `vX.Y.Z`, mobile `mobile-vX.Y.Z` (dấu `mobile-` để hai sản phẩm không
  đụng tag khi app điện thoại lên 1.x).
- Không sửa file cài đã phát hành; muốn sửa thì phát hành bản mới.
- Nhãn **Latest** dành cho bản desktop mới nhất (khách lần đầu thường cài máy tính trước).
- Mỗi bản desktop phải kèm **cả** `.exe` (Windows) và `.AppImage` (Linux); thiếu một nền tảng là
  lỗi của CI, không phải "phát hành một nửa" — workflow `release-desktop` kiểm tra việc này trước
  khi tạo release.

### Tag cố định cho cập nhật tự động

Hai tag này **không phải bản phát hành thường** — chúng luôn chứa file mới nhất, để app có URL không
đổi:

| Tag | Dùng cho | File |
| --- | --- | --- |
| `android-latest` | cập nhật APK | `QLBH-Mobile.apk`, `latest-android.json` |
| `desktop-latest` | cập nhật desktop | `latest.yml`, `QLBH-Setup-X.Y.Z.exe`, `.blockmap`, `.AppImage` |

Refresh tự động: workflow `release-desktop` / `release-android` của repo `CloverKG369/qlbh` chạy
`publish-desktop-github.mjs` / `publish-android-github.mjs` sau mỗi lần phát hành. Đừng xoá hai
tag này — app đang cài giữ URL đó vĩnh viễn.

### Cập nhật kho sau khi phát hành

```bash
git clone https://github.com/CloverKG369/qlbh-releases.git
cd qlbh-releases
node scripts/mirror-releases.mjs               # cả hai sản phẩm
node scripts/mirror-releases.mjs --product mobile
node scripts/mirror-releases.mjs --dry-run     # xem sẽ làm gì
```

Cần `gh` CLI đã đăng nhập (`gh auth login`) và quyền với **hai** repo: `qlbh` (nguồn) và
`qlbh-releases` (đích). Cả hai sản phẩm phát hành từ **một** monorepo (`CloverKG369/qlbh`) với hai
quy ước tag: desktop `vX.Y.Z`, mobile `mobile-vX.Y.Z`; script lọc theo tiền tố nên `--product` luôn
chọn đúng bên.

Repo `qlbh-mobile` cũ đã được lưu trữ và đang được xoá (14/11/2026). Lịch sử 118 commit của nó nằm ở nhánh
`archive/mobile-pre-monorepo` trong `CloverKG369/qlbh`; mọi bản APK nó từng phát hành đều đã có ở
đây.

## 5. Giấy phép và bản quyền

Phần mềm được viết bởi **Xuân Đức © 2026**. Dùng thử 14 ngày; mã bản quyền 6 tháng / 1 năm / vĩnh
viễn do nhà cung cấp cấp. Chi tiết: repo nguồn mục "Bản quyền".
