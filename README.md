# 🔮 Tarot DPS

<div align="center">
  <img src="./tarot-ui/public/vite.svg" alt="Tarot Icon" width="100"/>
  <br/>
  <i>Khám phá bí mật của những lá bài - Discover the secrets of the cards</i>
</div>

## 📖 Giới Thiệu (About)
**Tarot DPS** là một ứng dụng Web App trải bài Tarot chuyên nghiệp, được thiết kế với giao diện huyền bí (glassmorphism) và các hiệu ứng hoạt ảnh mượt mà. Ứng dụng hỗ trợ Song ngữ (Tiếng Việt & Tiếng Anh) một cách thông minh, và bao gồm đầy đủ hệ thống 78 lá bài Tarot nguyên bản.

Dự án này được chia làm 2 phần độc lập nhưng hoạt động song song để mang lại tốc độ cực nhanh:
- **`tarot-ui`**: Giao diện người dùng (Frontend) được phát triển trên nền tảng **React.js + Vite**.
- **`tarotcardapi`**: Máy chủ cung cấp dữ liệu thẻ bài (Backend API) được thiết kế gọn nhẹ bằng **Node.js + Express**.

---

## ✨ Tính Năng Nổi Bật (Features)
- **Hỗ Trợ Song Ngữ (VI / EN):** Chuyển đổi ngôn ngữ chỉ với một cú chạm. Đặc biệt ở chế độ Tiếng Việt, tên gốc Tiếng Anh của lá bài luôn được giữ lại hiển thị song song.
- **2 Chế Độ Trải Bài Đa Dạng:**
   - 🎯 **Rút 1 Lá (1-Card Draw):** Dành cho những thông điệp ngẫu nhiên nạp năng lượng đầu ngày.
   - 🔮 **Trải Bài 3 Lá (3-Card Spread):** Chế độ xem xét sâu chuỗi thời gian Quá Khứ - Hiện Tại - Tương Lai.
- **Smart LocalStorage:** Ứng dụng luôn ghi nhớ tùy chọn ngôn ngữ và cả những lá bài bạn vừa rút. F5 tải lại trang không bao giờ bị mất!
- **Thiết Kế Responsive:** Tối ưu hóa 100% tỷ lệ hiển thị cho cả Màn hình máy tính (PC) lẫn Điện thoại di động (Mobile).
- **Hoạt Ảnh CSS 3D:** Hiệu ứng lật bài mở ảo như ngoài đời thực.

---

## 🚀 Hướng Dẫn Cài Đặt (Installation)

Vì dự án chạy kết hợp song song cả Frontend và Backend API, bạn cần mở **2 cửa sổ Terminal** trên máy tính để chạy 2 thư mục này cùng lúc.

### 1. Khởi động Máy chủ API Dữ liệu (`tarotcardapi`)
Kho dữ liệu này chứa hình ảnh gốc và thông tin chữ viết của 78 lá bài Tarot.

```bash
# Mở cửa sổ Terminal 1, di chuyển vào thư mục API
cd tarotcardapi

# Cài đặt các thư viện cần thiết (Chỉ cần chạy lần đầu)
npm install

# Khởi động Sever ở cổng localhost:3000
npm start
```
*Lưu ý: Bạn phải luôn giữ Terminal này chạy ngầm để Frontend có thể lấy được hình ảnh lá bài nhé.*

### 2. Khởi động Giao diện Website (`tarot-ui`)
Đây là bộ mặt chính của trang web.

```bash
# Mở cửa sổ Terminal 2, di chuyển vào thư mục UI
cd tarot-ui

# Cài đặt các thư viện React
npm install

# Bật máy chủ giao diện Vite
npm run dev
```

Sau khi chạy xong, hãy mở trình duyệt web của bạn và truy cập vào đường dẫn: **`http://localhost:5173`** để bắt đầu bói bài!

---

## 🛠 Công Nghệ Sử Dụng (Tech Stack)
* **Design:** Vanilla CSS, CSS 3D Animation (Hover/Flip/Float)
* **Frontend:** React 18, Vite
* **Backend:** Node.js, Express framework
* **Font chữ:** Roboto (Google Fonts)
* **State Management:** React Hooks (`useState`, `useEffect`) kết hợp với HTML5 `localStorage`.

---

<div align="center">
  <sub>Copyright © 2026 - Phát triển bởi <b>DPS.MEDIA team Dev</b></sub>
</div>
