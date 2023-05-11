# JSX Intensive (JSX Chuyên Sâu)

## 1. Chỉ Định Kiểu React Element

### Phần đầu tiên của một thẻ JSX xác định kiểu của React element.

### Các kiểu viết hoa thể hiện rằng thẻ JSX đang ám chỉ tới một React component. Những thẻ này được biên dịch thành một tham chiếu trực tiếp đến biến được đặt tên, do vậy nếu bạn sử dụng biểu thức JSX `<Foo />, Foo` phải nằm trong scope.

### 1.1. React Phải Nằm trong Scope

#### Vì JSX đuợc biên dịch thành lời gọi tới `React.createElement`, nên thư viện React phải luôn nằm trong scope mã JSX của bạn.

#### Ví dụ

    import React from 'react';
    import CustomButton from './CustomButton';

    function WarningButton() {
        // return React.createElement(CustomButton, {color: 'red'}, null);
        return <CustomButton color="red" />;
    }

- cả hai import đều cần thiết trong đoạn mã này, mặc dù React và CustomButton không được tham chiếu trực tiếp từ JavaScript
- Nếu bạn không sử dụng một trình đóng gói JavaScript(JavaScript bundler) và tải React từ một thẻ `<script>`, thì React đã có sẵn trong scope toàn cục(global).

### 1.2. Sử Dụng Ký Hiệu Chấm cho JSX Type

#### Bạn cũng có thể tham chiếu đến một React component sử dụng ký hiệu chấm từ JSX. Điều này rất tiện lợi nếu bạn có một module export nhiều React component.

#### Ví dụ, nếu MyComponents.DatePicker là một component, bạn có thể sử dụng nó trực tiếp từ JSX với:

    import React from 'react';

    const MyComponents = {
        DatePicker: function DatePicker(props) {
            return <div>Imagine a {props.color} datepicker here.</div>;
        }
    }

    function BlueDatePicker() {
        return <MyComponents.DatePicker color="blue" />;
    }

### 1.3. Component Người Dùng Tự Định Nghĩa Phải Được Viết Hoa

#### Khi một kiểu element bắt đầu với chữ cái thường, nó đang ám chỉ đến một built-in component như `<div>` hay `<span>` và kết quả là một chuỗi 'div' hay 'span' được truyền tới `React.createElement`. Các kiểu bắt đầu với chữ cái viết hoa như `<Foo /> `được biên dịch thành` React.createElement(Foo)` và tương ứng với một component đã được định nghĩa hoặc đã được import vào tệp JavaScript của bạn.

#### Chúng tôi khuyến khích đặt tên cho các component với chữ cái đầu viết hoa. Nếu bạn có một component bắt đầu với chữ cái viết thường, gán nó cho một biến được viết hoa trước khi sử dụng nó trong JSX.

### 1.4. Chọn Kiểu tại Thời Điểm Thực Thi

#### Bạn không thể sử dụng một biểu thức tổng hợp để làm một kiểu React element. Nếu bạn muốn sử dụng một biểu thức tổng hợp để thể hiện kiểu của element, chỉ cần gán nó cho một biến được viết hoa trước.

#### Vấn đề này thường xuất hiện khi bạn muốn render một component khác dựa trên một prop:

    import React from 'react';
    import { PhotoStory, VideoStory } from './stories';

    const components = {
        photo: PhotoStory,
        video: VideoStory
    };

    function Story(props) {
        // Sai! JSX type không thể là một biểu thức.
        return <components[props.storyType] story={props.story} />;
    }

#### Để khắc phục vấn đề này, sẽ gán kiểu cho một biến được viết hoa trước:

    import React from 'react';
    import { PhotoStory, VideoStory } from './stories';

    const components = {
        photo: PhotoStory,
        video: VideoStory
    };

    function Story(props) {
        // Chính xác! JSX type có thể là một biến được viết hoa.
        const SpecificStory = components[props.storyType];
        return <SpecificStory story={props.story} />;
    }

## 2. Props trong JSX

### 2.1. Biểu thức JavaScript làm Props

#### Bạn có thể truyền bất kỳ biểu thức JavaScript nào làm prop, bằng cách bao quanh nó với {}. Ví dụ, trong đoạn mã JSX bên dưới:

    <MyComponent foo={1 + 2 + 3 + 4} />

- Đối với MyComponent, giá trị của props.foo sẽ là 10 vì biểu thức 1 + 2 + 3 + 4 đã được tính toán.

#### Câu lệnh if và vòng lặp for không phải là biểu thức trong JavaScript, do vậy chúng không thể được sử dụng trong JSX một cách trực tiếp. Thay vào đó, có thể đặt chúng ở đoạn mã xung quanh.

    function NumberDescriber(props) {
        let description;
        if (props.number % 2 == 0) {
            description = <strong>even</strong>;
        } else {
            description = <i>odd</i>;
        }
        return <div>{props.number} is an {description} number</div>;
    }

### 2.2. String Literals

#### Bạn có thể truyền một string literal làm một prop.

#### Ví dụ: Hai biểu thức JSX bên dưới là tương đương:

    <MyComponent message="hello world" />

    <MyComponent message={'hello world'} />

#### Khi bạn truyền một string literal, giá trị của nó là HTML-unescaped.

#### Ví dụ: Hai biểu thức JSX bên dưới là tương đương:

    <MyComponent message="&lt;3" />

    <MyComponent message={'<3'} />

