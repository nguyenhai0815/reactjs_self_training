import React, { Component, useState } from 'react';
import './App.css';


// Temperature
class Temperature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celsius: '',
      fahrenheit: '',
    };
  }

  handleChangeCelsius = (event) => {
    const celsius = event.target.value;
    const fahrenheit = (celsius * 9 / 5) + 32;

    this.setState({
      celsius: celsius,
      fahrenheit: fahrenheit.toFixed(2),
    });
  };

  handleChangeFahrenheit = (event) => {
    const fahrenheit = event.target.value;
    const celsius = (fahrenheit - 32) * 5 / 9;

    this.setState({
      celsius: celsius.toFixed(2),
      fahrenheit: fahrenheit,
    });
  };

  render() {
    const { celsius, fahrenheit } = this.state;

    return (
      <div>
        <label>
          Celsius:
          <input type="number" value={celsius} onChange={this.handleChangeCelsius} />
        </label>
        <br />
        <label>
          Fahrenheit:
          <input type="number" value={fahrenheit} onChange={this.handleChangeFahrenheit} />
        </label>
        <br />
        {celsius >= 100 ? <p>Nước sôi</p> : <p>Nước chưa sôi</p>}
      </div>
    );
  }
}

// 
function Parent() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>Parent Counter: {counter}</h2>
      <Child counter={counter} incrementCounter={incrementCounter} />
    </div>
  );
}

function Child(props) {
  return (
    <div>
      <button onClick={props.incrementCounter}>Increment Counter</button>
      <h2>Child Counter: {props.counter}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <br/><br/>
      <Temperature/>
      <br/><br/>
      <Parent/>
    </div>
  );
}

export default App;
