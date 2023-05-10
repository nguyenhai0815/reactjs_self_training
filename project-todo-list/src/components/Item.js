import React, { Component } from "react";

function Item(props) {
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
    const handleButtonClick = () => {
        const itemId = props.data.id; 
        props.onDelete(itemId, props.data.name); 
    };

    return (
        <tr>
            <td className="text-center">{props.index + 1}</td>
            <td>{ props.data.name }</td>
            <td className="text-center"><span className={className}>{ label }</span></td>
            <td>
                <button type="button" className="btn btn-warning btn-sm">Edit</button>&nbsp;
                <button type="button" className="btn btn-danger btn-sm" onClick={handleButtonClick}>Delete</button>
            </td>
        </tr>
    )
}

export default Item;