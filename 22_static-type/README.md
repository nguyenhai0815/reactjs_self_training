# Static Type Checking

### Trình kiểm tra kiểu tĩnh(static) như Flow và TypeScript xác định một số loại vấn đề nhất định trước khi chạy code.

## 1. Flow

### Flow là một trình kiểm tra kiểu tĩnh cho mã JavaScript

### Nó cho phép bạn chú thích các biến, hàm và các thành phần React bằng cú pháp kiểu đặc biệt và sớm phát hiện lỗi.

### Để dùng Flow, bạn cần chuẩn bị:

- Thêm Flow vào project với vai trò như yếu tố dependency.
- Đảm bảo rằng cú pháp Flow được loại bỏ khỏi mã đã biên dịch.
- Thêm chú thích loại và chạy Flow để kiểm tra chúng.

### 1.1. Thêm Flow vào Project

#### Yarn:

    yarn add --dev flow-bin

#### npm:

    npm install --save-dev flow-bin

#### => Thêm flow vào phần "scripts" trong package.json để có thể sử dụng nó trong Terminal:

    {
        // ...
        "scripts": {
            "flow": "flow",
            // ...
        },
        // ...
    }

#### Cuối cùng, chạy một trong các lệnh sau:

- Yarn:

#####

    yarn run flow init

- npm:

#####

    npm run flow init

#### => Lệnh này sẽ tạo một tệp cấu hình Flow sẽ cần phải commit.

### 1.2. Tách Flow Syntax ra khỏi Compiled Code

#### Flow mở rộng ngôn ngữ JavaScript với một cú pháp đặc biệt cho các kiểu chú thích(annotations). Tuy nhiên, các trình duyệt không biết cú pháp này, vì vậy cần đảm bảo rằng nó không nằm trong gói JavaScript đã biên dịch được gửi đến trình duyệt.

- Nếu project của bạn được tạo bằng cách [Create React App](https://github.com/facebook/create-react-app), chú thích(annotations ) của Flow đã bị loại bỏ theo mặc định.
- Nếu định cấu hình Babel theo cách thủ công cho project, bạn sẽ cần cài đặt một giá trị đặt trước đặc biệt cho Flow.

######

    Yarn:
    yarn add --dev @babel/preset-flow

    npm:
    npm install --save-dev @babel/preset-flow

    => Sau đó thêm flow preset cho Babel configuration

### 1.3. Chạy Flow

Nếu đã làm theo các hướng dẫn ở trên, bạn sẽ chạy được Flow.

#### Yarn:

    yarn flow

#### npm:

    npm run flow

### 1.4. Thêm các loại chú thích Flow(Flow Type Annotations)

#### Theo mặc định, Flow chỉ kiểm tra các tệp bao gồm chú thích(annotation)

    // @flow

## 2. TypeScript

### Để dùng TypeScript, cần chuẩn bị:

- Thêm TypeScript vào project của bạn với vai trò như yếu tố dependency.
- Cấu hình lại cấu hình TypeScript.
- Sử dụng thêm các extension phù hợp.
- Định nghĩa các thư viện mà bạn đang dùng.

### 2.1. Sử dụng TypeScript với Create React App

#### Create React App sẽ hỗ trợ TypeScript.

#### Để tạo một project mới với sự hỗ trợ của TypeScript, ta dùng lệnh:

    npx create-react-app my-app --template typescript

#### Hoặc thêm nó vào một Create React App project sẵn có như [đây](https://create-react-app.dev/docs/adding-typescript/)

### 2.2. Thêm TypeScript vào một Project

#### Chạy lệnh sau trong terminal

    Yarn:
    yarn add --dev typescript

    npm:
    npm install --save-dev typescript

#### => Trước khi cài đặt cấu hình, hãy thêm tsc vào phần “scripts” trong package.json:

    {
        // ...
        "scripts": {
            "build": "tsc",
            // ...
        },
        // ...
    }

### 2.3. Cấu hình TypeScript

#### Trình biên dịch không giúp ích gì cho chúng ta cho đến khi chúng ta yêu cầu nó phải làm gì. Trong TypeScript, các quy tắc này được định nghĩa trong một tệp đặc biệt có tên là tsconfig.json

#### Chạy lệnh sau trong terminal

    Yarn:
    yarn run tsc --init

    npm:
    npx tsc --init

### 2.4. Các file extension

#### Trong React, bạn có thể viết các component trong file .js.

#### Trong TypeScript, chúng ta có 2 file extension:

- .ts là file extension mặc định trong khi
- .tsx phần mở rộng đặc biệt được sử dụng cho các file có chứa JSX.

### 2.5. Chạy TypeScript

    Yarn:
    yarn build

    npm:
    npm run build

#### Nếu bạn không thấy output, có nghĩa là nó đã thành công.
