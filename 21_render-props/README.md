# Render Props

### “render prop” là chia sẻ code giữa các React components bằng cách dùng một đối tượng (prop) có giá trị là một hàm (function).

### Một component có một render prop sẽ lấy một hàm trả về một phần tử React (React element) và gọi hàm đó thay vì phải thực hiện render với logic riêng biệt.

## 1. Sử Dụng Render Props Cho Cross-Cutting Concerns

### Đó là những logic xử lý chung trong các component. Thay vì viết code logic này cho từng component, chúng ta có thể đưa nó vào một component riêng và sử dụng Render Props để chia sẻ cho các component khác.

## 2. Sử Dụng Props Ngoài render

### Có thể có những trường hợp mà truyền prop từ bên ngoài phương thức render (ví dụ như khi sử dụng các hàm xử lý cho các sự kiện như onClick hoặc onSubmit). Trong trường hợp này, có thể định nghĩa các hàm xử lý ở ngoài phương thức render và truyền chúng vào component con thông qua prop.
