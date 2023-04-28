# Lifting State Up

    Thông thường, khi một dữ liệu thay đổi nó sẽ ảnh hưởng tới nhiều component cùng lúc.
    State được khuyến khích chia sẻ ở component cha của chúng.

### Lifting State Up là một kỹ thuật trong ReactJS cho phép bạn nâng cấp (lift up) state của một component lên một component cha để chia sẻ dữ liệu giữa các component con.

### Việc chia sẻ dữ liệu này giữa các component con được thực hiện bằng cách truyền props từ component cha xuống component con.

### Khi dùng kỹ thuật Lifting State Up, các component con sẽ không cần phải lưu trữ state riêng, mà sử dụng state được truyền từ component cha để hiển thị dữ liệu và điều khiển hành vi.
