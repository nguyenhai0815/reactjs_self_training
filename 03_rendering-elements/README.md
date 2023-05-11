# Rendering Elements

    ReactJS sử dụng phương thức render để tạo ra cấu trúc DOM ảo trên một vị trí bất kỳ trên DOM thật.

### Elements được định nghĩa là đối tượng nhỏ nhất trong một ứng dụng React:

    React element không phải là DOM element

    React element là những “đối tượng đơn giản” (plain object)

    Một React element sẽ mô tả những gì sẽ mà bạn muốn hiển thị trên page

### Như đã nói ở trên thì React element không phải là một DOM element và nó sẽ được React DOM mapping với brower DOM element.

## Rendering an Element into the DOM

    Các ứng dụng được xậy dựng bằng React thì mặc định sẽ có một node gọi là "root" và toàn bộ mọi thứ được chứa trong thẻ "root" thì đều được quản lý bởi React DOM

    Về cơ bản thì đây sẽ là node ngoài cùng của React, và với ReactJS thì thường sẽ là 1 thẻ div
        <div id="root"></div>

## Updating the Rendered Element

#### - Các React element là bất biến. Một khi bạn tạo ra một element, bạn không thể thay đổi các “con” (children) hoặc các “thuộc tính” (attribute) của nó. Một element giống như một khung hình duy nhất trong một bộ phim: nó đại diện cho “giao diện” (UI) tại một thời điểm nhất định.

#### - Chỉ có một cách duy nhất để cập nhật “giao diện” (UI) đó là

    Tạo ra một element mới và truyền nó vào ReactDOM.render().

    Hay nói một cách khác: React sẽ tạo ra một element MỚI, đưa nó vào function ReactDOM.render() và toàn bộ giao diện sẽ được render lại.

## React Chỉ Cập Nhật Những Gì Cần Thiết

    React DOM so sánh element và các thành phần con của nó với cái trước đó, và chỉ áp dụng những cập nhật DOM cần thiết để đưa DOM đến trạng thái được mong muốn.

![react-render-element.gif](./public/react-render-element.gif)
