# Code-Splitting (Tách mã)

## 1.Đóng Gói (Bundling)

### Hầu hết files trong các ứng dụng React sẽ được “đóng gói” bằng cách sử dụng những công cụ như Webpack, Rollup hay Browserify.

### Đóng gói là quá trình xử lý những files đã được import và kết hợp chúng thành một file duy nhất: một “bundle”.File đóng gói này sau đó có thể được trang web tải lên chỉ một lần.

### Ví Dụ

    // app.js
    import { add } from './math.js';

    console.log(add(16, 26)); // 42

    // math.js
    export function add(a, b) {
        return a + b;
    }

### Nếu bạn đang sử dụng Create React App, Next.js, Gatsby, hay một công cụ tương tự, bạn sẽ được thiết lập sẵn webpack để đóng gói ứng dụng của mình. Nếu không, bạn sẽ cần phải tự thiết lập

## 2. Phân chia Code

- Khi ứng dụng trở nên lớn hơn, file đóng gói cũng sẽ lớn theo. Đặc biệt khi bạn sử dụng third-party library (thư viện bên thứ 3) lớn. Cần phải cẩn thận với những đoạn code đang include vào bundle của mình, bằng cách đó bạn sẽ không vô tình làm nó trở nên quá lớn khiến ứng dụng mất nhiều thời gian để tải.
- Để tránh việc nhận được một bundle lớn, tốt nhất nên bắt đầu “splitting (chia nhỏ)” gói bundle.
- Code-Splitting là một feature hỗ trợ bởi bundler như [Webpack](https://webpack.js.org/guides/code-splitting/), [Rollup](https://rollupjs.org/tutorial/#code-splitting) và Browserify (via [factor-bundle](https://github.com/browserify/factor-bundle)) nó có thể tạo ra nhiều bundle nhỏ có thể được load một cách tự động tại thời điểm runtime.
- Phân chia code cho ứng dụng giúp “lazy-load” chỉ những phần người dùng đang cần, tăng đáng kể hiệu suất mà không cần phải giảm số lượng code trong ứng dụng, bạn đã tránh phải tải những đoạn code người dùng có thể sẽ không bao giờ cần đến, và giảm số lượng code cần tải lên trong lần đầu tiên.

## 3. import()

### Phương pháp tốt nhất để sử dụng code-splitting trong ứng dụng là thông qua cú pháp import() động.

**Trước:**

    import { add } from './math';

    console.log(add(16, 26));

**Sau:**

    import("./math").then(math => {
        console.log(math.add(16, 26));
    });

- Khi Webpack chạy đến cú pháp này, nó sẽ tự động phân chia code trong ứng dụng của bạn. Nếu bạn sử dụng Create React App, việc này đã được thiết lập sẵn cho bạn và bạn có thể bắt đầu sử dụng ngay.

- Nếu bạn đang tự mình cấu hình Webpack, bạn có thể sẽ muốn tham khảo Webpack’s [hướng dẫn phân chia code](https://webpack.js.org/guides/code-splitting/). Cấu hình Webpack của bạn có thể sẽ trông [như thế này](https://gist.github.com/gaearon/ca6e803f5c604d37468b0091d9959269).

Khi sử dụng [Babel](https://babeljs.io/), bạn sẽ cần phải chắc chắn rằng Babel có thể phân giải cú pháp import động nhưng không làm nó bị biến đổi. Bạn sẽ cần [@babel/plugin-syntax-dynamic-import](https://classic.yarnpkg.com/en/package/@babel/plugin-syntax-dynamic-import) .

## 4. React.lazy

### Chức năng React.lazy cho phép bạn render một import động như một component bình thường.

**Trước:**

    import OtherComponent from './OtherComponent';

**Sau:**

    const OtherComponent = React.lazy(() => import('./OtherComponent'));

- Nó sẽ tự động tải bundle có chứa `OtherComponent` khi component này được được render lần đầu tiên.

- `React.lazy` chỉ lấy một function mà nó được gọi `import()` động. Nó phải trả về một `Promise` và phân giải thành một module với một `default` export có chứa một React component.

- Lazy component nên được render bên trong một `Suspense` component, điều này cho phép chúng ta thể hiện vài nội dung fallback cho người dùng (ví dụ như một loading indicator) trong khi chời đợi lazy component được load.
- Thuộc tính `fallback` chấp nhận bất kỳ React elements nào bạn muốn render trong khi chờ component được tải lên. Có thể đặt `Suspense` component bất kỳ nơi nào bên trên lazy component. Có thể bọc nhiều lazy component với duy nhất một `Suspense` component.

## 5. Error boundaries

### Nếu OtherComponent không thể tải lên (Ví dụ, lỗi mạng), nó sẽ kích hoạt lỗi.

### Bạn có thể điều khiển những lỗi đó để hiển thị một trải nghiệm người dùng tốt hơn và quản lý phục hồi với Error Boundaries.

### Một khi bạn đã tạo Error Boundary, bạn có thể sử dụng nó bất kỳ nơi nào bên trên lazy components của bạn để hiển thị thông báo lỗi khi có sự cố về mạng.

    import React, { Suspense } from 'react';
    import MyErrorBoundary from './MyErrorBoundary';

    const OtherComponent = React.lazy(() => import('./OtherComponent'));
    const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

    const MyComponent = () => (
    <div>
        <MyErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
            <section>
            <OtherComponent />
            <AnotherComponent />
            </section>
        </Suspense>
        </MyErrorBoundary>
    </div>
    );

## 6. Phân chia code dựa vào định tuyến(Route-based)

### Phân chia code dựa vào định tuyến để phân chia ứng dụng thành các phần được quản lý riêng biệt, giúp cho việc phát triển và bảo trì dễ dàng hơn.

### Cách thực hiện phân chia code dựa vào định tuyến là chia ứng dụng thành các phần tương ứng với từng route (đường dẫn) trong ứng dụng. Mỗi phần sẽ chứa tất cả các component, service, action, reducer, middleware, hoặc các file cần thiết khác để hoạt động đúng với route đó.

### Khi phân chia ứng dụng dựa trên định tuyến, bạn có thể dễ dàng quản lý và tái sử dụng các component và các module riêng lẻ cho mỗi route. Ngoài ra, việc phân chia theo định tuyến cũng giúp cho ứng dụng hoạt động nhanh hơn, bởi vì các module không cần thiết cho một route cụ thể không được tải vào bộ nhớ khi truy cập vào route đó.

### Để thực hiện phân chia dựa vào định tuyến, bạn có thể sử dụng các thư viện quản lý định tuyến như react-router-dom, next.js, reach-router, hoặc tự xây dựng một hệ thống quản lý định tuyến.

## 7. Named Exports (Đặt tên Export)

### React.lazy hiện tại chỉ hỗ trợ default export.

### Nếu module bạn muốn import sử dụng named export, bạn có thể tạo một module trung gian và sau đó export dưới dạng export default. Điều này chắc đảm bảo rằng tree shaking vẫn hoạt động và bạn không kéo những component chưa được sử dụng.

    // ManyComponents.js
    export const MyComponent = /* ... */;
    export const MyUnusedComponent = /* ... */;
    // MyComponent.js
    export { MyComponent as default } from "./ManyComponents.js";
    // MyApp.js
    import React, { lazy } from 'react';
    const MyComponent = lazy(() => import("./MyComponent.js"));
