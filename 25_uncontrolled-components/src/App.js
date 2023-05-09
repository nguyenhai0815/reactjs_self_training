import { useState } from "react";

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('message'));
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input type="text" name="name" defaultValue="Bob"></input>
      </div>
      <br />
      <div className="form-control">
        <label>Email</label>
        <input type="text" name="email" defaultValue="email@gmail.com"></input>
      </div>
      <br/>
      <div className="form-control">
        <label>Upload file:</label>
        <input type="file"></input>
      </div>
      <br/>
      <div className="form-control">
        <label>Message</label>
        <textarea defaultValue="message" name="message"></textarea>
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

function FileForm() {
  const [formData, setFormData] = useState({
    file: null,
    name: "",
    description: "",
  });

  const handleFileSelect = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { file, name, description } = formData;

    console.log('file', file);
    console.log('name', name);
    console.log('description', description);

    const formDataToSend = new FormData();
    formDataToSend.append("file", file);
    formDataToSend.append("name", name);
    formDataToSend.append("description", description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Select a file:</label>
        <input type="file" id="file" onChange={handleFileSelect} />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} />
      </div>
      <button type="submit" disabled={!formData.file || !formData.name || !formData.description}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <div>
      <Form />
      <br></br>
      <FileForm />
    </div>
  );
}

export default App;
