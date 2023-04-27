import './App.css';
import React, { useState } from 'react';

// Basic List Component
function ListItem(props) {
  return <li>{props.item}</li>;
}

function List(props) {
  const items = props.items;
  const listItems = items.map((item) =>
    <ListItem key={item.toString()} item={item} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
// Basic List Component end

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const numberList = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  
  return (
    <div className="App">
      <h1>Number List</h1>
      <ul>{numberList}</ul>

      {/* Basic List Component */}
      <div>
        <h1>Basic List Component</h1>
        <List items={items} />
      </div>
    </div>
  );
}

export default App;
