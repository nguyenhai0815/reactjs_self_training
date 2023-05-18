import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function Example1() {
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

function App() {
  return (
    <>
      <Example></Example>
      <Example1></Example1>
    </>
  );
}

export default App;
