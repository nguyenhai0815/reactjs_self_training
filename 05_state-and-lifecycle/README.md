# State and Lifecycle

### state là một đối tượng JavaScript lưu trữ các giá trị có thể thay đổi. Khi trạng thái của một thành phần được thay đổi, thành phần sẽ được hiển thị lại với trạng thái mới. Trong React, các giá trị trạng thái được khởi tạo trong hàm constructor của lớp component.

### Khi trạng thái của một component thay đổi, React sẽ tự động cập nhật lại giao diện để hiển thị các thay đổi đó. Tuy nhiên, trạng thái chỉ có thể được thay đổi bằng cách sử dụng phương thức setState.

## Chyển đổi Function thành Class

### Bạn có thể chuyển đổi một function của thành phần như Clock thành class trong năm bước:

1. Tạo một ES6 class, cùng tên, cho nó extends React.Component.
2. Thêm một phương thức rỗng gọi là render().
3. Di chuyển nội dung của function vào bên trong phương thức render()
4. Thay thế props thành this.props trong nội dung của render().
5. Xóa khai báo function rỗng thừa lại mà ta đã lấy nội dung từ nó.

### Thêm Local State vào Class

1. Thay thế this.props.date thành this.state.date bên trong phương thức render()
2. Thêm một class constructor gán this.state ban đầu:
3. Xóa prop date từ phần tử <Clock />

### Thêm các phương thức Lifecycle vào Class
