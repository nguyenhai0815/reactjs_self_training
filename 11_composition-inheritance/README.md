# Kết hợp và kế thừa

### React có một mô hình **kết hợp** mạnh mẽ, chia nhỏ application thành nhiều Component.

### React cũng khuyến khích sử dụng tính **kết hợp** hơn là **kế thừa** để thuận tiện hơn trong việc tái sử dụng giữa các Component.

## 1. Kết hợp (composition)

- Kết hợp là cách tiếp cận phổ biến nhất để sử dụng lại mã trong React.
- Kết hợp có nghĩa là tạo ra một component bằng cách kết hợp các component khác. Bằng cách này, ta có thể tận dụng lại các component đã có sẵn và tái sử dụng chúng trong các component khác mà không cần phải viết lại mã.
- Điều này giúp tăng tính tái sử dụng, giảm độ phức tạp của mã và giúp cho quản lý mã dễ dàng hơn.

### Ví dụ:

    function Button(props) {
        return <button onClick={props.onClick}>{props.label}</button>;
    }

    function App() {
        const handleClick = () => {
            console.log('Button clicked');
        };

        return <Button label="Click me" onClick={handleClick} />;
    }

Trong ví dụ trên, ta sử dụng kết hợp để tạo ra component App bằng cách sử dụng component Button.

- Component Button chỉ có một chức năng đơn giản là tạo ra một button.
- Component App sử dụng component Button để tạo ra một button với nội dung và hành động tùy chỉnh.

## 2. Kế thừa (inheritance)

- Trong React, kế thừa được sử dụng rất ít và không được khuyến khích.
- Điều này vì kế thừa có thể dẫn đến mối quan hệ phức tạp giữa các component, làm cho mã khó quản lý và khó bảo trì.

### Ví dụ:

    import React, { Component } from 'react';
    class ParentComponent extends Component {
        render() {
            return (
            <div>
                <h1>Hello from Parent Component</h1>
            </div>
            );
        }
    }

    class ChildComponent extends ParentComponent {
        render() {
            return (
            <div>
                <h2>Hello from Child Component</h2>
                {super.render()}
            </div>
            );
        }
    }
    export default ChildComponent;

- Trong đó, ChildComponent kế thừa từ ParentComponent bằng cách sử dụng cú pháp extends. Ta có thể gọi phương thức của lớp cha bằng cách sử dụng super.
- Tuy nhiên, việc kế thừa có thể gây ra sự phụ thuộc và rắc rối trong việc quản lý component. Do đó, kết hợp (composition) là một cách tiếp cận được khuyến khích hơn.
