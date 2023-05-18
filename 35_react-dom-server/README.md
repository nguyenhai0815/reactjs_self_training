# ReactDOMServer

## 1. Tổng quan

### Các methods này chỉ khả dụng trong môi trường có [Node.js Streams](https://nodejs.org/api/stream.html):

- renderToPipeableStream()
- renderToNodeStream() (Deprecated)
- renderToStaticNodeStream()

### Các methods này chỉ khả dụng trong môi trường có [Luồng web](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) (bao gồm trình duyệt, Deno và một số runtimes):

- renderToReadableStream()

### Các methods sau có thể được sử dụng trong môi trường không hỗ trợ streams:

- renderToString()
- renderToStaticMarkup()

## 2. Reference

## 2.1. renderToPipeableStream()

    ReactDOMServer.renderToPipeableStream(element, options)

### Render 1 React element thành HTML ban đầu của nó.

### Trả về một stream có pipe(res) method dẫn đầu ra và abort() để hủy bỏ yêu cầu.

### Nếu bạn gọi ReactDOM.hydrateRoot() một nút đã có server-rendered markup, React sẽ giữ nguyên nó và chỉ đính kèm các trình xử lý sự kiện, cho phép bạn có trải nghiệm first-load rất hiệu quả.

## 2.2 renderToReadableStream()

    ReactDOMServer.renderToReadableStream(element, options);

### Streams một React element sang HTML ban đầu của nó. Returns một Promise phân giải thành [Readable Stream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream). Hỗ trợ đầy đủ Suspense và streaming HTML.

## 2.3. renderToNodeStream() (Không dùng nữa)

API này sẽ bị xóa trong phiên bản chính của React trong tương lai. Sử dụng `renderToPipeableStreamthay` thế.

    const stream = renderToNodeStream(reactNode)

### Trên server, gọi renderToNodeStream để nhận Node.js Readable Stream mà bạn có thể đưa vào response.

    import { renderToNodeStream } from 'react-dom/server';

    const stream = renderToNodeStream(<App />);
    stream.pipe(response);

### Trên client, gọi hydrateRoot để tạo server-generated HTML.

### **Parameters**

- reactNode: Node React mà bạn muốn render thành HTML. Ví dụ: một JSX element như `<App />`.

### **Returns**: Một Node.js Readable Stream that export ra một chuỗi HTML

## 2.4. renderToStaticNodeStream()

    import { renderToStaticNodeStream } from 'react-dom/server';

    const stream = renderToStaticNodeStream(<Page />);
    stream.pipe(response);

### **Parameters**

- reactNode: Node React mà bạn muốn render thành HTML. Ví dụ: một JSX element như` <Page />`.

### **Returns**: Một Node.js Readable Stream that export ra một chuỗi HTML

### Caveats

- renderToStaticNodeStreamđầu ra không thể được hydrated
- Method này sẽ đợi tất cả Suspense boundaries hoàn thành trước khi trả về bất kỳ đầu ra nào.
- Kể từ React 18, method này đệm tất cả đầu ra của nó, vì vậy nó không thực sự mang lại bất kỳ lợi ích streaming nào.
- Luồng được trả về là luồng byte được mã hóa bằng utf-8.

## 2.5. renderToString

### renderToString renders cây React thành chuỗi HTML.

    const html = renderToString(reactNode)

### Reference: Trên server, gọi renderToString để render ứng dụng thành HTML.

    import { renderToString } from 'react-dom/server';

    const html = renderToString(<App />);

### Trên client, hãy gọi hydrateRootđể tạo tương tác server-generated HTML.

### **Parameters**

- reactNode: Node React mà bạn muốn render thành HTML. Ví dụ: một JSX element như` <Page />`.

### **Returns**: Một chuỗi HTML.

### Caveats

- renderToStringcó hỗ trợ Suspense hạn chế. Nếu một component bị treo, renderToStringngay lập tức gửi dự phòng của nó dưới dạng HTML.

- renderToStringhoạt động trong trình duyệt nhưng không nên sử dụng nó trong client.

## 2.6. renderToStaticMarkup()

### renderToStaticMarkup renders cây React non-interactive thành HTML string.

    import { renderToString } from 'react-dom/server';

    const html = renderToString(<App />);

### Trên server, hãy gọi renderToStaticMarkup để render ứng dụng thành HTML.

    import { renderToStaticMarkup } from 'react-dom/server';

### **Parameters**

- reactNode: Node React mà bạn muốn render thành HTML. Ví dụ: một JSX element như` <Page />`.

### **Returns**: Một chuỗi HTML.

### Caveats

- renderToStaticMarkup đầu ra không thể được hydrated.

- renderToStaticMarkup có hỗ trợ Suspense hạn chế. Nếu một thành phần bị treo, renderToStaticMarkup ngay lập tức gửi dự phòng của nó dưới dạng HTML.

- renderToStaticMarkup hoạt động trong trình duyệt nhưng không nên sử dụng nó trong client. Nếu bạn cần render một component thành HTML trong trình duyệt, hãy lấy HTML bằng cách rendering nó thành một DOM node.
