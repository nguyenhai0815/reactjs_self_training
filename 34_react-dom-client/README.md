# ReactDOMCClient

### react-dom/client cung cấp các methods dành riêng cho client được sử dụng để khởi tạo ứng dụng trên client.

    import * as ReactDOM from 'react-dom/client';

    ES5 với npm:
    var ReactDOM = require('react-dom/client');

## 1. Tổng quan

### Các methods sau đây có thể được sử dụng trong môi trường client:

- createRoot()
- hydrateRoot()

## 2. Reference

### 2.1. createRoot()

    createRoot(container[, options]);

### Tạo một React root cho được cung cấp container và return root. Root có thể được sử dụng để render React element vào DOM với render:

    const root = createRoot(container);
    root.render(element);

### createRoot chấp nhận 2 options:

- onRecoverableError: optional callback được gọi khi React tự động phục hồi lỗi.
- identifierPrefix: optional prefix React sử dụng cho id được tạo bởi `React.useId`. Hữu ích để tránh xung đột khi sử dụng nhiều root trên cùng một trang. Phải có cùng tiền tố được sử dụng trên server.

### Root cũng có thể được unmounted với `unmount`:

    root.unmount();

### 2.2. hydrateRoot()

    hydrateRoot(container, element[, options])

### Tương tự như createRoot(), nhưng được sử dụng để hydrate container có nội dung HTML được rendered bởi ReactDOMServer. React sẽ cố gắng đính kèm trình xử lý sự kiện vào markup hiện có.

### hydrateRoot chấp nhận 2 options:

- onRecoverableError: optional callback được gọi khi React tự động phục hồi lỗi.
- identifierPrefix: optional prefix React sử dụng cho id được tạo bởi `React.useId`. Hữu ích để tránh xung đột khi sử dụng nhiều root trên cùng một trang. Phải có cùng tiền tố được sử dụng trên server.
