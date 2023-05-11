import './App.css';
import React, { Component } from 'react';

// Kết hợp (composition)

function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

function Composition() {
  const handleClick = () => {
      console.log('Button clicked');
  };

  return <Button label="Click me" onClick={handleClick} />;
}

// Kế thừa (inheritance
class ParentComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello from Parent Component</h1>
      </div>
    );
  }
}

class ChildComponent extends ParentComponent {
  render() {
    return (
      <div>
        <h2>Hello from Child Component</h2>
        {super.render()}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <ChildComponent/>
      <Composition/>
    </div>
  );
}

export default App;
