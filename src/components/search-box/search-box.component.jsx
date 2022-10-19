
import { Component } from "react";
import './search-box.css';

const SearchBox = (props) => {

    return (
        <div>
            <h1 className="app-title"> Monster Rollodex</h1>
            <input
                className={`search-box ${props.className}`}
                type='search'
                placeholder={props.placeHolder}
                onChange={props.onChangeHandler} />
        </div>

    );
}
export default SearchBox;