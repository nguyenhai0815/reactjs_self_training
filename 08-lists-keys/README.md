# Lists and Keys

## 1. function map()

    map() là function cho phép chúng ta thao tác với một array và trả về 1 array theo mong muốn của chúng ta.

#### Ví dụ

    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled);

    // expected output: [2, 4, 6, 8, 10]

#### Trong React có thể sử dụng map() để render từ một array data trở thành một list element.

## 2. Render Nhiều Component

- Trong react có thể render một array trong jsx bằng cách sử dụng dấu {}.

#### Ví dụ sử dụng function map() để render array number để trả về một list

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );

## 3. Basic List Component (Component Có Danh Sách Cơ Bản)

- Basic List Component trong ReactJS là một component đơn giản để hiển thị danh sách các phần tử trong một mảng.
- Nó là một component stateless (không có state) và sử dụng props để nhận danh sách các phần tử cần hiển thị.
- Các bước để tạo một Basic List Component:

  - Tạo một functional component (stateless component).
  - Sử dụng props để truyền vào danh sách các phần tử cần hiển thị.
  - Sử dụng phương thức map() để duyệt qua danh sách các phần tử và tạo một list element (ví dụ: ul tag) và các item element (ví dụ: li tag ) cho mỗi phần tử trong danh sách.
  - Trả về list element và các item element đã được tạo.

## 4. Keys

### Keys là một khái niệm quan trọng trong React bởi keys có thể giúp React có thể nhận biết một element thay đổi, thêm mới hay là bị xóa bỏ, nó giúp React cải thiện tốc độ render và qua đó làm cho app mượt mà hơn.

#### Nếu sử dụng map() để render thì phải thêm key vào các element.

### 4.1. Các Key Chỉ Bắt Buộc Là Duy Nhất Giữa Các Nút Anh Em (Siblings)

- Các Key được sử dụng bên trong các mảng nên là duy nhất giữa các nút anh em của chúng.
- Tuy nhiên chúng không cần là duy nhất đối với toàn bộ component.
- Có thể sử dụng các key giống nhau giữa hai mảng khác nhau

### 4.2. Nhúng map() vào JSX

    * JSX cho phép nhúng expression bất kì vào trong dấu ngoặc nhọn {} vì vậy chúng ta có thể xuất kết quả của hàm map() trong {}
