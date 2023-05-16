import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import FormCreadorUpdate from './components/FormCreadorUpdate';
import ListItem from './components/ListItem';
import Items from './mockdata/Item';
import { AppContext } from './components/ListContext';
import { CSVLink } from 'react-csv';
import Papa from 'papaparse';

import { read, utils, writeFile } from 'xlsx';

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
        // console.log("newItem", newItem);
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

    // search
    const [searchTerm, setSearchTerm] = useState('');
    function handleSearchTermChange(searchValue) {
        setSearchTerm(searchValue);
    }

    // sort
    const [sortedBy, setSortBy] = useState();
    function handleSortBy(option) {
        setSortBy(option);
    }
    const sortedList = [...items].sort((a, b) => {
        if (sortedBy) {
            const [sortByOption, sortOrder] = sortedBy.split("-");
            if (sortByOption === "name") {
                return sortOrder === "asc"
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            }
            if (sortByOption === "level") {
                return sortOrder === "asc" ? a.level - b.level : b.level - a.level;
            }
        }
        return 0;
    }).filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // export csv
    const ExportCSVButton = ({ data }) => {
        const headers = [
            { label: "Name", key: "name" },
            { label: "Level", key: "level" }
        ];

        const csvData = data.map(item => ({ name: item.name, level: item.level }));

        return (
            <CSVLink data={csvData} headers={headers} filename={'todoList.csv'}>
                Export CSV
            </CSVLink>
        );
    };

    // import csv
    function handleFileUpload(event) {
        const file = event.target.files[0];
        Papa.parse(file, {
            header: true,
            complete: (results) => {
                const newItems = results.data.map((item) => ({
                    name: item.Name,
                    level: item.Level,
                }));
                setItems((prevItems) => [...prevItems, ...newItems]);
            },
        });
    }

    // import export excel
    // const [items, setItems] = useState([]);

    const handleImport = ($event) => {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    setItems((prevItems) => [...prevItems, ...rows]);
                }
            }
            reader.readAsArrayBuffer(file);
        }
    }

    const handleExport = () => {
        // Tên các cột
        const headings = [[
            'name',
            'level',
        ]];
        // Loại bỏ cột id
        const filteredData = items.map(({ id, ...rest }) => rest);
        
        // Tạo workbook và worksheet
        const wb = utils.book_new();
        const ws = utils.json_to_sheet([]);

        utils.sheet_add_aoa(ws, headings);
        utils.sheet_add_json(ws, filteredData, { origin: 'A2', skipHeader: true });
        
        // Thêm worksheet vào workbook
        utils.book_append_sheet(wb, ws, 'List');

        // Xuất file
        writeFile(wb, 'ItemLists.csv');
    }

    return (
        <div className="container">
            <Title />
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <Search onSearchChange={handleSearchTermChange} />
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Sort sortedBy={sortedBy} onSortBy={handleSortBy} />
                </div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{float: "right"}}>
                    <button type="button" className="btn btn-info btn-block marginB10" onClick={handleShowModalAdd}>Add Item</button>&nbsp;
                    {/* <button type="button" className="btn btn-info btn-block marginB10">
                        <ExportCSVButton data={items} />
                    </button>&nbsp;
                    <input type="file" onChange={handleFileUpload} /> */}
                    <button type="button" className="btn btn-info btn-block marginB10" onClick={handleExport}>
                        Export
                    </button>
                    <input type="file" name="file" style={{display: "none"}} className="custom-file-input" id="inputGroupFile" onChange={handleImport}
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                    &nbsp;
                    <label className="custom-file-label btn btn-info btn-block marginB10" htmlFor="inputGroupFile">
                        Import
                    </label>
                </div>
            </div>
            <AppContext.Provider value={{ items, handleAdd, handleDelete, handleEdit, selectedItem, setSelectedItem, handleShowModalEdit, isEditing, sortedList }}>
                <ListItem />
                <FormCreadorUpdate show={showModalEdit} hide={handleCloseModalEdit} />
            </AppContext.Provider>
        </div>
    );
}

export default App;
