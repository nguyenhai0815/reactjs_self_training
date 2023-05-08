# Forms

- Forms là một trong những thành phần quan trọng trong việc tương tác của người dùng với ứng dụng web.
- Trong ReactJS, Forms được tạo ra bằng cách sử dụng các components được cung cấp bởi React như `<form>`, `<input>`, `<textarea>`, ...
- Các components Forms trong ReactJS sẽ giúp cho việc quản lý state của form trở nên dễ dàng hơn bằng cách lấy giá trị của form và thay đổi state của ứng dụng.
  -Các thành phần cơ bản trong Forms của ReactJS bao gồm:

  - `<form>`: Component này được sử dụng để tạo ra một form trong ứng dụng ReactJS.

  - `<input>`: Component này được sử dụng để tạo ra một input trong form.

  - `<textarea>`: Component này được sử dụng để tạo ra một textarea trong form.

  - `<select>`: Component này được sử dụng để tạo ra một dropdown trong form.

  - onChange: Sự kiện này được kích hoạt khi giá trị của một field trong form thay đổi.

  - onSubmit: Sự kiện này được kích hoạt khi người dùng submit form.

  - value: Thuộc tính này được sử dụng để đặt giá trị cho field trong form.

## 1. Controlled Components

#### Với HTML thì các phần tử như `<input>` `<textarea>` `<select>` là các phần tử thường được sử dụng để thay đổi giá trị của form và các thay đổi này sẽ được update dựa trên việc người dùng thay đổi input.

#### Trong React, các trạng thái thay đổi (mutable state) thì sẽ được giữ trong state của component, và chỉ được cập nhật khi sử dụng hàm setState().

#### Có thể kết hợp form và React State để có được "Controlled component".

- React Component sẽ render form cùng các control.
- Và khi user thay đổi giá trị của input thì chúng ta có thể sử dụng setState() để update cho component state luôn

#### Với việc kết hợp này chúng ta có thể dễ dàng handle được việc các giá trị thay đổi, cũng như khi submit form.

## 2. textarea Tag

#### Với React, thay vì nằm bên trong, thẻ `<textarea>` sẽ sử dụng thuộc tính value để lưu trữ các đoạn văn bản.

#### Khi sử dụng cách này, một form có chứa `<textarea>` sẽ có thể được biểu diễn tương tự như một form sử dụng thẻ input tự đóng `<input />`

## 3. select Tag

Điểm khác biệt giữa HTML thuần và React khi sử dụng thẻ `<select> `như sau:

HTML sử dụng attribute selected để xác định option được select, còn với React thì sử dụng attribute value

## 4,Thẻ input file

#### Bởi vì giá trị của file input chặn quyền ghi (read-only), nên nó là một uncontrolled component trong React.

#### Để lấy giá trị từ một input file trong React, chúng ta cần sử dụng ref để truy cập đến element input đó và lấy giá trị từ thuộc tính files của nó.

## 5. Handling Multiple Inputs

#### Khi cần xử lí nhiều controlled input, có thể thêm thuộc tính name vào từng element và để hàm xử lí (handler function) lựa chọn được chính xác element nào đang tương tác với người dùng thông qua event.target.name

## 6. Controlled Input với giá trị null

- Khi chúng ta set cứng value cho input thì giá trị của input sẽ ko bị thay đổi bởi người dùng
- Nếu muốn cho phép người dùng thay đổi giá trị thì set value cho nó bằng Null