### 2.3. Props Mặc Định là “True”

#### Nếu bạn không truyền giá trị cho một prop, nó sẽ được mặc định là true.

#### Ví dụ: Hai biểu thức JSX bên dưới là tương đương:

    <MyTextBox autocomplete />

    <MyTextBox autocomplete={true} />

### 2.4. Spread Attributes

#### Nếu bạn đã có một props là một object, và bạn muốn truyền nó trong JSX, bạn có thể sử dụng ... như một toán tử “spread” để truyền toàn bộ props object.

#### Ví dụ: Hai biểu thức JSX bên dưới là tương đương:

    function App1() {
        return <Greeting firstName="Ben" lastName="Hector" />;
    }

    function App2() {
        const props = {firstName: 'Ben', lastName: 'Hector'};
        return <Greeting {...props} />;
    }

## 3. Children trong JSX

### 3.1. String Literals

#### Bạn có thể đặt một chuỗi ký tự giữa thẻ đóng và thẻ mở và props.children sẽ là chuỗi ký tự đó. Điều này rất hữu ích cho nhiều built-in HTML elements.

#### Ví dụ:

    <MyComponent>Hello world!</MyComponent>

- Đây là một JSX hợp lệ, và props.children trong MyComponent sẽ là chuỗi ký tự "Hello world!"

#### JSX loại bỏ khoẳng trắng ở đầu và cuối của một dòng. Nó cũng loại bỏ dòng trống. Dòng mới liền kề với các thẻ sẽ bị loại bỏ; dòng mới ở giữa của string literals được thay thế bằng một khoảng trắng.

### 3.2. JSX Children

#### Bạn có thể cung cấp nhiều JSX elements làm children. Điều này rất hữu ích để hiển thị các component lồng nhau:

    <MyContainer>
        <MyFirstComponent />
        <MySecondComponent />
    </MyContainer>

#### Bạn có thể kết hợp nhiều kiểu children, do vậy bạn có thể sử dụng string literals cùng với JSX children.

#### Một React component cũng có thể trả về một mảng các element

    render() {
        // Không cần bao list items trong một element khác!
        return [
            // Đừng có mà quên key đấy :)
            <li key="A">First item</li>,
            <li key="B">Second item</li>,
            <li key="C">Third item</li>,
        ];
    }

### 3.3. Biểu Thức JavaScript làm Children

#### Bạn có thể truyền biểu thức JavaScript bất kỳ làm children, bằng cách bao quanh nó với {}.

#### Ví dụ, những biểu thức bên dưới là tương đương:

    <MyComponent>foo</MyComponent>

    <MyComponent>{'foo'}</MyComponent>

#### Các biểu thức JavaScript có thể được kết hợp với những loại children khác. Điều này khá hữu ích thay cho string templates:

    function Hello(props) {
    return <div>Hello {props.addressee}!</div>;
    }

### 3.4. Hàm làm Children

#### Thông thường, các biểu thức JavaScript khi chèn vào trong JSX sẽ được coi như là một chuỗi, một hoặc một danh sách các React element.

#### Tuy nhiên, `props.children` hoạt động tương tự như những prop khác ở chỗ là nó có thể truyền bất kỳ loại dữ liệu nào, không phải chỉ là những loại dữ liệu mà React biết cách để render.

#### Ví dụ, nếu bạn có một component tùy chỉnh, bạn có thể để nó nhận một callback làm props.children:

    // Gọi children callback numTimes để tạo ra một component lặp
    function Repeat(props) {
        let items = [];
        for (let i = 0; i < props.numTimes; i++) {
            items.push(props.children(i));
        }
        return <div>{items}</div>;
    }

    function ListOfTenThings() {
        return (
            <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
            </Repeat>
        );
    }

#### Children truyền cho một component tùy chỉnh có thể là bất cứ thứ gì, miễn là component đó biến đổi chúng thành thứ mà React có thể hiểu được trước khi render. Cách sử dụng này không phổ biến, nhưng nó vẫn hoạt động nếu bạn muốn mở rộng khả năng của JSX.

### 3.5. Booleans, Null, và Undefined Được Bỏ Qua

#### false, null, undefined, và true đều là children hợp lệ. Chúng đơn giản là không được render.

#### Ví dụ: Những biểu thức JSX này đều sẽ được render ra kết quả giống nhau:

    <div />

    <div></div>

    <div>{false}</div>

    <div>{null}</div>

    <div>{undefined}</div>

    <div>{true}</div>

#### Có một lưu ý là một vài giá trị “falsy”, như số 0, thì vẫn được render bởi React.

#### Ví dụ, đoạn mã bên dưới sẽ không hoạt động như bạn mong muốn vì 0 sẽ được in ra khi props.messages là một mảng rỗng:

    <div>
        {props.messages.length &&
            <MessageList messages={props.messages} />
        }
    </div>

- Để xử lý vấn đề này, hãy đảm bảo rằng những biểu thức nằm trước && luôn là boolean:

######

    <div>
        {props.messages.length > 0 &&
            <MessageList messages={props.messages} />
        }
    </div>

- Ngược lại, nếu bạn muốn một giá trị như false, true, null, hoặc undefined xuất hiện ở đầu ra, bạn phải chuyển đổi nó thành một chuỗi ký tự trước:

#####

    <div>
        vaScript variable is {String(myVariable)}.
    </div>
