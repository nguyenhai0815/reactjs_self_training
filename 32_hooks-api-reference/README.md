# Hooks API Reference

## 1. Các APIs có sẵn của Hooks trong React

### 1.1. Hooks Cơ bản

- useState
- useEffect
- useContext

### 1.2. Bổ sung Hooks

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue
- useDeferredValue
- useTransition
- useId

### 1.3. Library Hooks

- useSyncExternalStore
- useInsertionEffect

## 2. Hooks Cơ bản

### 2.1. useState

#### Trong React, Hook useState được sử dụng để khởi tạo và quản lý state trong functional components. Nó cung cấp cách đơn giản để thay thế việc sử dụng this.state và this.setState trong class components.

    const [state, setState] = useState(initialState);

#### Với lần render đầu tiên, trạng thái trả về của (state) là giống với giá trị mà bạn để ở tham số đầu tiên (initialState).

#### Hàm setState được dùng để thay đổi state. Nó chấp nhận giá trị state mới và sẽ thực hiện render lại (re-render) component.

    setState(newState);

#### Trong những lần re-renders tiếp theo, giá trị đầu tiên trả về bởi useState sẽ luôn là state mới nhất sau khi hoàn thành các thay đổi.

### 2.1.1. Functional updates

#### Nếu state mới được tính dựa vào state trước đó, bạn có thể dùng hàm trong setState. Hàm sẽ nhận về giá trị trước đó, và trả về giá trị đã được cập nhật.

#### Ví dụ

    function Counter({initialCount}) {
        const [count, setCount] = useState(initialCount);
        return (
            <>
            Bộ đếm: {count}
            <button onClick={() => setCount(initialCount)}>Chạy lại</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </>
        );
    }

    - Các nút ”+” và ”-” sử dụng hàm bởi vì chúng thay đổi giá trị dựa vào giá trị cũ. Nhưng nút “Chạy lại” sử dụng giá trị trực tiếp, bởi chúng lúc nào cũng gán lại biến count về giá trị ban đầu.

- Nếu hàm cập nhật của bạn trả về giống với giá trị của state hiện tại, việc rerender tiếp theo sẽ được bỏ qua hoàn toàn.

### 2.1.2. Lazy initial state

#### initialState argument là một state được sử dụng ở lần render đầu tiên. Trong các lần render tiếp theo, nó sẽ bị bỏ qua. Nếu initial state kết quả của một phép tính phức tạp, bạn có thể phải chuẩn bị một hàm để thay thể, để nó chỉ chạy khi render lần đầu tiên:

    const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(props);
    return initialState;
    });

### 2.1.3. Bỏ qua một cập nhật state

#### Nếu bạn cập nhật một State Hook với một giá trị giống với state hiện tại, React sẽ bỏ qua việc render the children hoặc bắn effects. (React sử dụng Thuật toán so sánh [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#description) .)

### 2.2. useEffect

    useEffect(didUpdate);

#### Mutations, subscriptions, timers, logging, và các side effects không được phép sử dụng bên trong body của function component (gọi là React’s render phase). Nếu làm vậy có thể sẽ dẫn đến những lỗi và không nhất quán trên giao diện.

#### Thay vào đó, sử dụng useEffect. Hàm được gọi bởi useEffect sẽ chạy sau khi render hoàn thành (render is committed to the screen). Hãy coi các effects như là cách để biến các hàm thuần túy trở thành các hàm của React.

#### Mặc định, effetcs sẽ chạy mỗi lần sau khi render hoàn tất, nhưng bạn có thể điều chỉnh nó chỉ khi chắc chắn giá trị thay đổi.

### 2.2.1. Loại bỏ một effect (Cleaning up an effect)

#### Thông thường, effets tạo ra tài nguyên mà nó cần được loại bỏ trước khi component rời khỏi màn hình, ví dụ như là subscription hoặc timer ID. Để làm vậy, hàm sử dụng ở useEffect có thể trả về một hàm clean-up.

#### Ví dụ, để tạo một subscription:

    useEffect(() => {
        const subscription = props.source.subscribe();
        return () => {
            // Loại bỏ subscription
            subscription.unsubscribe();
        };
    });

####

- Hàm clean-up chạy trước khi component bị loại bỏ khỏi UI để tránh bị rò rỉ bộ nhớ (memory leaks). Ngoài ra, nếu compoment render nhiều lần (thường sẽ như thế), effect trước đó sẽ bị loại bỏ trước khi effect mới thực thi.
- Trong ví dụ trên, subscription mới sẽ được tạo mỗi lần cập nhật. Để tránh bị effect mỗi khi update.

### 2.2.2. Timing of effects

#### Không giống componentDidMount và componentDidUpdate, hàm được gán cho useEffect sẽ chạy sau khi render hoàn tất, trong khi trì hoãn event này.

=> Điều đó khiến nó phù hợp cho rất nhiều dạng side effects cơ bản, như là subscriptions và event handles, bời vì đa số tác vụ không nên chặn (block) trình duyệt thực hiện cập nhật thay đổi màn hình.

