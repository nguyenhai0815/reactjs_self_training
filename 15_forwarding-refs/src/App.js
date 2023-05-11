import React, { useRef,Component } from 'react';
import Button from './Button';

// Forwarding refs to DOM components
class Input extends Component {
  focus() {
    this.inputRef.focus();
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input 
          type={this.props.type} 
          id={this.props.id} 
          ref={(input) => { this.inputRef = input; }} 
        />
      </div>
    );
  }
}

// Forwarding refs in higher-order components
function withLog(WrappedComponent) {
  class WithLog extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} has mounted.`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} will unmount.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithLog {...props} forwardedRef={ref} />;
  });
}

class MyComponent extends Component {
  render() {
    return <div>My Component</div>;
  }
}
const LoggableComponent = withLog(MyComponent);

class App extends Component {
  constructor(props) {
    super(props);

    // Forwarding refs in higher-order components
    this.myRef = React.createRef();

    // Forwarding refs to DOM components
    this.inputRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  // Forwarding refs in higher-order components
  componentDidMount() {
    console.log(this.myRef.current);
  }

  // Forwarding refs to DOM components
  handleClick() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        {/* Forwarding refs in higher-order components */}
        <LoggableComponent ref={this.myRef} />

        {/* Forwarding refs in higher-order components */}
        <Input 
          type="text" 
          id="name" 
          label="Name" 
          ref={this.inputRef} 
        />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    );
  }
}

export default App;
