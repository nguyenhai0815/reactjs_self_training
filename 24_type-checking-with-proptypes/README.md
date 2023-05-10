# Kiểm tra kiểu với PropTypes

### Khi ứng dụng của bạn phát phiển, bạn sẽ có thể bắt gặp rất nhiều bug với việc kiểm tra type (kiểu). Đối với một với ứng dụng, bạn có thể sử dụng các JavaScript extension như Flow hoặc TypeScript để kiểm tra type cho toàn bộ ứng dụng của bạn.

### Nhưng ngay cả khi không sử dụng chúng, React vẫn có xây dựng sẵn một vài kiểu kiểm tra type. Để chạy kiểm tra type trên prop cho một component, bạn có thể assign một property là propTypes

- PropTypes sẽ export một loạt các validator nhằm đảm bảo rằng data (dữ liệu) được nhận vào là valid (hợp lệ).
- Khi một giá trị invalid (không hợp lệ) được cung cấp cho một prop, thì sẽ có một warning (cảnh báo) sẽ hiện lên bên trong JavaScript console.
- Vì lý do nhằm đảm bảo performance (hiệu suất), thì propTypes sẽ chỉ được kiểm tra trong quá môi trường development mode

## 1. PropTypes

### PropTypes được sử dụng để kiểm tra kiểu dữ liệu của các props mà một component nhận được.

### PropTypes giúp đảm bảo rằng các props được truyền vào component đúng kiểu dữ liệu được mong đợi, giúp tránh các lỗi và giảm thiểu thời gian debug.

### Để sử dụng PropTypes trong ReactJS, bạn cần import nó từ thư viện 'prop-types'.

    import PropTypes from 'prop-types';

    function MyComponent(props) {
        return <div>{props.name}</div>;
    }

    MyComponent.propTypes = {
        name: PropTypes.string.isRequired
    };

### PropTypes cung cấp nhiều kiểu dữ liệu khác nhau để kiểm tra, bao gồm cả các kiểu dữ liệu định nghĩa bởi người dùng.

### Các kiểu dữ liệu phổ biến bao gồm string, number, boolean, array, object, function, node, và element. Ngoài ra, PropTypes cũng hỗ trợ kiểm tra kiểu dữ liệu nullable, kiểu dữ liệu mảng hoặc object có các phần tử có cùng kiểu dữ liệu, kiểu dữ liệu instance của một class cụ thể, và nhiều hơn nữa.

## 2. Requiring Single Child

### Với PropTypes.element, có thể chỉ định rằng chỉ có duy nhất một child có thể chuyển đến một component là children.

    import PropTypes from 'prop-types';

    class MyComponent extends React.Component {
        render() {
            // This must be exactly one element or it will warn.
            const children = this.props.children;
            return (
            <div>
                {children}
            </div>
            );
        }
    }

    MyComponent.propTypes = {
        children: PropTypes.element.isRequired
    };

## 3. Default Prop Values

### Default Prop Values là một tính năng trong ReactJS cho phép bạn xác định giá trị mặc định cho một hoặc nhiều props của một component. ### Khi một prop không được truyền vào component hoặc được truyền vào với giá trị là undefined, giá trị mặc định sẽ được sử dụng thay vì giá trị undefined đó.

### Để định nghĩa giá trị mặc định cho một prop, bạn có thể sử dụng thuộc tính defaultProps của component.

    import React from 'react';
    import PropTypes from 'prop-types';

    function MyComponent(props) {
        return <div>{props.name}</div>;
    }

    MyComponent.propTypes = {
        name: PropTypes.string
    };

    MyComponent.defaultProps = {
        name: 'Guest'
    };

## 4. Function Components

### Function Components là một trong hai loại component trong ReactJS, ngoài Class Components.

### Function Components là một hàm JavaScript đơn giản, nhận vào props và trả về các phần tử React để hiển thị trên giao diện người dùng.

### Ví dụ:

    import React from 'react';

    function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
    }

### Một số điểm khác biệt giữa Function Components và Class Components là:

- Function Component không có state, trong khi Class Component có thể có state.
- Function Component không có phương thức this, trong khi Class Component phải sử dụng this.
- Function Component được xem là dễ hiểu và dễ đọc hơn Class Component, vì nó có cấu trúc đơn giản hơn và ít dư thừa.
