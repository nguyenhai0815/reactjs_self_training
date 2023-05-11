import React, { Profiler } from 'react';

function ListItem(props) {
  return <li>{props.item}</li>;
}

function List(props) {
  const items = props.items.map(item => <ListItem key={item} item={item} />);
  return <ul>{items}</ul>;
}

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
    console.log(id, phase, actualDuration);
  }

  return (
    <Profiler id="myListProfiler" onRender={onRenderCallback}>
      <List items={items} />
    </Profiler>
  );
}


export default App;
