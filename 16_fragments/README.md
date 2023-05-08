# Fragments (Phân mảnh)

### Fragments một trong những thành phần gọi là cơ bản nhất của React, nó cho phép Component có thể trả về nhiều element một lúc bằng cách gom tất cả các thành phần con trong một node của DOM.

    render() {
        return (
            <React.Fragment>
            <ChildA />
            <ChildB />
            <ChildC />
            </React.Fragment>
        );
    }

## 1. Lí do

- Khi bạn cố gắng trả về nhiều phần tử từ một hàm render, bạn sẽ nhận được lỗi "JSX parent expressions must have one parent element".
- Fragments là một cách để giải quyết vấn đề khi không thể bọc các element JSX quanh một element nào đó trong ReactJS
- Sử dụng Fragment sẽ giúp bạn tránh được lỗi này và cho phép bạn trả về nhiều phần tử trong một lệnh return.
- Các lý do để sử dụng Fragments trong ReactJS bao gồm:
  - Tránh lỗi "JSX parent expressions must have one parent element" khi trả về nhiều phần tử.
  - Giảm sự lãng phí về performance bằng cách không tạo thêm một DOM node mới.
  - Làm cho code dễ đọc hơn, đặc biệt là khi bạn cần render nhiều phần tử trên một trang.

## 2. Sử dụng

### Chúng ta có thể sử dụng Fragment để bọc các thành phần con như sau:

    class Columns extends React.Component {
        render() {
            return (
            <React.Fragment>
                <td>Hello</td>
                <td>World</td>
            </React.Fragment>
            );
        }
    }

### Hoặc có thể import vào như này

    import {Fragment} from React;

    class Columns extends React.Component {
        render() {
            return (
            <Fragment>
                <td>Hello</td>
                <td>World</td>
            </Fragment>
            );
        }
    }

### Kết quả khi sử dụng Fragment sẽ khác so với sử dụng thẻ Div

    <table>
        <tr>
            <td>Hello</td>
            <td>World</td>
        </tr>
    </table>

## 3. Cú pháp rút gọn

Fragment cung cấp một cú pháp mới, ngắn gọn hơn để khai báo. Trông nó sẽ giống 1 thẻ rỗng:

#####

    class Columns extends React.Component {
        render() {
            return (
            <>
                <td>Hello</td>
                <td>World</td>
            </>
            );
        }
    }

## 4. Keyed Fragments

- Với Fragment được khai báo với đầy đủ syntax thì sẽ được hỗ trợ key và một số attributes.
- Nếu các bạn sử dụng trong mapping collection thì nên sử dụng Fragment với đầy đủ syntax để apply key, điều này sẽ làm cho performance của app được tăng lên

### Ví dụ

    function Glossary(props) {
        return (
            <dl>
            {props.items.map(item => (
                // Without the `key`, React will fire a key warning
                <React.Fragment key={item.id}>
                <dt>{item.term}</dt>
                <dd>{item.description}</dd>
                </React.Fragment>
            ))}
            </dl>
        );
    }

### Ví dụ trên cho trường hợp này là việc ánh xạ một collection sang một mảng các fragment, để tạo nên một danh sách các mô tả chi tiết:

    key là thuộc tính duy nhất có thể khai báo trong Fragment. Trong thời gian tới, chúng tôi có thể bổ sung thêm các thuộc tính, chẳng hạn xử lí sự kiện (event handler).
