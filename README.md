# QLBH — kho phát hành chung (desktop + Android)

Tất cả bản cài của **hai** sản phẩm được phát hành tại đây, để khách chỉ cần một nơi:

| Sản phẩm | Nền tảng | Mã nguồn |
| --- | --- | --- |
| **QLBH desktop** — bán hàng, kho, công nợ trên máy tính | Windows (NSIS), Linux (AppImage) | https://github.com/CloverKG369/qlbh |
| **QLBH Mobile** — cùng nghiệp vụ trên điện thoại Android | Android (APK) | https://github.com/CloverKG369/qlbh (`apps/mobile`) |

Repo này **chỉ chứa file cài + feed cập nhật**. Không chứa mã nguồn.

---

## 0. Một trang tải cho tất cả

Nhãn **Latest** của GitHub chỉ gắn được cho **một** bản, mà mỗi sản phẩm lại là một bản riêng —
khách mở "Latest" chỉ thấy file desktop và hỏi APK/Linux ở đâu. Vì vậy có thêm tag
**[`latest`](https://github.com/CloverKG369/qlbh-releases/releases/tag/latest)**: một trang chứa
**cả ba** bộ cài của bản mới nhất (Windows `.exe`, Linux `.AppImage`, Android `.apk`), do CI làm mới
sau mỗi lần phát hành.

Link gửi khách: **https://github.com/CloverKG369/qlbh-releases/releases/tag/latest**

## 1. Tải bản mới nhất

| Nền tảng | Bản mới nhất | File |
| --- | --- | --- |
| Windows 10/11 | **desktop v1.1.31** | [QLBH-Setup-1.1.31.exe](https://github.com/CloverKG369/qlbh-releases/releases/download/v1.1.31/QLBH-Setup-1.1.31.exe) |
| Linux | **desktop v1.1.31** | [QLBH-Setup-1.1.31.AppImage](https://github.com/CloverKG369/qlbh-releases/releases/download/v1.1.31/QLBH-Setup-1.1.31.AppImage) |
| Android 7.0+ | **mobile v0.3.29** | [QLBH-Mobile-v0.3.29.apk](https://github.com/CloverKG369/qlbh-releases/releases/download/mobile-v0.3.29/QLBH-Mobile-v0.3.29.apk) |

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
chmod +x QLBH-Setup-1.1.31.AppImage
./QLBH-Setup-1.1.31.AppImage
```

## 2. Cập nhật tự động

App tự kiểm tra bản mới (máy tính khi mở app + mỗi 4 giờ; điện thoại trong Cài đặt → Hệ thống).
Link feed không công bố ở đây; file cài và APK tải tay ngay trong mục Releases.

## 3. Lịch sử phát hành

### Desktop (Windows/Linux)

| Tag | Ngày | Ghi chú chính |
| --- | --- | --- |
| `v1.1.31` | 2026-11-17 | Tồn kho hiện ngay sản phẩm mới · sửa giá bán lẻ tại giỏ · bỏ hạn mức nợ, mọi khách ghi nợ được · bảng không cuộn ngang (tiêu đề ngắn + tooltip) · hành động là icon |
| `v1.1.29` | 2026-11-16 | POS mobile tách 2 pane Sản phẩm / Giỏ hàng, chip không cắt, thanh tổng tiền dính đáy |
| `v1.1.28` | 2026-11-16 | Viết lại Sổ công nợ: 2 lớp gọn, tìm nhanh, tự điền số thu, bỏ FIFO |
| `v1.1.27` | 2026-11-16 | Sổ công nợ: sửa 5 lỗi logic (KPI, tiền két, tổng đã trả, đối tác đã xoá, tab trùng) |
| `v1.1.26` | 2026-11-16 | Sổ cái công nợ thành tab, checkbox chọn nhiều, xoá/huỷ hàng loạt |
| `v1.1.25` | 2026-11-16 | Đồng bộ hai chiều toàn bộ chứng từ, huỷ phiếu thu, tự động đồng bộ |
| `v1.1.24` | 2026-11-16 | Sổ công nợ: nhập nợ cũ, điều chỉnh, sửa/xoá bút toán nhập tay |
| `v1.1.23` | 2026-11-16 | Sửa logic xoá (danh mục 0 sản phẩm, chặn xoá SP/kho còn tồn), bảng hết cuộn ngang, bill bỏ dòng tác giả |
| `v1.1.22` | 2026-11-16 | Sửa lỗi không xoá được: hộp thoại trong app thay confirm native, client không bỏ qua lỗi máy chủ |
| `v1.1.21` | 2026-11-15 | Nhập liệu ổn định (focus), thêm sản phẩm ngay trong phiếu nhập kho |

### Mobile (Android)

| Tag | Ngày | Ghi chú chính |
| --- | --- | --- |
| `mobile-v0.3.29` | 2026-11-17 | Cùng 5 thay đổi với desktop 1.1.31 |
| `mobile-v0.3.27` | 2026-11-16 | POS mobile: 2 pane Sản phẩm / Giỏ hàng, chip không cắt, thanh thanh toán dính đáy |
| `mobile-v0.3.26` | 2026-11-16 | Sổ công nợ viết lại gọn, tự động |
| `mobile-v0.3.25` | 2026-11-16 | Sổ công nợ: sửa lỗi KPI/két/tổng, bỏ tab trùng |
| `mobile-v0.3.24` | 2026-11-16 | Sổ cái dạng tab, chọn nhiều dòng |
| `mobile-v0.3.23` | 2026-11-16 | Đồng bộ hai chiều, huỷ phiếu thu, tự động đồng bộ |
| `mobile-v0.3.22` | 2026-11-16 | Nhập nợ cũ, điều chỉnh, sửa/xoá bút toán tay |
| `mobile-v0.3.21` | 2026-11-16 | Sửa logic xoá, bảng hết cuộn ngang, bill gọn |
| `mobile-v0.3.20` | 2026-11-16 | Sửa nút xoá (hộp thoại trong app) |

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
