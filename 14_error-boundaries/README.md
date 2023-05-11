# Error Boundaries

## 1. Introducing Error Boundaries

Lỗi JavaScript trong một phần của giao diện người dùng sẽ không làm hỏng toàn bộ ứng dụng. Để giải quyết vấn đề này cho người dùng React, React 16 giới thiệu một khái niệm mới về “error boundary”.

### Error boundary nó là một components, nơi mà chúng ta có thể bắt được tất cả các lỗi ở bất cứ component con nào của app. Và hiển thị nó để thông báo với người dùng rằng đã có lỗi xảy ra theo một cách dễ nhìn hơn làm một màn hình chằng chịt code.

### Nó có thể bắt lỗi trong quá trình render, trong các trạng thái của của component hay là trong bất cứ constructor nào.

### Về cơ bản thì Error boundary có thể bắt được các error liên quan đến component nhưng có một vài chỗ thì Error Boundary sẽ ko thể bắt được, cụ thể như sau:

- Trình xử lý sự kiện (Event handlers)
- Code bất đồng bộ (e.g. setTimeout or requestAnimationFrame callbacks)
- Server side rendering
- Lỗi được tạo ra trong chính ranh giới lỗi (chứ không phải con của nó)

### Một Component có thể được xem là một Error boundary Nếu nó định nghĩa một trong hai method (hoặc là có cả 2) sau:

- static getDerivedStateFromError()
- componentDidCatch()

### Error boundary làm việc giống như là try catch block, chỉ có một điểm khác là Error boundary sử dụng cho component.

### Chỉ có duy nhất class component mới trở thành Error boundary.

## 2. Where to Place Error Boundaries

Việc sử dụng Error boundary để bắt error như thế nào là tuỳ thuộc vào bạn. Bạn có thể bọc Error boundary ở lớp ngoài cùng của ứng dụng và hiển thị "Something went wrong" để thông báo với user rằng có điều gì đó đã xảy ra, hay bạn có thể bọc Error boundary cho một component để khi xảy ra lỗi thì ko bị ảnh hưởng tới các component khác trong app.

## 3. Component Stack Traces (Dấu vết ngăn xếp thành phần)

### React 16 sẽ in toàn bộ các error xảy ra trong quá trình render ở màn hình console, ngay cả khi các ứng dụng đã vô tình che dấu chúng đi.

### Ngoài thông báo lỗi và stack JavaScript, nó cũng cung cấp component stack traces. Bây giờ bạn có thể thấy chính xác nơi thất bại trong component.

### Nếu bạn không khởi tạo app bằng Create React App, bạn có thể sử dụng plugin và cài đặt thủ công bằng Babel.

### Chú ý rằng, những cài đặt này sẽ bị vô hiệu hoá khi build production.

## 4. How About try/catch?

- try / catch thật tuyệt nhưng nó chỉ hoạt động đối với mã mệnh lệnh:

#####

    try {
        showButton();
    } catch (error) {
        // ...
    }

- Tuy nhiên, các thành phần React là khai báo và chỉ định những gì sẽ được hiển thị

#####

    <Button/>

Các ranh giới lỗi bảo toàn bản chất khai báo của React và hoạt động như bạn mong đợi. Ví dụ: ngay cả khi lỗi xảy ra trong phương thức componentDidUpdate dosetState ở đâu đó sâu trong cây, nó vẫn sẽ truyền chính xác đến ranh giới lỗi gần nhất.

## 5. How About Event Handlers?

### Các lỗi do Event Handlers tạo ra sẽ không được Error boundary bắt

=> nguyên nhân là do các Event Handlers không giống như các lifecycle methods, các Event Handlers sẽ không được thực thi khi render nên dù có xảy ra lỗi trong Event Handlers thì React vẫn render bình thường và ko throw lỗi.

### Cho nên nếu bạn mong muốn bắt lỗi của Event Handlers thì nên sử dụng try/catch và state để quản lý lỗi
