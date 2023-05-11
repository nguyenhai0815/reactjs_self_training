# I. JSX

### JSX là một phần quan trọng trong ReactJS. JSX giống như một syntax extension giúp code trở lên dễ mượt và dễ đọc hơn.

### JSX = Javascript + XML. Nó transform cú pháp dạng gần như XML về thành Javascript. Giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript. Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement.

# II. Sử dụng JSX

## 1. Cú pháp để sử dụng JSX

    <JSXName JSXAttributes>
        <!-- code here -->
    </JSXName>

#### Ví dụ

    <MyButton color="blue" shadowSize={2}>
      Click Me
    </MyButton>

    --> Nó sẽ được compile sang mã Javascript như sau:

    React.createElement(
      MyButton,
      {color: 'blue', shadowSize: 2},
      'Click Me'
    )

    // style={{ backgroundColor: color, boxShadow: `0 0 ${shadowSize}px black` }}

## 2. React must be in scope

    Trong phiên bản React 17 trở lên, bạn không cần phải import React để sử dụng các Component.
    Nếu bạn viết mã JSX mà không import React, React sẽ sử dụng biến toàn cục React để biên dịch JSX.
    Tuy nhiên, vẫn nên import React và sử dụng nó như một phần của một tập tin React Component.

## 3. Using Dot Notation for JSX Type

    Bạn có thể gọi đến một React component bằng việc sử dụng "." từ JSX

#### Ví dụ

    Nếu MyComponents.DatePicker là một component, bạn có thể sử dụng trực tiếp nó từ JSX bằng cách:
    const MyComponents = {
      DatePicker: function DatePicker(props) {
        return <div>Imagine a {props.color} datepicker here.</div>;
      }
    }
    function BlueDatePicker() {
      return <MyComponents.DatePicker color="blue" />;
    }

## 4. HTML Tags vs. React Components

### React có thể render HTML tags (dạng string) hay React components.

#### - Để render một HTML tag, chỉ cần sử dụng tên bằng chữ viết thường trong JSX.

    var helloEl = <div className: "hello">Hello, world!</div>;

#### - Để render một React Component, chỉ cần tạo một biến local bắt đầu bằng chữ cái viết Hoa

    var Nav;
    // Input (JSX)
    var app = <Nav color="blue" />;
    // Output (JS)
    var app = React.createElement(Nav, {color:"blue"});

## 5. Props in JSX

    Bạn có thể truyền vào bất kì một cú pháp JS như là một prop bằng việc đặt chúng trong cặp dấu {} trong JSX:

    ví dụ: <MyComponent foo={1 + 2 + 3 + 4} />

## 6. String Literals - Chuỗi ký tự

    Bạn có thể truyền một string vào props. Hai cách viết sau là tương đương:
    <MyComponent message="hello world" />
    <MyComponent message={'hello world'} />

## 7. Props Default to "True"

    Nếu bạn không truyền giá trị cho props, nó mặc định là true.
    Hai cách viết sau là tương đương:
        <MyTextBox autocomplete />
        <MyTextBox autocomplete={true} />

## 8. Spread Attributes - Thuộc tính lây lan

    Nếu bạn đã có một props là một object và muốn truyền nó vào trong JSX, bạn có thể sử dụng "..." như là một operator để truyền toàn độ đối tượng props

## 9. Children in JSX

### Mỗi câu lệnh JSX chứa cả 2 tag mở và đóng, nội dung nằm giữa 2 tag này được truyền như là một prop đặc biệt: props.children.

    1. Bạn có thể đặt một string giữa tag mở và đóng và props.children sẽ là một string. Cái này hữu ích trong việc xây dựng các HTML elements:
        <MyComponent>Hello world!</MyComponent>
        -> children: Hello world!
    2. JSX loại bỏ khoảng trắng ở điểm bắt đầu và kết thúc của một dòng, nó cũng loại bỏ dòng trống.
    3. Bạn có thể khai báo một JSX elements như là một children.
        <MyContainer>
            <MyFirstComponent />
            <MySecondComponent />
        </MyContainer>
    4. Sử dụng câu lệnh điều kiện trong render React elements
        Dòng JSX chỉ renders một <Header /> neu showHeader la true:
        <div>
            {showHeader && <Header />}
            <Content />
        </div>
