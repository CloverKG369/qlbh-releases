# QLBH — kho phát hành chung (desktop + Android)

Tất cả bản cài của **hai** sản phẩm được phát hành tại đây, để khách chỉ cần một nơi:

| Sản phẩm | Nền tảng | Mã nguồn |
| --- | --- | --- |
| **QLBH desktop** — bán hàng, kho, công nợ trên máy tính | Windows (NSIS), Linux (AppImage) | https://github.com/CloverKG369/qlbh |
| **QLBH Mobile** — cùng nghiệp vụ trên điện thoại Android | Android (APK) | https://github.com/CloverKG369/qlbh-mobile |

Repo này **chỉ chứa file cài + feed cập nhật**. Không chứa mã nguồn.

---

## 1. Tải bản mới nhất

| Nền tảng | Bản mới nhất | File |
| --- | --- | --- |
| Windows 10/11 | **desktop v1.1.5** | [QLBH-Setup-1.1.5.exe](https://github.com/CloverKG369/qlbh-releases/releases/download/v1.1.5/QLBH-Setup-1.1.5.exe) (~119 MB) |
| Linux | **desktop v1.0.1** | [QLBH-Setup-1.0.1.AppImage](https://github.com/CloverKG369/qlbh-releases/releases/download/v1.0.1/QLBH-Setup-1.0.1.AppImage) (~126 MB) |
| Android 7.0+ | **mobile v0.3.5** | [QLBH-Mobile-v0.3.5.apk](https://github.com/CloverKG369/qlbh-releases/releases/download/mobile-v0.3.5/QLBH-Mobile-v0.3.5.apk) (~13.5 MB) |

Tất cả bản cũ nằm ở mục **Releases** bên phải.

### Cài trên Windows

1. Tải file `.exe`, chạy.
2. Chọn thư mục cài (mặc định `%LOCALAPPDATA%\Programs\QLBH`, cài theo từng người dùng).
3. Mở app → dùng thử 14 ngày, nhập mã bản quyền khi có.
4. Lần cập nhật sau app **tự tải delta** (~28 MB thay vì 119 MB).

Windows SmartScreen có thể cảnh báo vì bộ cài chưa ký số — chọn **More info → Run anyway**.

### Cài trên điện thoại Android

1. Tải file `.apk` bằng trình duyệt trên điện thoại.
2. Bật **Cài ứng dụng không rõ nguồn gốc** cho trình duyệt/file manager (Android sẽ hỏi).
3. Mở file vừa tải → Cài.
4. Lần đầu mở app đã có 4 sản phẩm mẫu để bán thử.
5. Cập nhật về sau: app tự kiểm tra feed trong **Cài đặt → Cập nhật**, hoặc tải APK mới và cài đè
   (phải cùng chữ ký).

### Cài trên Linux

```bash
chmod +x QLBH-Setup-1.0.1.AppImage
./QLBH-Setup-1.0.1.AppImage
```

## 2. Feed cập nhật (dùng bởi chính app)

| Sản phẩm | Feed | Dùng cho |
| --- | --- | --- |
| desktop | https://updates.tncheck.us/qlbh/latest.yml | Windows tự cập nhật |
| desktop | https://updates.tncheck.us/qlbh/latest-linux.yml | Linux tự cập nhật |
| mobile | https://updates.tncheck.us/qlbh/android/latest-android.json | APK báo bản mới |

Feed gốc phục vụ trên Cloudflare R2 (`updates.tncheck.us`); repo này là **bản sao lưu phát hành**
có cùng file cài và feed, dùng khi cần tải tay hoặc đối chiếu.

## 3. Lịch sử phát hành

### Desktop (Windows/Linux)

| Tag | Ngày | Ghi chú chính |
| --- | --- | --- |
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

### Cập nhật kho sau khi phát hành

```bash
git clone https://github.com/CloverKG369/qlbh-releases.git
cd qlbh-releases
node scripts/mirror-releases.mjs               # cả hai sản phẩm
node scripts/mirror-releases.mjs --product mobile
node scripts/mirror-releases.mjs --dry-run     # xem sẽ làm gì
```

Cần `gh` CLI đã đăng nhập (`gh auth login`) và quyền với cả ba repo.

## 5. Giấy phép và bản quyền

Phần mềm được viết bởi **Xuân Đức © 2026**. Dùng thử 14 ngày; mã bản quyền 6 tháng / 1 năm / vĩnh
viễn do nhà cung cấp cấp. Chi tiết: repo nguồn mục "Bản quyền".
