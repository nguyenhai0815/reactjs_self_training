# Web Components

## 1. Sử dụng Web Components trong React

### Có hai cách để tích hợp Web Components vào ứng dụng React:

### 1.1. Sử dụng React Web Components

#### React Web Components là một thư viện React cho phép chúng ta sử dụng các Web Components trong các ứng dụng React. Nó cung cấp một wrapper để đóng gói các Web Components và biến chúng thành các thành phần React có thể tái sử dụng.

#### Để sử dụng React Web Components, chúng ta cần cài đặt thư viện bằng lệnh npm:

    npm install react-web-component --save

#### Sau đó, chúng ta có thể tạo một wrapper cho một Web Component bằng cách sử dụng decorator @webComponent

### 1.2. Sử dụng các thành phần React bình thường để hiển thị Web Components

#### Chúng ta có thể sử dụng các thành phần React bình thường để hiển thị các Web Components bằng cách sử dụng các thuộc tính DOM như `ref` để truy cập các phần tử HTML được tạo ra bởi các Web Components.

#### Tuy nhiên, cách này có thể gặp một số vấn đề liên quan đến tính năng và tương thích. Do đó, cần phải kiểm tra kỹ lưỡng các Web Components trước khi sử dụng chúng trong ứng dụng React.

## 2. Sử dụng React trong Web Components

### Chúng ta có thể sử dụng React để quản lý trạng thái của Web Components và cung cấp các phương thức và thuộc tính cho Web Components.

### Để sử dụng React trong Web Components, chúng ta có thể sử dụng thư viện `react-custom-elements`. Thư viện này cung cấp một cách để đóng gói các thành phần React thành các Web Components có thể sử dụng được trên mọi trình duyệt.

#### Cài đặt thư viện bằng lệnh npm:

    npm install react-custom-elements --save

#### Sau đó, chúng ta có thể đóng gói một thành phần React thành một Web Component bằng cách sử dụng hàm defineCustomElement từ thư viện react-custom-elements
