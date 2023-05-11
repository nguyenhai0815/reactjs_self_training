import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import FormCreadorUpdate from './components/FormCreadorUpdate';
import ListItem from './components/ListItem';
import Items from './mockdata/Item';
import { AppContext } from './components/ListContext';

function App() {
    // sử dụng useState để khởi tạo state items
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(Items);
    }, []);

    // handle delete Item
    const handleDelete = (index, itemName) => {
        const newItems = [...items];
        const confirmDelete = window.confirm(`Delete ${itemName}?`);
        if (confirmDelete) {
            for(let i = 0; i < newItems.length; i++) {
                if(newItems[i].id === index) {
                    newItems.splice(i, 1);
                    break;
                }
            }
        }
        setItems(newItems);
    };

    // show/hide modal
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setShowComponent(true);
    }
    const handleCloseModal = () => {
        setShowComponent(false);
    };
    const [isEditing, setIsEditing] = useState(false);

    // add item
    const handleAdd = (newItem) => {
        setItems([...items, newItem]);
    };

    // handle edit item
    const [showModalEdit, setShowModalEdit] = useState(false);
    const handleShowModalEdit = () => {
        setShowModalEdit(true);
        setIsEditing(true);
    }
    const handleShowModalAdd = () => {
        setShowModalEdit(true);
        setIsEditing(false);
    }
    const handleCloseModalEdit = () => {
        setShowModalEdit(false);
    };

    const [selectedItem, setSelectedItem] = useState(null);

    const handleEdit = (item) => {
        setSelectedItem(item);
        const index = items.findIndex((i) => i.id === item.id);
        const newItems = [...items];
        newItems[index] = item;
        setItems(newItems);
    };

    return (
        <div className="container">
            <Title />
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <Search />
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Sort />
                </div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <button type="button" className="btn btn-info btn-block marginB10" onClick={handleShowModalAdd}>Add Item</button>
                </div>
            </div>
            <AppContext.Provider value={{ items, handleAdd, handleDelete, handleEdit, selectedItem, setSelectedItem, handleShowModalEdit, isEditing }}>
                <ListItem />
                <FormCreadorUpdate show={showModalEdit} hide={handleCloseModalEdit} />
            </AppContext.Provider>
        </div>
    );
}

export default App;
