# ReactDOM

### Gói react-domcung cấp các phương thức dành riêng cho DOM có thể được sử dụng ở cấp cao nhất của ứng dụng của bạn và như một lối thoát hiểm để ra ngoài mô hình React nếu bạn cần.

    import * as ReactDOM from 'react-dom';

    - ES5 với npm:
    var ReactDOM = require('react-dom');

### Gói này react-domcũng cung cấp các mô-đun dành riêng cho ứng dụng client và server:

- [react-dom/client](https://vi.legacy.reactjs.org/docs/react-dom.html)
- [react-dom/server](https://vi.legacy.reactjs.org/docs/react-dom-server.html)

## 1. Tổng quan

### Gói react-dom exports các methods sau:

- createPortal()
- flushSync()

### Các phương pháp này react-domcũng được exports, nhưng được coi là cũ:

- render()
- hydrate()
- findDOMNode()
- unmountComponentAtNode()

### Browser Support

React hỗ trợ tất cả các trình duyệt mới nhất, mặc dù một số polyfill được yêu cầu cho các phiên bản cũ hơn.

## 2. Reference

### 2.1. createPortal()

### Tạo một portal. Portals cung cấp một cách để kết xuất nút con thành một nút DOM tồn tại bên ngoài hệ thống phân cấp của thành phần DOM .

    createPortal(child, container)

### 2.2. flushSync()

    flushSync(callback)

### Buộc React xóa bất kỳ bản cập nhật nào bên trong `callback` được cung cấp một cách đồng bộ. Điều này đảm bảo rằng DOM được cập nhật ngay lập tức.

    // Force this state update to be synchronous.

    flushSync(() => {
        setCount(count + 1);
    });
    // By this point, DOM is updated.

## 3. Legacy Reference

### 3.1. render()

    render(element, container[, callback])

### Render một phần tử React vào DOM trong phần được cung cấp containervà trả về một tham chiếu đến thành phần (hoặc trả về null cho các thành phần không trạng thái).

### Nếu phần tử React trước đó đã được hiển thị thành container, thì phần tử này sẽ thực hiện cập nhật trên phần tử đó và chỉ thay đổi DOM khi cần thiết để phản ánh phần tử React mới nhất.

### Nếu optional callback được cung cấp, nó sẽ được thực thi sau khi thành phần được hiển thị hoặc cập nhật.

### 3.2. hydrate()

    hydrate(element, container[, callback])

### Tương tự như render(), nhưng được sử dụng để hydrate vùng chứa có nội dung HTML được hiển thị bởi ReactDOMServer. React sẽ cố gắng đính kèm trình xử lý sự kiện vào markup hiện có.

### Nếu thuộc tính hoặc nội dung văn bản của một phần tử không thể tránh khỏi sự khác biệt giữa server và client (ví dụ: timestamp), bạn có thể tắt cảnh báo bằng cách thêm `suppressHydrationWarning={true}` vào element. Nó chỉ hoạt động ở độ sâu một tầng và được dùng làm cửa thoát hiểm.

### Nếu bạn cần render thứ gì đó khác trên server và client, bạn có thể thực hiện render hai lượt. Components hiển thị thứ gì đó khác trên client có thể đọc một biến trạng thái như this.state.isClient, bạn có thể đặt biến này true trong componentDidMount().

### 3.3. unmountComponentAtNode()

    unmountComponentAtNode(container)

### Xóa một thành phần React đã gắn kết khỏi DOM và dọn sạch các event handlers và state. Nếu không có component nào được gắn vào container, việc gọi function này sẽ không có tác dụng gì. Trả về true nếu một component chưa được unmounted và false nếu không có component nào để unmount.

### 3.4. findDOMNode

    findDOMNode(component)

### Nếu component này đã được gắn vào DOM, thì nó sẽ trả về DOM element trình duyệt gốc tương ứng. Phương pháp này hữu ích để đọc các giá trị bên ngoài DOM, chẳng hạn như form field values và thực hiện các phép đo DOM. Trong hầu hết các trường hợp, bạn có thể đính kèm một tham chiếu vào nút DOM và findDOMNode hoàn toàn không sử dụng.

### Khi một component renders null hoặc false, findDOMNode trả về null. Khi một component renders một chuỗi, findDOMNodetrả về một nút DOM văn bản chứa giá trị đó.
