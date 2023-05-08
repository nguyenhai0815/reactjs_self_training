import React, { Component } from 'react';
import './App.css';
import { Container, Form, Button, FormControl } from 'react-bootstrap';

class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      textareaValue: "",
      grapeFruit: "",
      selectedCity: "",
      selectedOptions: [],
      selectedFile: null,
    };
    this.fileInputRef = React.createRef();
    this.cities = ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho"];
  }


  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeSelect = (event) => {
    this.setState({ grapeFruit: event.target.value });
  };

  handleChangeSelectCity = (event) => {
    this.setState({ selectedCity: event.target.value });
  };

  handleChangeMultipart = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    this.setState({ selectedOptions });
  }

  handleChangeTextarea = (event) => {
    this.setState({ textareaValue: event.target.value });
  };

  handleFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.selectedFile);

    alert(
      "A name was submitted: " + this.state.name + "\n" +
      "A textarea was submitted: " + this.state.textareaValue + "\n" +
      "A grapeFruit was submitted: " + this.state.grapeFruit + "\n" +
      "Selected city: " + this.state.selectedCity + "\n" +
      `Selected Options: ${this.state.selectedOptions}`
    );
  };

  handleChangeEvent = (event) => {
    const { name, type } = event.target;
    const value = type === 'checkbox' ? event.target.checked : event.target.value;
    if (name === 'selectedOptions') {
      const options = event.target.selectedOptions;
      const values = [];
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          values.push(options[i].value);
        }
      }
      this.setState({ [name]: values });
    } else if (name === 'selectedFile') {
      this.setState({ [name]: event.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmitEvent = (event) => {
    event.preventDefault();

    alert(
      "A name was submitted: " + this.state.name + "\n" +
      "A textarea was submitted: " + this.state.textareaValue + "\n" +
      "A grapeFruit was submitted: " + this.state.grapeFruit + "\n" +
      "Selected city: " + this.state.selectedCity + "\n" +
      `Selected Options: ${this.state.selectedOptions}`+ "\n" +
      `selectedFile: ${this.state.selectedFile.name}`
    );
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>

          {/* input tag */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
          </Form.Group>

          {/* textarea tag */}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter some text" value={this.state.textareaValue} onChange={this.handleChangeTextarea} />
          </Form.Group>

          {/* sellect tag */}
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select your favorite fruit:</Form.Label>
            <Form.Control as="select" value={this.state.grapeFruit} onChange={this.handleChangeSelect}>
              <option>Grapefruit</option>
              <option value="Lime">Lime</option>
              <option value="Coconut">Coconut</option>
              <option value="Mango">Mango</option>
            </Form.Control>
          </Form.Group>

          {/* select tag */}
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select your city:</Form.Label>
            <Form.Control as="select" value={this.state.selectedCity} onChange={this.handleChangeSelectCity}>
              {this.cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* sellect multipart */}
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Select multiple options:</Form.Label>
            <Form.Control as="select" multiple onChange={this.handleChangeMultipart}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
              <option value="option5">Option 5</option>
            </Form.Control>
          </Form.Group>

          {/* File input */}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select a file:</Form.Label>
            <Form.Control type="file" ref={this.fileInputRef} onChange={this.handleFileChange} />
          </Form.Group>
          
          <br/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {/* Handling Multiple Inputs */}
        <Form onSubmit={this.handleSubmitEvent}>

          {/* input tag */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.value} onChange={this.handleChangeEvent} />
          </Form.Group>

          {/* textarea tag */}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} name="textareaValue" placeholder="Enter text" value={this.state.textareaValue} onChange={this.handleChangeEvent} />
          </Form.Group>

          {/* sellect tag */}
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select your favorite fruit:</Form.Label>
            <Form.Control as="select" name="grapeFruit" value={this.state.grapeFruit} onChange={this.handleChangeEvent}>
              <option>Grapefruit</option>
              <option value="Lime">Lime</option>
              <option value="Coconut">Coconut</option>
              <option value="Mango">Mango</option>
            </Form.Control>
          </Form.Group>

          {/* select tag */}
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select your city:</Form.Label>
            <Form.Control as="select" name="selectedCity" value={this.state.selectedCity} onChange={this.handleChangeEvent}>
              {this.cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* sellect multipart */}
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Select multiple options:</Form.Label>
            <Form.Control as="select" name="selectedOptions" multiple onChange={this.handleChangeEvent}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
              <option value="option5">Option 5</option>
            </Form.Control>
          </Form.Group>

          {/* File input */}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select a file:</Form.Label>
            <Form.Control type="file" name="selectedFile" ref={this.fileInputRef} onChange={this.handleChangeEvent} />
          </Form.Group>
          
          <br/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

function App() {
  return (
    <div className="App">
      <FormExample/>
    </div>
  );
}

export default App;