#### Tuy nhiên, không phải tất cả effects có thể trì hoãn. Lấy ví dụ, một DOM mutation mà nó hiển thị cho người dùng bắt buộc cập nhật đồng bộ trước khi có sự thay đổi kế tiếp để người dùng không cảm thấy có sự không thống nhất. Nó có những đặc tính giống như useEffect, và chỉ khác ở thời gian mà nó thực thi (fired).

#### Mặc dù useEffect trì hoãn đến khi trình duyệt vẽ xong (painted), nó được đảm bảo sẽ thực thi trước mỗi khi có một render mới. React sẽ luôn loại bỏ các effect của render cũ trước khi bắt đầu thực hiện thay đổi mới.

### 2.2.3. Thực thi có điều kiện của một effect

#### Hành vi mặc định của các effetcs là thực thi mỗi khi hoàn thành việc render. Với cách này một effect sẽ luôn được khởi tạo lại nếu một trong những dependencies (danh sách phụ thuộc) của nó thay đổi.

#### Tuy nhiên, điều này có thể quá đà trong một số trường hợp, giống như ví dụ về subscription ở mục bên trên. Chúng ta không cần thiết phải tạo lại một subscription mỗi lần cập nhật, chỉ cần nếu nguồn đầu vào thay đổi

#### Để triển khai code, hãy để argument thứ hai vào useEffect dưới dạng mảng những giá trị mà effect này phụ thuộc vào.

### 2.2. useContext

    const value = useContext(MyContext);

#### Chấp nhận một context object (giá trị trả về từ `React.createContext`) và trả về giá trị của context hiện tại. Giá trị context hiện tại được xác định bởi giá trị prop của `<MyContext.Provider>` gần nhất bên trên ở component trong một cây.

#### Khi `<MyContext.Provider>` gần nhất bên trên component cập nhật, Hook này sẽ trigger render lại với context `value` mới nhất đã truyền vào `MyContext` provider. Ngay cả khi bạn dùng `React.memo` hoặc `shouldComponentUpdate`, việc rerender vẫn sẽ xảy ra khi `component` đó sử dụng `useContext`.

#### Đừng quên rằng argument của useContext phải là context object của nó:

- Đúng: useContext(MyContext)
- Sai: useContext(MyContext.Consumer)
- Sai: useContext(MyContext.Provider)

#### Một component gọi useContext sẽ luôn render lại khi giá trị của context thay đổi.

## 3. Bổ sung về Hooks

### 3.1. useReducer

    const [state, dispatch] = useReducer(reducer, initialArg, init);

#### Đây là một thay thế cho `useState`. Chấp nhận một reducer của kiểu `(state, action) => newState`, và trả về state hiện tại đi kèm với mộtdispatch` method.

#### useReducer thường thích hợp hơn useState khi bạn có một state phức tạp với nhiều logic bên trong, như là có nhiều sub-values hoặc khi state tiếp theo phụ thuộc vào giá trị của state trước.

#### useReducer thường thích hợp hơn useState khi bạn có một state phức tạp với nhiều logic bên trong, như là có nhiều sub-values hoặc khi state tiếp theo phụ thuộc vào giá trị của state trước. useReducer đồng thời giúp bạn tối ưu hiệu năng của component nào mà nó cập nhật ở sâu (trigger deep updates) bởi vì bạn có thể bỏ dispatch xuống thay vì dùng callbacks.

### 3.2. useCallback

    const memoizedCallback = useCallback(
        () => {
            doSomething(a, b);
        },
        [a, b],
    );

#### Bỏ vào một callback và một mảng phụ thuộc. useCallback sẽ trả về một bản đã ghi nhớ của callback mà nó chỉ thay đổi khi có ít một phụ thuộc thay đổi.

#### Nó sẽ hữu ích khi bạn để một component con mà nó chỉ render lại phụ thuộc vào một số giá trị nhất định để tránh việc render không cần thiết (giống như shouldComponentUpdate).

#### `useCallback(fn, deps)` tương đương với `useMemo(() => fn, deps)`.

### 3.3. useMemo

    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

#### Bỏ vào một hàm “tạo” và một mảng phụ thuộc. useMemo sẽ chỉ tính toán lại giá trị đã nhớ khi một trong những phụ thuộc thay đổi. Tối ưu này giúp giảm thiểu các tính toán phức tạp mỗi lần render.

#### Hãy nhớ rằng hàm mà truyền vào useMemo chỉ chạy khi render. Đừng làm bất cứ điều gì ở đó mà bạn không thường hay làm trong quá trình render. Ví dụ, như các side effect của useEffect, không phải của useMemo.

#### Nếu không có mảng phụ thuộc, giá trị mới sẽ luôn luôn được tính toán mỗi lần render.

### => **useMemo là cách để tối ưu hiệu năng, không hoàn toàn đúng về ngữ nghĩa (useMemo giống như bộ nhớ trong tiếng Việt).**

