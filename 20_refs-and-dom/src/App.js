import React, { Component, useRef } from 'react';

// Thêm Ref vào một DOM Element
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // Tạo ra một ref để lưu textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: Chúng ra truy cập đến "current" để lấy DOM node
    this.textInput.current.focus();
  }

  render() {
    // Nói với React chúng ta muốn liên kết tới <input> ref
    // Với `textInput` chúng ta đã tạo ở constructor
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

// Thêm Ref vào Class Component
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}

// Refs và Function Components
function MyFunctionComponent() {
  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    // Nó sẽ không thực hiện được
    return (
      <MyFunctionComponent ref={this.textInput} />
    );
  }
}

function CustomTextInputComponents(props) {
  // textInput phải được khai báo ở đây để ref có thể tham chiếu đến nó
  const textInput = useRef(null);
  
  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}


function App() {
  return (
    <div>
      <CustomTextInput/>
      <AutoFocusTextInput />
      <Parent />
      <CustomTextInputComponents />
    </div>
  );
}

export default App;
