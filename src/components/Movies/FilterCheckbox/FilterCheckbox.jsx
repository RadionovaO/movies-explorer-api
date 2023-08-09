import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {

    return (
        <div className="checkbox">
            <input className="checkbox__input" type="checkbox"></input>
            <p className="checkbox__title">Короткометражки</p>
        </div>
    );
};

export default FilterCheckbox;