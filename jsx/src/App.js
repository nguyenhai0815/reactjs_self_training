import './App.css';
import React from 'react';

// 1. Sử dụng JSX
function MyButton(props) {
  const { color, shadowSize, children, width } = props;

  return (
    <button
      style={{ backgroundColor: color, boxShadow: `0 0 ${shadowSize}px black`, width: `${width}px` }}
    >
      {children}
    </button>
  );
}

// 2. React must be in scope (ReactJs < 17 sẽ báo lỗi, ở đây đang dùng reactjs 18 nên không lỗi)
function MyComponent() {
  return (
    <div>
      <a href='#'>Link here</a>
    </div>
  );
}

// 3. Using Dot Notation for JSX Type
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}
function BlueDatePicker() {
  return <MyComponents.DatePicker color="green" />;
}

// 4. HTML Tags vs. React Components
const Container = ({ children, color }) => (
  <div className="container" style={{ color: color}}>
    {children}
  </div>
);

// 5. Props in JSX
function NumberDescriber(props) {
  let description;
  if (props.foo % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}

// 6. String Literals
function Greeting(props) {
  return <h1>Hello, {props.firstName + " " + props.lastName}!</h1>;
}

// 8. Spread Attributes
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

function App3() {
  const person = { name: 'John', age: 30, address: '123 Main St' };
  const { name, ...rest } = person;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Other info:</p>
      <ul>
        {Object.keys(rest).map((key) => (
          <li key={key}>
            {key}: {rest[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}
// 9. 
function Child(props) {
  return (
    <div>
      <h3>Child component:</h3>
      {props.children}
    </div>
  );
}
function Login() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign in.</h1>
      )}
      {isLoggedIn && <App1 />}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <MyButton color="red" shadowSize={2} width="100">
        Click Me
      </MyButton>
      <MyComponent />
      <BlueDatePicker />

      <Container color="red">
        <h1>Hello world!</h1>
        <p>This is a React component.</p>
      </Container>
      
      <NumberDescriber foo={1 + 2 + 3 + 4} />
      
      <Greeting firstName="Alice" lastName="Cia" />
      <Greeting firstName={'Alice'} lastName={'Cia'} />

      <App1 />
      <App2 />
      <App3 />

      <Child>
        <h2>Child Component</h2>
        <p>This is a child component.</p>
      </Child>

      <Login/>
    </div>
  );
}

export default App;
