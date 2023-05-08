# Render Có Điều Kiện

### React là một thư viện được xây dựng dựa trên javascript nên nó sử dụng các hàm về điều kiện giống Javascript, có thể kết hợp sử dụng state và các conditional operator để hiện thị những gì mà chúng ta muốn.

## 1. Gán giá trị element vào biến

- Có thể dùng biến để lưu lại các element.
- Điều này giúp cho bạn có thể render có điều kiện một phần của component trong khi phần còn lại của component sẽ không bị thay đổi. (Chỉ render lại variables-biến mà ko cần phải render các phần khác).

## 2. Thay thế If bằng toán tử logic &&

- Sử dụng cú pháp && thay cho cú pháp if else
- Cú pháp của nó như sau:

####

    true && expression

    => nếu điều kiện trước đúng thì react sẽ thực hiện thực thi cú pháp phía sau &&, còn nếu điều kiện đứng trước sai thì react sẽ bỏ qua và không thực thi cú pháp phía sau &&

## 3. Thay thế If-Else bằng toán tử điều kiện

- Một phương thức khác dùng để thực hiện render có điều kiện trực tiếp trên JSX là dùng toán tử điều kiện (ba ngôi):

####

    condition ? true : false.

## 4. Ngăn chặn component thực hiện render

Trong một số trường hợp hiếm gặp, bạn sẽ muốn một component tự ẩn đi dù nó được render bởi một component khác. Để làm được điều đó, ta sẽ trả về null thay vì trả về những gì cần hiện lên màn hình.
