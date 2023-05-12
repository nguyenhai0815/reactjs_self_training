import React, { Component, useContext, useState } from "react";
import { Modal, Form, FormGroup, FormControl, FormLabel, Button, FormFile } from 'react-bootstrap';

import { AppContext } from './ListContext';

function FormCreadorUpdate(props) {
    const { selectedItem, setSelectedItem } = useContext(AppContext);
    const { isEditing, handleEdit, handleAdd } = useContext(AppContext);

    // edit item
    const [editItem, setEditItem] = useState({
        name: selectedItem ? selectedItem.name : "",
        level: selectedItem ? selectedItem.level : "",
    });
    // add item
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

    // file
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (event) => {
        const image = event.target.files[0];
        setImageFile(image);
    };

    // validate
    const [errors, setErrors] = useState([]);

    // submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = [];
        
        if (isEditing) {
            const updatedItem = {
                ...selectedItem,
                name: selectedItem.name,
                level: selectedItem.level,
            };
            if (updatedItem.name.trim() === "") {
                newErrors.push({
                    field: "name",
                    message: "Name is required"
                });
            }
            if (updatedItem.level === "") {
                newErrors.push({
                    field: "level",
                    message: "Level is required"
                });
            }
            setErrors(newErrors);

            if (newErrors.length === 0) {
                handleEdit(updatedItem);
                props.hide();
            }
        } else {
            if (newItem.name.trim() === "") {
                newErrors.push({
                    field: "name",
                    message: "Name is required"
                });
            }
            if (newItem.level === "") {
                newErrors.push({
                    field: "level",
                    message: "Level is required"
                });
            }
            setErrors(newErrors);
            if (newErrors.length === 0) {
                handleAdd(newItem);
                setNewItem({ name: "", level: "" });
                props.hide();
            }
        }
    };

    return (
        <Modal show={props.show} onHide={props.hide}>
            <Modal.Header closeButton>
                <Modal.Title>{ isEditing ? 'Edit items' : 'Add Item' }</Modal.Title>
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
                            value={isEditing ? (selectedItem ? selectedItem.name : "") : newItem.name}
                        />
                        {errors.map((error) => (
                            error.field === "name" && <span key={error.message}>{ error.message }</span>
                        ))}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Level</FormLabel>
                        <FormControl as="select"
                            name="level"
                            onChange={handleInputChange}
                            value={isEditing ? (selectedItem ? selectedItem.level : "") : newItem.level}
                        >
                            <option value="">-- Choose option --</option>
                            <option value={0}>Low</option>
                            <option value={2}>High</option>
                            <option value={1}>Medium</option>
                        </FormControl>
                        {errors.map((error) => (
                            error.field === "level" && <span key={error.message}>{ error.message }</span>
                        ))}
                    </FormGroup>
                    <br/>
                    <Button type="submit">{ isEditing ? 'Edit' : 'Add' }</Button>&nbsp;
                    <Button variant="secondary" onClick={props.hide}>Close</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}

export default FormCreadorUpdate;