import React, { Component, useState, useEffect } from 'react';

import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import Form from './components/Form';
import ListItem from './components/ListItem';
import Items from './mockdata/Item';

function App() {
    // sử dụng useState để khởi tạo state items
    const [items, setItem] = useState([]);

    useEffect(() => {
        setItem(Items);
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
        setItem(newItems);
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
                    <button type="button" className="btn btn-info btn-block marginB10">Add Item</button>
                </div>
            </div>
            <div className="row marginB10">
                <div className="col-md-offset-7 col-md-5">
                    <Form />
                </div>
            </div>
            <ListItem items={items} onDelete={ handleDelete } />
        </div>
    );
}

export default App;
