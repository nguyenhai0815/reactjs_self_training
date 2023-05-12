import React, { Component, useContext } from "react";
import { ListContext, AppContext } from './ListContext';

function Item(props) {
    const { handleDelete, handleEdit, handleShowModalEdit } = useContext(AppContext);

    const levelInfor = {
        0: {
            className: 'label label-info',
            label: 'Low',
        },
        1: {
            className: 'label label-warning',
            label: 'Medium',
        },
        2: {
            className: 'label label-danger',
            label: 'Hight',
        }
    }
    
    const level = props.data.level;
    const { label, className } = levelInfor[level];

    // handle Delete Item
    const handleButtonDelelte = () => {
        const itemId = props.data.id; 
        handleDelete(itemId, props.data.name); 
    };

    // handle edit item
    const handleItemClick = (item) => {
        handleShowModalEdit();
        handleEdit(item);
    };

    return (
        <tr onClick={() => handleItemClick(props.data)}>
            <td className="text-center">{props.index + 1}</td>
            <td>{ props.data.name }</td>
            <td className="text-center"><span className={className}>{ label }</span></td>
            {/* <td className="text-center">
                <img style={{ width: '100px' }} src={process.env.PUBLIC_URL + props.data.thumb} alt="example" />
            </td> */}
            <td>
                <button type="button" className="btn btn-warning btn-sm" onClick={() => handleItemClick(props.data)}>Edit</button>&nbsp;
                <button type="button" className="btn btn-danger btn-sm" onClick={handleButtonDelelte}>Delete</button>
            </td>
        </tr>
    )
}

export default Item;