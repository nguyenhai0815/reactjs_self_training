import React, { Component } from "react";
import Item from './Item';

function ListItem({ items, onDelete }) {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">List Item</div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th style={{ width: '10%' }} className="text-center">#</th>
                        <th>Name</th>
                        <th style={{ width: '15%' }} className="text-center">Level</th>
                        <th style={{ width: '15%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { items.length ?
                        (items.map((data, index) => (
                            <Item key={index} data={data} index={index} onDelete={onDelete} />
                        ))) : 
                        <tr>
                            <td colSpan="4" className="text-center">  
                                <h4>No Item</h4>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
    
export default ListItem;
