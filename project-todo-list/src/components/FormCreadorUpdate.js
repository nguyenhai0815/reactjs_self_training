import React, { Component, useContext, useState } from "react";
import { Modal, Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';

import { AppContext } from './ListContext';

function FormCreadorUpdate(props) {
    const { selectedItem, setSelectedItem } = useContext(AppContext);
    const { isEditing, handleEdit, handleAdd } = useContext(AppContext);

    const [editItem, setEditItem] = useState({
        name: selectedItem ? selectedItem.name : "",
        level: selectedItem ? selectedItem.level : "",
    });
    const [newItem, setNewItem] = useState({
        name: "",
        level: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedItem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setEditItem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setNewItem({ ...newItem, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isEditing) {
            const updatedItem = {
                ...selectedItem,
                name: selectedItem.name || editItem.name,
                level: selectedItem.level || editItem.level,
            };
            handleEdit(updatedItem);
        } else{
            handleAdd(newItem);
            setNewItem({ name: "", level: "" });
        }
        
        props.hide();
    };
    
    return (
        <Modal show={props.show} onHide={props.hide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit items</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl
                            type="text"
                            name="name"
                            placeholder="Item Name"
                            onChange={handleInputChange}
                            value={isEditing && selectedItem && selectedItem.name ? selectedItem.name : ""}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Level</FormLabel>
                        <FormControl as="select"
                            name="level"
                            onChange={handleInputChange}
                            value={isEditing && selectedItem && selectedItem.level ? selectedItem.level : ""}
                        >
                            <option value="">-- Choose option --</option>
                            <option value={0}>Low</option>
                            <option value={2}>High</option>
                            <option value={1}>Medium</option>
                        </FormControl>
                    </FormGroup>
                    <br/>
                    <Button type="submit">Edit</Button>&nbsp;
                    <Button variant="secondary" onClick={props.hide}>Close</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}

export default FormCreadorUpdate