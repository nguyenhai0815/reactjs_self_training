# Tích hợp các thư viện bên ngoài

## 1. Tích hợp các Plugin thao tác DOM

#### React không nhận biết được những sự thay đổi của DOM nếu DOM được tác động từ bên ngoài.

#### Việc quyết định update hay không sẽ dựa trên chính những thành phần đại diện bên trong nó, và nếu những DOM node này được thay đổi bởi một thứ viện khác, React sẽ cảm thấy khó hiểu và không có cách nào để xử lý chúng.

#### Cách dễ nhất để tránh xung đột là ngăn chặn component khỏi việc update. Bạn có thể làm việc này bằng cách render các element mà React không có động cơ để update nó, ví dụ như một thẻ div trống `<div />`.

### 1.1. Tích hợp với một plugin jQuery cụ thể

#### Việc tích hợp với một plugin jQuery cụ thể có thể được thực hiện thông qua việc sử dụng refs và lifecycle methods.

- cài đặt jQuery thông qua npm

#####

    npm install jquery --save

- Import jQuery vào trong file component

#####

    import $ from 'jquery';

####

- Để tích hợp với một plugin jQuery cụ thể, cần đảm bảo rằng DOM element đã được render. Để làm điều này, bạn có thể sử dụng lifecycle method componentDidMount của React. Trong phương thức này, bạn có thể tìm kiếm element bằng cách sử dụng jQuery và thực hiện việc kích hoạt plugin đó.

## 2. Tích hợp những thư viện View khác

### React có thể được thêm vào bên trong các ứng dụng khác nhờ vào sự linh hoạt của createRoot().

### Mặc dù React thường được sử dụng ban đầu để thêm một component root vào DOM, createRoot() cũng có thể được gọi nhiều lần với những phần UI độc lập, ví dụ những thành phần nhỏ như một button, hoặc lớn như một ứng dụng.

### 2.1. Thay thế String-Based Rendering với React

Một pattern phổ biến trên những ứng dụng cũ là viết các phần của DOM như là một string và thêm nó vào DOM chẳng hạn như: $el.html(htmlString). Những đặc điểm này trong codebase là những trường hợp hoàn hảo cho việc sử dụng React. Chỉ cần viết lại string based rendering như một component React.

### 2.2. Thêm React vào một Backbone View

Backbone view đặc trưng sử dụng HTML string, hoặc các hàm string-producing template để tạo nội dung cho các phần tử DOM của nó. Quá trình này, cũng có thể được thay thế bằng việc render một component React.

## 3. Tích hợp với Model Layers

### Bình thường chúng ta được đề xuất sử dụng data flow một chiều như [React state](https://vi.legacy.reactjs.org/docs/lifting-state-up.html), [Flux](https://opensource.fb.com/), hoặc [Redux](https://redux.js.org/), các component React cũng có thể sử dụng model layer từ những framework và thư viện khác.

### 3.1. Sử dụng Backbone Models trong Component React

#### Cách đơn giản nhất để sử dụng những Backbone model và collection từ một component React là lắng nghe các sự kiện thay đổi trước đó và ép buộc việc update một cách thủ công.

#### Những component chịu trách nhiệm việc render model sẽ lắng nghe những sự kiện 'change', trong khi những component chịu trách nhiệm việc render collection sẽ lắng nghe sự kiện 'add' và 'remove'. Trong cả hai trường hợp này, chúng ta gọi this.forceUpdate() để rerender component với data mới.
