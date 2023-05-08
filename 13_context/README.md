# Context

### Context là nơi cung cấp cho chúng ta cách để truyền các giá trị xuống component con mà không cần truyền vào props của component con.

### Thông thường khi truyền data giữa các Component thì chúng ta thường đưa chúng vào props của các component, điều này sẽ dẫn tới một số component sẽ có props rất là cồng kềnh và nhiều component có props giống nhau và để giải quyết vấn đề này thì chúng ta có một cách đó chính là sử dụng Context

## 1. Khi nào nên dùng Context

### Context được thiết kế để chia sẽ data khi chúng được xem là “global data” của toàn bộ ứng dụng React, chẳng hạn như thông tin về user hiện tại đang đăng nhập, theme, hoặc ngôn ngữ mà người dùng đã chọn.

## 2. Trước khi bạn sử dụng Context

- Context thường là được sử dụng khi một số data cần được truy cập ở nhiều nhiều Component và ở nhiều cấp độ
- Sử dụng nó một cách cẩn thận bởi vì điều đó sẽ làm component trở nên khó tái sử dụng hơn.
- **Nếu chỉ muốn dùng context để tránh việc truyền một số props qua nhiều levels, , component composition thường là một giải pháp đơn giản hơn so với context.**

## 3. Cách sử dụng context

### 3.1. React.createContext

    const MyContext = React.createContext(defaultValue);

- Cú pháp trên sẽ tạo mới một context cho ứng dụng. Khi react render component đã đăng ký với context trên thì đều có quyền sử dụng giá trị của context ở lớp trên mà nó đã tạo ra.
- Giá trị defaultValue chỉ được sử dụng duy nhất khi react không tìm được một Provider nào khớp với giá trị ở lớp con đang gọi.
- Giá trị defaultValue rất hữu ích trong việc kiểm tra xem các component con có bị cô lập với lớp cha hay là ko.
- Khi truyền vào Provider undefined thì sẽ ko sử dụng được giá trị defaultValue.

### 3.2. Context.Provider

    <MyContext.Provider value={/* some value */}>

Khi một object được đưa vào Provider thì khi nó thay đổi thì Component cũng sẽ render lại như là một props change. . Nhưng sẽ có một điểm khác ở chỗ

- Props change thì sẽ raise sự kiện shouldComponentUpdate
- Context change thì sẽ re-render lại tất các các component được wrapper bên trong.

### 3.3. Class.contextType

- Property contextType có thể được sử dụng để chứa một context được tạo bởi React.createContext() khi class được gán context

#####

    MyClass.contextType = MyContext;

- Với cách này có thể phân tầng Context, và các component có thể sử dụng giá trị Context ở gần nó nhất. Để sử dụng giá trị của Context khi class được gán contextType thì bạn sử dụng từ khoá **this.context**

#####

    class MyClass extends React.Component {
        static contextType = MyContext;
        render() {
            let value = this.context;
            /* render gì đó dựa vào value */
        }
    }

### 3.4. Context.Consumer

    <MyContext.Consumer>
        {value => /* render something based on the context value */}
    </MyContext.Consumer>

- Với việc sử dụng Context.Consumer thì khi context thay đổi giá trị thì các lớp component con sẽ được nhận được giá trị thay đổi và render lại.
- Một trong những tiện lợi của việc sử dụng Context.Consumer là trong function Component mà không nhất thiết là phải sử dụng class kế thừa từ React.Component

### 3.5. Context.displayName

Đây là props để giúp chúng ta đặt tên Context và được sử dụng trong DevTools,

Ví dụ dưới đây thì component sẽ hiển thị tên Context theo như ý của chúng ta.

    const MyContext = React.createContext(/* some value */);
    MyContext.displayName = 'MyDisplayName';

    <MyContext.Provider> // "MyDisplayName.Provider" in DevTools
    <MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
