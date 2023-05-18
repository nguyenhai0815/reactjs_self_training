# Effect Hook

### useEffect là một nơi quản lý các side-effect bên trong một React Components

    side-effect có thể hiệu là một khái niệm miêu tả các tính toán bên trong một hàm ảnh hưởng đến các đối tượng bên ngoài không thông qua đối số.

### useEffect, cũng tương tự như vậy, chứa các tính toán có phạm vi ảnh hưởng nằm ngoài React components của nó.

### thường được sử dụng cho các mục đích như:

- Gọi API để lấy các thông tin bổ sung cho Components
- Thay đổi tiêu đề cho trang
- Cập nhật các state của components.
- ....

## 1. Sử dụng useEffect

### useEffect được kích hoạt sau khi quá trình render của React component hoàn tất. Nó sẽ được gọi và thực hiện tính toán các hành động bên trong nó trong một callback.

    import React, {useEffect} from 'react'

    function Example() {
        // Sử dụng useEffect
        useEffect(() => {
            document.title = "Tieu De";
        }, [])

        return (
            <h1>Example</h1>
        );
    }

### React.useEffect chấp nhận 2 đối số

    useEffect(callback, dependencies);

###

- Callback: sẽ được gọi trong useEffect sau khi return thực thi nhiệm vụ kết xuất giao diện của nó.
- Dependencies: Là một mảng chứa các đối số mà useEffect sẽ phụ thuộc vào đó để thực thi. Trong ví dụ trên là một mảng trống, nó đồng nghĩa với việc chỉ thực hiện một lần duy nhất sau khi component render.

## 2. Dependencies trong useEffect()

### 2.1. Không cung cấp

### Trong trường hợp bạn không cung cấp bất kỳ đôi số nào. useEffect sẽ được gọi thực thi các tính toán bên trong nó môi khi thành phần render.

    import React, {useEffect} from 'react'

    function Example() {
        // useEffect sẽ thực thi đặt tiêu đề mỗi lần component re-render
        useEffect(() => {
            document.title = "Tieu De";
        })

        return (
            <h1>Example</h1>
        );
    }

### 2.2. Một mảng trống []

### Khi bạn truyền một mảng trống vào, nó sẽ chỉ thực thi một lần duy nhất sau khi thành phần đó render lần đầu tiên, cách hoạt động tương tự như componentDidMount của Class Component

    import React, {useEffect} from 'react'

    function Example() {
        // Chỉ hoạt động lần đầu tiên sau khi return chạy.
        useEffect(() => {
            document.title = "Tieu De";
        }, [])

        return (
            <h1>Example</h1>
        );
    }

### 2.3. Khi truyền các Props, State

### Khi `dependencies` là các `props`, `state` bên trong một mảng `[props1, props2,.. stateA]`. `React useEffect` sẽ dựa vào giá trị `props`, `state`. Trong lần render tiếp theo, nó sẽ kiểm tra giá trị của `props`, `state` mới với giá trị `props`, `state` trước đó. Nếu khác nhau sẽ thực hiện `useEffect` `callback` sẽ được gọi. Ngược lại thì không có gì xảy ra.

### Cơ chế này tương tự như bạn sử dụng Life Cycle `componentDidUpdate` và `shouldComponentUpdate` của Class Component.

    import React, {useEffect, useState} from 'react'

    function Example() {
        const [count, setCount] = useState(0);

        // useEffect sẽ thực thi vì hàm này làm count thay đổi giá trị so với trước đó
        const increment = () => {
            setCount(count + 1);
        }

        // useEffect sẽ không thực thi khi hàm này được gọi vì nó không thay đổi count
        const nothing = () => {
            setCount(count);
        }

        // useEffect callback được gọi khi state thay đổi so với giá trị trước đó
        useEffect(() => {
            console.log("useEffect được gọi");
        }, [count])

        return (
            <section>
                <h1>{count}</h1>

                <button onClick={increment}>Tăng thêm</button>
                <button onClick={nothing}>Không có gì xảy ra</button>
            </section>
        );
    }

## 3. Clean up useEffect

### Một vài `side-effect` hoặc hầu như chúng ta sẽ cần phải `clean-up` các `side-effect` để tránh các vấn đề về hiệu xuất như `memory-leak`. Vấn đề này thường thấy trong quá trình phát triển `React app`.

### Trong `useEffect`, chúng ta sẽ trả về một hàm bên trong `useEffect` đó để thực hiện `clean up`.

    import React, {useEffect, useState} from 'react'

    function Example() {
        // Clean up
        useEffect(() => {
            // Khi bạn gọi các sự kiện cho một component như scroll
            // Có thể gây leak-memory nếu không clean up
            // Ví dụ, bạn tạo 1 sự kiện scroll ở component A,
            // Sau đó nhảy qua component B mà chưa remove sự kiện ở component A,
            // Lúc này, sự kiện ở component A sẽ vẫn hoạt động và cộng dôn với sự kiện ở component B
            window.addEventListener("scroll", () => {...});

            // Chúng ta sẽ cần clean up nó khi navigate sang các component khác.
            // Tránh memory leak
            return () => {
                window.removeEventListener("scroll", () => {...})
            }
        }, [])

        return (
            <section>

            </section>
        );
    }

## 4. Kết luận

### useEffect là một React hook quản lý side-effect trong các thành phần. Đối số callback là một hàm để đặt logic side-effect. Tất cả sẽ hoạt động hoặc không đều phụ thuộc vào đối số thứ 2 là các dependency

### useEffect sẽ gọi callback trong lần đầu thực thi sau quá trình kết xuất và tiếp tục gọi lại nếu thỏa mãn yêu cầu của dependency.
