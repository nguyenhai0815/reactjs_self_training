import './App.css';
import React from "react";

// tạo 1 component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// tách component
function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}
function Content() {
  return (
    <div>
      <h2>Content</h2>
      <p>This is the content of the app.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* sử dụng component Welcome */}
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />

      <Greeting name="John" />
      <Content/>
    </div>
  );
}

export default App;
