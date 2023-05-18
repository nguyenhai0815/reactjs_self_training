# DOM Elements

### React áp dụng hệ thống DOM không phụ thuộc vào trình duyệt để tăng hiệu suất và độ tương thích với nhiều trình duyệt khác nhau.

### Trong React, tất cả các thuộc tính của DOM (bao gồm xử lí sự kiện) phải được viết theo camelCase. Ví dụ như attribute tabindex, thì trong React là tabIndex. Có những ngoại lệ là thuộc tính aria-_ và data-_ phải được viết chữ thường. Ví dụ aria-label vẫn là aria-label.

## **Sự khác biệt trong các thuộc tính**

## 1. checked

### Thuộc tính checked được hỗ trợ bởi các component `<input>` với kiểu `checkbox` hoặc `radio`. Có thể dùng nó để thiết lập cho component có được checked hay chưa. Điều này hữu ích khi xây dựng những Component Kiểm Soát.

### defaultChecked là giá trị không kiểm soát, nó sẽ quyết định component có được chọn hay không khi nó được mount lần đầu tiên.

## 2. className

### Để đặt class css, sử dụng thuộc tính className. Nó được sử dụng cho tất cả các phần tử DOM và SVG như div, a và những thuộc tính khác.

### Nếu sử dụng React với Web Components (trường hợp không phổ biến), thì vẫn dùng class.

## 3. dangerouslySetInnerHTML

### dangerouslySetInnerHTML tương đương với innerHTML trong DOM.

### Việc thay đổi DOM từ Javascript khá rủi ro do nó có thể vô tình để lộ người dùng cross-site scripting (XSS). Vì vậy, React có thể tạo HTML trực tiếp, nhưng bạn phải sử dụng dangerouslySetInnerHTML và truyền một object với key là \_html để nhăc bạn nhớ rằng điều này không an toàn.

    function createMarkup() {
        return {__html: 'First &middot; Second'};
    }

    function MyComponent() {
        return <div dangerouslySetInnerHTML={createMarkup()} />;
    }

## 4. htmlFor

### Vì for là một từ khoá trong Javascript, React dùng htmlFor.

## 5. onChange

### Sự kiện onChange hoạt động đúng như tên gọi của nó: khi một giá trị của trường mẫu bị thay đổi, sự kiện này được phát ra.

## 6. selected

### Thuộc tính selected được sử dụng trong <option> để đánh dấu option nào được chọn trong một <select>.

### Nếu muốn đánh dấu một <option> đã được select, tham chiếu giá trị của option đó bằng value của <select>

## 7. style

### Thuộc tính style nhận vào một object với các thuộc tính CSS ở dạng camelCase thay vì một chuỗi CSS.

### Nó sẽ nhất quán với thuộc tính style của Javascript trên DOM, hiệu quả hơn và đề phòng những lỗ hỗng bảo mật XSS.

### Ví dụ:

    const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + imgUrl + ')',
    };

    function HelloWorldComponent() {
        return <div style={divStyle}>Hello World!</div>;
    }

### Styles không tự động thêm tiền tố. Để tương thích với các trình duyệt thêm tiền tố vào. Ví dụ:

    const divStyle = {
        WebkitTransition: 'all', // nhớ là chữ 'W' được viết hoa
        msTransition: 'all' // 'ms' là tiền tố duy nhất được viết thường
    };

    function ComponentWithTransition() {
        return <div style={divStyle}>This should work cross-browser</div>;
    }

### Các từ khoá style được viết theo dạng camelCase để đồng nhất với việc truy cập các thuộc tính trên DOM từ Javascript

### Các tiền tố ngoài ms phải được bắt đầu bằng một chữ hoa ví dụ như WebkitTransition.

### React sẽ tự động thêm hậu tố “px” vào sau một vài kiểu thuộc tính số inline nhất định. Nếu muốn sử dụng đơn vị khác ngoài ‘px’, hãy thêm đơn vị mong muốn dưới dạng chuỗi, ví dụ:

    // Result style: '10px'
    <div style={{ height: 10 }}>
        Hello World!
    </div>

    // Result style: '10%'
    <div style={{ height: '10%' }}>
        Hello World!
    </div>

### Không phải thuộc tính nào cũng được thêm hậu tố “px” vào sau. Các thuộc tính không có đơn vị sẽ được giữ nguyên, ví dụ như zoom, order, flex.

## 8. suppressContentEditableWarning

### Một component có component con được đánh dấu là contentEditable sẽ không hoạt động và sẽ được cảnh báo.

### Thuộc tính này sẽ bỏ đi cảnh báo, nhưng không cần thiết phải dùng nó trừ khi đang xây dựng một thư viện làm việc trực tiếp với contentEditable như [Draft.js](https://facebook.github.io/draft-js/).

## 9. suppressHydrationWarning

### Nếu bạn sử dụng server-side rendering, thông thường sẽ có một cảnh báo khi nội dung được render trên server khác với client.

### Tuy nhiên, trong một vài trường hợp, rất khó để đảm báo server và client trùng khớp với nhau ví dụ như render timestamp.

### Nếu để suppressHydrationWarning là true, React sẽ không cảnh báo về những sự không trùng khớp trong những thuộc tính và nội dung của element đó. Nó chỉ hoạt động một cấp, và được dự định sử dụng như một lối thoát.

## 10. value

### Thuộc tính value được hỗ trợ bởi những component `<input>`, `<select>` và `<textarea>`.

### Có thể sử dụng nó để đặt giá trị của component. Điều này là cần thiết để tạo Component Kiểm Soát

### defaultValue là thuộc tính tương đương trong Component Không Kiểm Soát, nó đặt giá trị cho Component khi nó được mount lần đầu tiên.

## **Tất cả thuộc tính HTML được hỗ trợ**

### React luôn cung cấp một API với trọng tâm là javascript cho DOM. Bời vì những React component thường nhận những props được tuỳ chỉnh hoặc có liên quan tới DOM, React sử dụng quy ước camelCase như là các DOM APIs.
