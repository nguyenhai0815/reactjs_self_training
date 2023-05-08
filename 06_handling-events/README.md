# Handle Event

### Việc bắt sự kiện của những element React rất giống với những element DOM. Có một số khác biệt về cú pháp như:

- Những sự kiện của React được đặt tên theo dạng camelCase, thay vì lowercase.
- Với JSX, bạn có thể sử dụng “hàm” (function) để bắt sự kiện thay vì phải truyền vào một chuỗi.

#### Ví dụ, đoạn HTML sau:

- Với DOM element để bind sự kiện chúng ta truyền vào element 1 chuỗi string

#####

    <button onclick="activateLasers()">
        Activate Lasers
    </button>

- Còn với React element thì việc xử lý sự kiện như sau

#####

    <button onClick={activateLasers}>
        Activate Lasers
    </button>

### Một trong những điểm khác biệt giữa function sử dụng cho DOM và React đó chính là:

- các function của React không thể dừng function bằng việc return false như là DOM.
- Với React element để dừng một sự kiện thì phải sử dụng funtion **e.preventDefault();**

## Synthetic event

### Với React element thì synthetic event e được định nghĩa theo [W3C spec](https://www.w3.org/TR/DOM-Level-3-Events/)

### Event khi được bind vào element thì được thêm vào SyntheticEvent giống như là các sự kiện của các trình duyệt

## Method Refer

### Với React element thì không cần phải sử dụng addEventListener để add event vào các element mới được tạo.
