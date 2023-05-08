# Refs and DOM

### Refs là một cách giúp truy cập đến những nút DOM hoặc những phần tử React được tạo ra trong phương thức render.

## 1. Khi nào sử dụng Refs

### Một vài trường hợp hữu ích để sử dụng refs:

- Quản lý focus, text selection, hoặc media playback.
- Trigger animation của một element khác.
- Tích hợp những thư viện DOM từ bên thứ ba.

### Tránh sử dụng refs trong trường hợp có thể khai báo.

- Ví dụ: thay vì hiển thị phương thức `open()` và `close()` trong Dialog component, thì sẽ sử dụng `isOpen` như một prop để xử lý nó.

## 2. Tạo Refs

### Refs được khởi tạo bằng `React.createRef()` và được gắn vào các React element thông qua thuộc tính `ref`.

### Refs thường được gán cho một element nào đó, tại đó chúng ta có thể tham chiếu đến tất cả các thành phần bên trong nó.

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.myRef = React.createRef();
        }
        render() {
            return <div ref={this.myRef} />;
        }
    }

## 3. Truy cập Refs

### Khi một element có chứa ref `render`, có thể sử dụng một thuộc tính của ref là `current` để truy cập đến node hiện tại.

    const node = this.myRef.current;

### Giá trị tham chiếu khác nhau, phụ thuộc vào loại cuả node:

- Khi thuộc tính `ref` được sử dụng trong HTML element, `ref` sẽ nhận DOM element bên dưới làm thuộc tính `current` của nó.
- Khi thuộc tính `ref` được sử dụng trong class component tùy chỉnh, ref sẽ nhận instance của component làm thuộc tính `current` của nó.
- Bạn không thể sử dụng thuộc tính `ref` trong function components vì nó không có instances.<br>
  Nếu muốn sử dụng ref từ function component của React, chúng ta phải sử dụng Hook `useRef` để tạo ra một tham chiếu đến các phần tử DOM hoặc các instances của component.<br>
  Khi sử dụng Hook useRef, bạn có thể truy cập và cập nhật giá trị của tham chiếu trong các hàm xử lý sự kiện hoặc các chức năng khác mà không gây ra render lại component.

## 4. Hiển thị DOM Refs cho Components cha

### Ref forwarding cho phép các component tham gia hiển thị bất kỳ bản tham chiếu nào của component là con của nó.

## 5. Callback Refs

### React cũng hỗ trợ một cách set refs khác gọi là “callback refs”, giúp kiểm soát tốt hơn khi set và unset ref.

### Thay vì chuyển thuộc tính ref được tạo từ createRef(), chuyển nó thành một function. <br> Function này sẽ nhận vào một React component instance hoặc HTML DOM element như một argument của nó, có thể được lưu trữ và truy cập ở một nơi khác.
