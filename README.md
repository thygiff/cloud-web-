# Trang Web Quảng Cáo Du Lịch Việt Nam

Một trang web quảng cáo du lịch hiện đại, responsive và đẹp mắt được thiết kế để giới thiệu các điểm đến du lịch tại Việt Nam.

## 🌟 Tính Năng

### Giao Diện
- **Thiết kế hiện đại**: Sử dụng gradient, shadow và animation mượt mà
- **Responsive**: Tương thích với mọi thiết bị (desktop, tablet, mobile)
- **Tương tác**: Hover effects, smooth scrolling, và animations
- **Typography**: Sử dụng font Inter cho khả năng đọc tốt

### Các Section Chính
1. **Header Navigation**: Menu cố định với logo và navigation links
2. **Hero Section**: Banner chính với call-to-action buttons
3. **Features**: 4 tính năng nổi bật của dịch vụ
4. **Destinations**: Hiển thị các điểm đến du lịch hấp dẫn
5. **Tour Packages**: Các gói tour với giá cả và thông tin chi tiết
6. **About**: Thông tin về công ty và thống kê
7. **Contact**: Form liên hệ và thông tin liên lạc
8. **Footer**: Links hữu ích và social media

### Tính Năng JavaScript
- **Mobile Menu**: Toggle menu cho thiết bị di động
- **Smooth Scrolling**: Cuộn mượt đến các section
- **Form Validation**: Kiểm tra form liên hệ
- **Notifications**: Hệ thống thông báo đẹp mắt
- **Animations**: Intersection Observer cho scroll animations
- **Counter Animation**: Hiệu ứng đếm số cho statistics
- **Image Lazy Loading**: Tối ưu hiệu suất tải ảnh

## 🚀 Cách Sử Dụng

### 1. Mở Trang Web
```bash
# Mở file index.html trong trình duyệt
# Hoặc sử dụng live server
```

### 2. Cấu Trúc File
```
├── index.html          # File HTML chính
├── styles.css          # File CSS styling
├── script.js           # File JavaScript
└── README.md           # Hướng dẫn này
```

### 3. Tùy Chỉnh Nội Dung

#### Thay Đổi Thông Tin Công Ty
- Logo và tên công ty trong header
- Thông tin liên hệ trong section Contact
- Social media links trong footer

#### Cập Nhật Điểm Đến
```html
<!-- Trong section destinations -->
<div class="destination-card">
    <div class="destination-image">
        <img src="đường-dẫn-ảnh-mới" alt="Tên điểm đến">
        <div class="destination-overlay">
            <span class="price">Giá mới</span>
        </div>
    </div>
    <div class="destination-content">
        <h3>Tên điểm đến mới</h3>
        <p>Mô tả điểm đến</p>
        <!-- ... -->
    </div>
</div>
```

#### Thêm Tour Mới
```html
<!-- Trong section packages -->
<div class="package-card">
    <div class="package-header">
        <h3>Tên tour mới</h3>
        <div class="package-price">
            <span class="price">Giá tour</span>
            <span class="duration">Thời gian</span>
        </div>
    </div>
    <div class="package-content">
        <ul>
            <li><i class="fas fa-check"></i> Điểm đến 1</li>
            <li><i class="fas fa-check"></i> Điểm đến 2</li>
            <!-- ... -->
        </ul>
        <button class="btn btn-primary">Đặt Tour</button>
    </div>
</div>
```

## 🎨 Tùy Chỉnh Giao Diện

### Thay Đổi Màu Sắc
Trong file `styles.css`, tìm và thay đổi các biến màu:

```css
/* Màu chủ đạo */
.btn-primary {
    background: #2563eb; /* Thay đổi màu này */
}

/* Màu gradient hero */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Thay Đổi Font
```css
body {
    font-family: 'Inter', sans-serif; /* Thay đổi font */
}
```

### Thay Đổi Layout
```css
/* Thay đổi số cột trong grid */
.destinations-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
```

## 📱 Responsive Design

Trang web được thiết kế responsive với các breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px  
- **Mobile**: < 480px

### Mobile Menu
- Menu hamburger xuất hiện trên mobile
- Smooth animation khi mở/đóng
- Auto-close khi click vào link

## 🔧 Tối Ưu Hóa

### Performance
- **Lazy Loading**: Ảnh chỉ tải khi scroll đến
- **CSS Optimization**: Sử dụng CSS Grid và Flexbox
- **JavaScript**: Intersection Observer cho animations

### SEO
- Semantic HTML structure
- Meta tags đầy đủ
- Alt text cho images
- Structured data ready

## 🌐 Deployment

### GitHub Pages
1. Push code lên GitHub repository
2. Vào Settings > Pages
3. Chọn source branch (main/master)
4. Trang web sẽ có URL: `https://username.github.io/repository-name`

### Netlify
1. Drag & drop folder chứa files
2. Hoặc connect GitHub repository
3. Auto-deploy khi có thay đổi

### Vercel
1. Import GitHub repository
2. Auto-deploy và preview

## 📞 Hỗ Trợ

### Các Tính Năng Có Thể Thêm
- [ ] Booking system tích hợp
- [ ] Payment gateway
- [ ] Admin dashboard
- [ ] Blog section
- [ ] Review system
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Search functionality
- [ ] Filter destinations
- [ ] Interactive map

### Troubleshooting
- **Ảnh không hiển thị**: Kiểm tra đường dẫn ảnh
- **Font không load**: Kiểm tra kết nối internet
- **Menu mobile không hoạt động**: Kiểm tra JavaScript console
- **Form không submit**: Kiểm tra validation logic

## 📄 License

Dự án này được tạo cho mục đích học tập và thương mại. Bạn có thể tự do sử dụng và chỉnh sửa.

## 🤝 Đóng Góp

Nếu bạn muốn đóng góp vào dự án:
1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

---


**Lưu ý**: Đây là template cơ bản, bạn cần thay thế nội dung và hình ảnh phù hợp với thương hiệu của mình. 
