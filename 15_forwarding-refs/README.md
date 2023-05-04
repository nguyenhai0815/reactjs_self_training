# Forwarding Refs

### Forwarding Refs là kỹ thuật cho phép chúng ta sử dụng ref từ một phần tử con của component

### Thông thường thì điều này không cần thiết nhưng ở trong một vài trường hợp thì nó lại khá là hữu ích trong việc tái sử dụng một số thành phần.

## 1. Forwarding refs to DOM components

"Forwarding refs" trong React được sử dụng để truyền các tham chiếu (refs) từ một component con đến một component cha hoặc từ một component cha đến một component con. Cơ chế này cho phép bạn truy cập vào các phần tử DOM được bao bọc bởi component React.

### Ví dụ:

Trong ví dụ dưới đây thì FancyButton sử dụng React.forwardRef để tạo ra 1 ref và nó được đưa xuống thành phần con là button

#####

    const FancyButton = React.forwardRef((props, ref) => (
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
        ));

        // You can now get a ref directly to the DOM button:
        const ref = React.createRef();
    <FancyButton ref={ref}>Click me!</FancyButton>;

Với cách này thì các component sử dụng FancyButton có thể sử dụng button và truy cập trực tiếp vào nó.

Sau đây là các bước mà đã xảy ra ở Component trên

- Trước tiên chúng ta Sử dụng React.createRef để tạo ra 1 biến ref
- Sau khi đã tạo xong biến ref thì chúng ta đưa nó vào FancyButton như đoạn code `<FancyButton ref={ref}>Click me!</FancyButton>`;
- React sẽ đưa ref đó vào Component giống như là một parameter thứ 2, ngang hàng với props, chứ không phải nằm trong props
- Ở trong FancyButton thì chúng ta tiếp tục đưa ref này xuống button như là một attributes <button ref={ref}>
- Và khi chúng ta sử dụng ref.current thì đồng nghĩa với việc chúng ta đang sử dụng button trong FancyButton

## 2. Forwarding refs in higher-order components

### Đây là kỹ thuật khá là hữu ích với higher-order components (HOC)

### Forwarding refs trong higher-order components (HOC) trong ReactJS là một kỹ thuật cho phép chuyển tiếp một ref từ một component được bọc bởi một HOC tới một component con.

### Khi sử dụng HOC để tạo ra một component mới, các props được truyền vào component mới không bao gồm các refs được định nghĩa trong component ban đầu. Tuy nhiên, trong một số trường hợp, chúng ta cần truy cập đến các refs này trong component mới. Vì vậy, chúng ta có thể sử dụng kỹ thuật Forwarding refs để chuyển tiếp các refs này tới component mới được tạo ra bởi HOC.

### Để thực hiện Forwarding refs trong HOC, chúng ta sẽ sử dụng hàm forwardRef() của React. Hàm này sẽ nhận một callback function và trả về một HOC mới. Callback function này sẽ nhận hai tham số là props và ref, và trả về một component con được bọc bởi HOC mới.

## 3. Displaying a custom name in DevTools

### React.forwardRef chấp nhận render function. React DevTools sử dụng function này để xác định những gì sẽ hiển thị cho ref component.

### Ví dụ:

    const WrappedComponent = React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });

- Ví dụ trên thì ở trên DevTool sẽ hiển thị là ForwardRef

### Còn nếu render với function thì DevTool sẽ thêm tên của function vào

    const WrappedComponent = React.forwardRef(
        function myFunction(props, ref) {
            return <LogProps {...props} forwardedRef={ref} />;
        }
    );

- DevTool sẽ hiển thị là ForwardRef(myFunction)

### Có thể đặt tên cho dễ debug qua property displayName

    function logProps(Component) {
        class LogProps extends React.Component {
            // ...
        }

        function forwardRef(props, ref) {
            return <LogProps {...props} forwardedRef={ref} />;
        }

        // Give this component a more helpful display name in DevTools.
        // e.g. "ForwardRef(logProps(MyComponent))"
        const name = Component.displayName || Component.name;
        forwardRef.displayName = `logProps(${name})`;

        return React.forwardRef(forwardRef);
    }
