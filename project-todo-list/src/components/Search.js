import React, { Component, useState } from "react";

function Search(props) {
    const [searchValue, setSearchValue] = useState("");

    function handleSearchChange(event) {
        setSearchValue(event.target.value);
        if (props.onSearchChange) {
            props.onSearchChange(event.target.value);
        }
    }

    return(
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search item name" onChange={handleSearchChange} />
            <span className="input-group-btn">
                <button className="btn btn-info" type="button">Clear</button>
            </span>
        </div>
    )
}

export default Search;