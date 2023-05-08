import React, { useState, useEffect } from 'react';
import './App.css';



function App() {
  // sử dụng useState để lưu count trong state.
  const [count, setCount] = useState(0);
  // count +1 mỗi lần click và upadte lại vào state qua setCount
  function handleClick() {
    setCount(count + 1);
  }

  // sử dụng hook useState để lưu trữ thời gian hiện tại trong state.
  const [time, setTime] = useState(new Date());

  // sử dụng hook useEffect để gọi hàm setInterval mỗi giây một lần và cập nhật state của chúng ta bằng cách gọi hàm setTime.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increase Count</button>
      {/* hiển thị thời gian hiện tại */}
       <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
