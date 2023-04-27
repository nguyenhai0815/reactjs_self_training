# **State**

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

#### **Note** Ví dụ trong App.js

## Sử dụng state đúng cách

### 1. Không sửa đổi state trực tiếp

- Không update trực tiếp State mà phải thông qua function this.setState()

### 2. Cập nhập state có thể là bất đồng bộ

- React có thể gộp nhiều lệnh gọi setState() vào một lần cập nhập để tăng hiệu năng
- Vì this.props và this.state có thể được cập nhật không đồng bộ, bạn không nên dựa vào các giá trị của chúng để tính toán trạng thái tiếp theo.

### 3. Cập nhập trạng thái được gộp lại

- Khi gọi function setState(), React sẽ merges object bạn cung cấp vào state.

# **Lifecycle**

### Các phương thức của ReactJS Lifecycle được chia thành ba loại chính:

1. Mounting: được gọi khi một component được tạo ra và được thêm vào DOM.
2. Updating : được gọi khi một component được cập nhật thông qua việc cập nhật props hoặc state.
3. Unmounting: được gọi khi một component bị huỷ bỏ và được loại bỏ khỏi DOM.

## 1. Mounting

### 1.1. constructor()

- Phương thức khởi tạo một component, nếu không khởi tạo state, bind các phương thức, thì ko cần khai báo phương thức này.

### 1.2. render(): được gọi khi component được render lần đầu tiên.

### Đây là phương thức bắt buộc duy nhất khi tạo ra một component, bắt buộc trả về một trong những giá trị

- React element
- Arrays and fragments
- Portals
- String and numbers
- Booleans or null

### **Hàm này sẽ không được gọi nếu shouldComponentUpdate() return false**

### 1.3. componentDidMount()

- Được gọi sau khi render component
- Ở đây cũng là nơi thực hiện các hàm AJAX, axios request, DOM
- Hàm setState() được đặt ở đây để tương tác vì Component đã được vô DOM.

## 2. Updating

### 2.1 shouldComponentUpdate(nextProps, nextState):

- Được gọi trước khi component được cập nhật, để xác định xem component có cần được cập nhật hay không.
- Phương thức này để cải thiện performance của React, vì đôi lúc thay đổi state hoặc props ta không muốn cập nhập lại UI, chỉ cần cho hàm này return false (mặc định là return true), khi return false thì **render**, **componentDidUpdate** sẽ không được gọi.

### 2.2 componentDidUpdate(prevProps, prevState, snapshot):

- Ngay sau khi component được cập nhập, hook này sẽ được gọi.
- Đây cũng có thể là nơi để tạo một network request khi chúng ta so sánh prop hiện tại với prop ở thời điểm trước đó
- Nếu muốn gọi **setState** ở đây, phải đưa nó trong câu điều kiện, nếu không sẽ bị lặp vô tận

- Nếu có implement phương thức getSnapshotBeforeUpdate(), giá trị return của getSnapshotBeforeUpdate() sẽ được đưa vào snapshot, nếu không thì là undefined
- Hàm này cũng không được gọi nếu shouldComponentUpdate() return false

## 3. Unmounting

### 3.1. componentWillUnmount():

- Được gọi khi render ra không có component nào hoặc người dùng chuyển hướng trang web.