### 3.4. useRef

    const refContainer = useRef(initialValue);

#### useRef trả về một đối tượng ref có thể thay đổi nơi mà thuộc tính .current được khởi tạo và thêm vào giá trị của (initialValue). Object trả về sẽ kiên định cho cả vòng đời của component.

### 3.5. useImperativeHandle

#### Có đặc điểm giống với useEffect, nhưng sẽ kích hoạt đồng bộ sau khi tất cả DOM thay đổi.

#### Sử dụng nó để đọc bố cục từ DOM và render lại một cách đồng bộ. Các cập nhật được bố trí bên trong useLayoutEffect sẽ được xoá một cách đồng bộ, trước khi trình duyệt có cơ hội vẽ.

### 3.6. useDebugValue

    useDebugValue(value)

#### useDebugValue có thể dùng để hiện thỉ label cho hooks của bạn trong React DevTools.

### 3.7. useDeferredValue

    const deferredValue = useDeferredValue(value);

#### useDeferredValue chấp nhận một giá trị và trả về một bản sao mới của giá trị sẽ trì hoãn các bản cập nhật khẩn cấp hơn. Nếu kết xuất hiện tại là kết quả của một bản cập nhật khẩn cấp, chẳng hạn như đầu vào của người dùng, React sẽ trả về giá trị trước đó và sau đó hiển thị giá trị mới sau khi quá trình kết xuất khẩn cấp hoàn tất.

#### Hook này tương tự như user-space hooks người dùng sử dụng gỡ lỗi hoặc điều tiết để trì hoãn cập nhật. Lợi ích khi sử dụng useDeferredValue là React sẽ hoạt động trên bản cập nhật ngay khi công việc khác kết thúc (thay vì đợi một khoảng thời gian tùy ý) và giống như startTransition, các giá trị bị trì hoãn có thể tạm dừng mà không kích hoạt dự phòng không mong muốn cho nội dung hiện có.

### 3.8. useTransition

    const [isPending, startTransition] = useTransition();

#### Trả về một giá trị trạng thái cho trạng thái đang chờ xử lý của quá trình chuyển đổi và một hàm để bắt đầu trạng thái đó.

#### startTransition cho phép bạn đánh dấu các cập nhật trong callback được cung cấp dưới dạng chuyển tiếp:

    startTransition(() => {
        setCount(count + 1);
    });

#### isPending cho biết khi nào quá trình chuyển đổi đang hoạt động để hiển thị trạng thái đang chờ xử lý:

    function App() {
        const [isPending, startTransition] = useTransition();
        const [count, setCount] = useState(0);

        function handleClick() {
            startTransition(() => {
            setCount(c => c + 1);
            });
        }

        return (
            <div>
            {isPending && <Spinner />}
            <button onClick={handleClick}>{count}</button>
            </div>
        );
    }

### 3.9. useId

    const id = useId();

#### useIdlà một React Hook để tạo các ID duy nhất có thể được chuyển đến các thuộc tính trợ năng.

#### useIdkhông nhận tham số nào.

#### useIdtrả về một chuỗi ID duy nhất được liên kết với useIdcuộc gọi cụ thể này trong thành phần cụ thể này.

## 4. Library Hooks

### 4.1. useSyncExternalStore

#### useSyncExternalStorelà một React Hook cho phép bạn đăng ký một cửa hàng bên ngoài.

    const state = useSyncExternalStore(subscribe, getSnapshot[, getServerSnapshot]);

####

- subscribe: Một hàm nhận một callback đối số và đăng ký nó vào cửa hàng. Khi cửa hàng thay đổi, nó sẽ gọi tệp callback. Điều này sẽ khiến thành phần kết xuất lại. Hàm này subscribesẽ trả về một hàm xóa đăng ký.

- getSnapshot: Hàm trả về ảnh chụp nhanh dữ liệu trong cửa hàng mà thành phần cần. Trong khi cửa hàng không thay đổi, các cuộc gọi lặp lại getSnapshotphải trả về cùng một giá trị. Nếu store thay đổi và giá trị trả về khác (so với Object.is), React sẽ render lại thành phần đó.

- tùy chọn getServerSnapshot : Hàm trả về ảnh chụp nhanh ban đầu của dữ liệu trong cửa hàng. Nó sẽ chỉ được sử dụng trong quá trình kết xuất máy chủ và trong quá trình hydrat hóa nội dung do máy chủ kết xuất trên máy khách. Ảnh chụp nhanh máy chủ phải giống nhau giữa máy khách và máy chủ, và thường được đánh số thứ tự và chuyển từ máy chủ sang máy khách. Nếu bạn bỏ qua đối số này, việc hiển thị thành phần trên máy chủ sẽ gây ra lỗi.

### 4.2. useInsertionEffect

#### useInsertionEffectlà một phiên bản useEffectkích hoạt trước bất kỳ đột biến DOM nào.

    useInsertionEffect(setup, dependencies?)
