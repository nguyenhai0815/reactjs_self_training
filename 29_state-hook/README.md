# State Hook

## 1. Hooks và Function Components

### 1.1. Function Components là một cách để viết các thành phần giao diện trong ReactJS bằng cách sử dụng các hàm JavaScript thay vì sử dụng các lớp như trong React Class Components. Function Components là các hàm JavaScript thuần túy nhận vào một đối tượng props và trả về các phần tử React để hiển thị trên giao diện người dùng.

### Ví dụ:

    import React from 'react';

    function MyComponent(props) {
        return <h1>Hello, {props.name}!</h1>;
    }

    export default MyComponent;

### 1.2. Hook là một hàm đặc biệt cho phép bạn sử dụng các tính năng của React (mà không cần phải tạo class).

    Ví dụ, useState là một hook cho phép bạn thêm React state vào function components. Chúng ta sẽ tìm hiểu các hook còn lại trong các chương kế tiếp.

## 2. Khai báo một biến state

### Gọi useState Hook trực tiếp bên trong component:

    import React, { useState } from 'react';

    function Example() {
        // Khai báo một biến state mới, gọi nó là "count"
        const [count, setCount] = useState(0);
    }

- useState khai báo một “state variable” (biến state). Đây là cách để “lưu giữ” các giá trị giữa các lần gọi hàm
- Thông thường, các biến này “biến mất” khi hàm kết thúc nhưng các biến state này được React giữ lại.
- Tham số duy nhất được truyền vào hook useState() là state ban đầu. state không cần thiết phải là object mà có thể là số hoặc chuỗi.
- useState trả về một cặp giá trị dưới dạng mảng: state hiện tại và một hàm để update nó. Ví dụ `const [count, setCount] = useState()`. Cặp này tương tự như `this.state.count` và `this.setState` trong class, khác là ta dùng chúng theo cặp.

## 3. Đọc State

### Trong function (sử dụng với hooks), chúng ta dùng trực tiếp biến

- Ví dụ:

######

    <p>Bạn đã click{count} lần</p>

## 4. Updating State

### Trong function (sử dụng với hooks), chúng ta đã có biến `setCount` và `count` cho nên không cần `this`

    <button onClick={() => setCount(count + 1)}>
        Click here
    </button>
