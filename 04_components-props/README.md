# Components and Props

## Function Components và Class Components

### Cách đơn giản nhất để định nghĩa một component đó là viết một hàm JavaScript:

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    "Function" đáp ứng được yêu cầu của một component, nó nhận vào một Props (Props có thể là bất cứ là gì) và nó trả về một React Element. "Function" được sử dụng để làm component khi đó là một Component đơn giản, ít xử lý về logic hay các life cycle của React.

### Bạn cũng có thể sử dụng ES6 class để định nghĩa một component:

    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }

    Class khi cần xử lý nhiều logic hay cần handle data ở nhiều thời điểm.

## Rendering một Component

### Ở phần trước, chúng ta mới chỉ đề cập đến các React elements biểu diễn các DOM tags:

    const element = <div />;

### elements cũng có thể biểu diễn các components do người dùng định nghĩa:

    const element = <Welcome name="Sara" />;

    * Khi React thấy một element biểu diễn component do người dùng định nghĩa, nó ssẽ truyền các thuộc tính JSX và các phần tử con vào component này như là một object (đối tượng). Chúng ta gọi object đó là “props”.

### Note: Tên Component bắt buộc phải bắt đầu bằng một ký tự viết hoa "<Welcome />"

    Bởi vì DOM tags bắt đầu bằng các ký tự viết thường nên các Component phải viết hoa để tránh nhầm lẫn giữa 2 bên

## Tạo Components

### Các components có thể tham chiếu đến các components khác tại đầu ra của chúng. Điều này cho phép chúng ta sử dụng cùng một component abstraction cho mọi mức độ chi tiết. Một button, form, dialog, màn hình: trong React apps, chúng đều được hiển thị như là các components.

## Tách Components

    Việc Extra Component có các lưu ý:

    * Nên tính toán trước từ đầu để có thể dễ dàng tái sử dụng, tránh trường hợp code xong rồi mới nghĩ tới việc tách nhỏ Component

    * Nên list hết các Component sử dụng nhiều trong App và tạo sẵn các Component đó, ví dụ như: Button, Panel, Avatar,...

## Props chỉ dùng để đọc

### Khi định nghĩa một component dưới dạng function hoặc class, thì nó không được phép thay đổi props của chính nó.

#### Ví dụ

    1.
    function sum(a, b) {
        return a + b;
    }

    => hàm này được gọi là “pure function” vì chúng không thay đổi giá trị của tham số đầu vào, và luôn trả về cùng một kết quả với các tham số đầu vào giống nhau.

    2.
    function withdraw(account, amount) {
        account.total -= amount;
    }

    => function trên được gọi là "impure function" Impure function là các function làm thay đổi giá trị đầu vào

**Note: React của chúng ta thì tuân theo một rule duy nhất đó "Pure Function"**
