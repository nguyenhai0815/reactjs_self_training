# Profiler API (Công cụ Phân tích)

### Công cụ Profiler (Công cụ Phân tích) đánh giá xem ứng dụng React thực hiện việc render và “chi phí” để thực hiện nó. Mục đích của nó là để xác định xem phần nào của ứng dụng chạy chậm và có thể được hưởng lợi từ việc tối ưu hóa như là ghi nhớ (memoization).

## 1. Sử dụng

### Công cụ Phân tích (Profiler) có thể thêm vào bất kì đâu trong React tree để tính toán việc render ở nơi mà Profiler component được thêm vào. Nó cần 2 props: một là id (string) và một là onRender (hàm callback) để React có thể gọi bất kỳ lúc nào khi component ở bên trong cây (tree) có sự thay đổi.

### Có thể sử dụng nhiều Profiler component để đánh giá nhiều nơi khác nhau trong ứng dụng

### Profiler component có thể sử dụng lồng nhau để phân tích các component khác nhau trong cùng một subtree

## 2. onRender Callback

### Profiler cần một hàm onRender giống như prop. React sẽ gọi hàm này mỗi khi component được bọc bởi Profiler thực hiện một thay đổi. Nó nhận thông tin mô tả những gì đã render và thời gian thực hiện.

    function onRenderCallback(
        id, // "id" của Profiler tree vừa thực hiện thay đổi
        phase, // một trong hai "mount" (nếu tree vừa được mounted) hoặc "update" (nếu nó re-rendered)
        actualDuration, // thời gian để rendering cập nhật mới
        baseDuration, //  thời gian ước tính để hiển thị toàn bộ subtree mà không cần ghi nhớ
        startTime, // khi React bắt đầu hiển thị bản cập nhật này
        commitTime, // khi React hoàn thành cập nhật
        interactions // tập hợp các tương tác thuộc về bản cập nhật
    ) {
        // Tổng hợp hoặc log thời gian render...
    }

- id: string - “id” của Profiler tree vừa thực hiện thay đổi Nó có thể dùng để xem thành phần nào của tree đã thay đổi nếu bạn sử dụng nhiều công cụ Phân tích (profilers).
- phase: "mount" | "update" - Xác định xem tree được mounted lần đầu tiên hay do re-rendered vì props, state hay hooks.
- actualDuration: number - Thời gian bỏ ra để rendering Profiler và các components con của nó. Điều này cho biết bạn có nên sử dụng các công cụ memoization cho subtree hay không (ví dụ React.memo, useMemo,shouldComponentUpdate). Lý tưởng nhất là giá trị này nên giảm đáng kể sau lần mount đầu tiên vì nhiều component con chỉ cần re-render nếu prop cụ thể nào đó của nó thay đổi.
- baseDuration: number - Khoảng thời gian render gần nhất cho từng component bên trong Công cụ Phân tích (Profiler). Giá trị này ước tính chi phí lãng phí cho trường hợp tệ nhất khi rendering (ví dụ: lần mount đầu tiên hoặc một tree không sử dụng memoization)
- startTime: number - Thời gian chính xác khi React bắt đầu rendering sự thay đổi.
- commitTime: number - Thời gian chính xác khi React hoàn thành rendering sự thay đổi. Giá trì này được chia sẻ giữa các Công cụ Phân tích trong một commit, cho phép chúng được nhóm lại nếu muốn.
- interactions: Set - Tập hợp các “tương tác” đã được theo dõi khi cập nhật hoặc lên lịch (ví dụ: khi render hoặc setState được gọi).
