import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add item</button>
      <my-todo-list items={items} />
    </div>
  );
}

export default App;
