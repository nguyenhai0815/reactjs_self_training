import './App.css';
import React, { Component } from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count); // giá trị không thay đổi ngay lập tức
  };
  handleIncrement2 = () => {
    // gọi đến callback
    this.setState({ count2: this.state.count2 + 1 }, () => {
      console.log(this.state.count2);
    });
  };
  

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <h1>{this.state.count2}</h1>
        <button onClick={this.handleIncrement2}>Increment2</button>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <Clock />
      <Example/>
    </div>
  );
}

export default App;
