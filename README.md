# 1. CÀI ĐẶT

## 1.1. Tạo Một App React Mới

### Yêu cầu: Node >= 10.16 và npm >= 5.6 để cài reactjs mới nhất

### Để tạo một app reactjs mới, hãy chạy:

    npx create-react-app my-app
    cd my-app
    npm start

## 1.2. Các Đường Dẫn CDN

### Cả React và ReactDOM đều có sẵn thông qua CDN.

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

### Các phiên bản trên chỉ dành cho việc phát triển, và không thích hợp để tạo ra sản phẩm. Các phiên bản sản xuất thu nhỏ và tối ưu hóa của React có sẵn tại:

    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

### Để tải một phiên bản cụ thể của react và react-dom, thay 18 bằng số phiên bản.

### Nếu bạn dùng React từ CDN, chúng tôi khuyên bạn nên giữ tập thuộc tính crossorigin:

#### Điều này cho phép tốt hơn error handling experience trong React 16 và sau này.

# 2. KHÁI NIỆM CHÍNH

## Cấu trúc thư mục trong một ứng dụng ReactJS thông thường sẽ bao gồm:

    node_modules: Thư mục chứa các package đã được cài đặt bởi npm.

    public: Thư mục chứa các tài nguyên tĩnh của ứng dụng, bao gồm các file HTML, CSS, hình ảnh, favicon, v.v.

    src: Thư mục chứa mã nguồn của ứng dụng, bao gồm các file .js, .jsx, .css, .scss, v.v.

    package.json: File chứa thông tin về ứng dụng và các package đã cài đặt.

    package-lock.json: File chứa thông tin về phiên bản cụ thể của các package đã cài đặt.

    README.md: File chứa thông tin về ứng dụng và hướng dẫn sử dụng.

### 2.1. Hello World

### 2.2. JSX

### 2.3. Rendering Elements

### 2.4. Components and Props

### 2.5. State and Lifecycle

### 2.6. Xử lý Events

### 2.7. Rendering có điều kiện

### 2.8. Lists Và Keys

### 2.9. Forms

### 2.10. Chuyển State Lên trên

### 2.11. Kết Hợp Và Kế Thừa

### 2.12. Tư Duy Trong React

# 3. HƯỚNG DẪN NÂNG CAO
