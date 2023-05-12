import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function Sort(props) {
    const [selectedOption, setSelectedOption] = useState();
    
    function handleOptionSelect(sortType, sortOrder) {
        const option = `${sortType}-${sortOrder}`;
        props.onSortBy(option);
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Sort by
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleOptionSelect('name', 'asc')}>Name ASC</Dropdown.Item>
                <Dropdown.Item onClick={() => handleOptionSelect('name', 'desc')}>Name DESC</Dropdown.Item>
                <Dropdown.Item onClick={() => handleOptionSelect('level', 'asc')}>Level ASC</Dropdown.Item>
                <Dropdown.Item onClick={() => handleOptionSelect('level', 'desc')}>Level DESC</Dropdown.Item>
            </Dropdown.Menu>&nbsp;
            {selectedOption && (
                <span className="label label-success label-medium">
                    {selectedOption.sortType} {selectedOption.sortOrder}
                </span>
            )}
        </Dropdown>
    )
}

export default Sort;