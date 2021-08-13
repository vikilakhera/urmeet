import React from 'react';
import Dropdown from './dropdown';
import coursezz from "../img/coursezz.JPG";

function Header() {
    return(
        <div className="header-container">
            <div className="logo">
                <a href="#"><img height="38" width="121" src={coursezz} alt="Coursezz logo" /></a>
            </div>
            <div className="nav-menu">
                <a href="#">All Courses</a>
                <a className="active-course" href="#">Popular Courses</a>
                <a href="#">Top rated</a>
                <Dropdown />
            </div>
        </div>
    )
}

export default Header;