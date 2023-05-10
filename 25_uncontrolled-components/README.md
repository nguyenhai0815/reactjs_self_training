# Uncontrolled Components

### Uncontrolled Components là các phần tử form mà giá trị được quản lý bởi DOM thay vì được quản lý bởi React Component. Vì vậy, ReactJS không có khả năng kiểm soát giá trị của các phần tử form này.

### Các phần tử form thông thường trong ReactJS là Controlled Components, nghĩa là giá trị của chúng được quản lý bởi React Component và được cập nhật bởi React Component khi người dùng tương tác với phần tử form.

## 1. Giá trị mặc định

### Trong vòng đời render component React, thuộc tính value của các thành phần trong form sẽ override các giá trị trong DOM.

### Với uncontrolled component, thường cần sử dụng React để chỉ định giá trị mặc định, nhưng không thể kiểm soát được các bản thay đổi ở phía sau (nếu dùng value mỗi khi form render, nó sẽ luôn gán giá trị này cho input) **=>** phải chỉ định giá trị của defaultValue thay vì value.

### Việc thay đổi giá trị của defaultValue sau khi component được mounted sẽ không làm cập nhật giá trị trên cây DOM.

### `<input type="checkbox">` và `<input type="radio"> `có hỗ trợ defaultChecked, `<select>` và `<textarea>` hỗ trợ defaultValue.

## 2. Thẻ input type file

### Trong HTML, thẻ `<input type="file">` cho phép người dùng chọn một hoặc nhiều files từ bộ nhớ thiết bị của họ và gửi đến server hoặc xử lí bằng javascript thông qua [File API](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications).

    <input type="file" />

### Trong React, thẻ `<input type="file" />` luôn luôn là uncontrolled component vì giá trị của nó chỉ được gán bởi người dùng, không phải chương trình.
