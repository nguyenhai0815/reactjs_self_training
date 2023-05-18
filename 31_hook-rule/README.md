# Nguyên tắc sử dụng Hook

## 1. Nguyên tắc sử dụng Hook

### 1.1. Chỉ sử dụng Hooks trong Function Components: Hooks chỉ hoạt động trong Function Components (không phải là Class Components). Điều này đảm bảo rằng các component của bạn được viết theo kiểu hàm và có cú pháp ngắn gọn hơn.

### 1.2. Không gọi Hooks bên trong vòng lặp, điều kiện hay các hàm lồng nhau: Hooks cần được gọi ở ngang bề mặt của component và luôn được gọi theo thứ tự nhất định. Điều này giúp React theo dõi và quản lý state và lifecycle của component một cách chính xác.

### 1.3. Sử dụng Hooks theo thứ tự nhất định: Khi sử dụng nhiều Hooks trong một component, luôn đảm bảo gọi chúng theo thứ tự nhất định. Ví dụ, luôn gọi các Hooks state trước các Hooks effect.

### 1.4. Gọi Hooks trong cùng mỗi lần render: Không nên gọi Hooks chỉ khi một điều kiện cụ thể được thỏa mãn. Hooks cần được gọi trong mỗi lần render của component để đảm bảo tính nhất quán.

### 1.5. Sử dụng tên hàm gợi nhớ trong Hooks effect: Khi sử dụng Hooks effect, hãy đặt tên cho hàm gợi nhớ để giúp React xác định các Hooks effect khác nhau. Điều này giúp tránh gọi Hooks effect không cần thiết khi các dependency không thay đổi.

### 1.6. Sử dụng dependencies trong Hooks effect: Sử dụng mảng dependencies để chỉ định các biến phụ thuộc mà Hooks effect cần theo dõi. Điều này giúp tối ưu hiệu suất và tránh việc gọi lại không cần thiết.

### 1.7. Chia nhỏ logic vào các custom Hooks: Khi có logic phức tạp hoặc được sử dụng lại ở nhiều component, hãy xem xét việc tạo các custom Hooks để tái sử dụng logic đó. Điều này giúp giảm sự lặp lại và tăng khả năng tái sử dụng của code.

### 1.8. Đặt tên cho Hooks theo quy ước: Đặt tên cho các custom Hooks bằng tiền tố "use" để phân biệt chúng với các function thông thường. Ví dụ: useCounter, useFetchData, useLocalStorage,...

## 2. ESLint Plugin

### ESLint là một công cụ phân tích mã nguồn JavaScript được sử dụng để tìm kiếm lỗi cú pháp, kiểu dữ liệu không chính xác, cách viết không tốt và các vấn đề khác trong mã nguồn. ESLint Plugin là các plugin mở rộng của ESLint, cung cấp các quy tắc bổ sung để kiểm tra và áp dụng các quy ước cụ thể trong mã nguồn JavaScript.
