import React, { Component, useState } from "react";
import { Modal, Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';

function FormCreadorUpdate(props) {
    const [newItem, setNewItem] = useState({
        name: "",
        level: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleAdd(newItem);
        setNewItem({ name: "", level: "" });
    };

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl type="text" name="name" placeholder="Item Name" value={newItem.name} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Level</FormLabel>
                        <FormControl as="select" name="level" value={newItem.level} onChange={handleChange}>
                            <option value="">-- Choose option --</option>
                            <option value={0}>Low</option>
                            <option value={2}>High</option>
                            <option value={1}>Medium</option>
                        </FormControl>
                    </FormGroup>
                    <br/>
                    <Button type="submit">Add</Button>&nbsp;
                    <Button variant="secondary" onClick={props.onHide}>Close</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}

export default FormCreadorUpdate