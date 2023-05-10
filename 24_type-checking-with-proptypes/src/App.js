import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
