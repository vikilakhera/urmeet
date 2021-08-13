import React from 'react';
import Card from './card';
import "../common.css";

function CourseMenu () {
    return(
        <>
            <div className="menu-header">
                <div className="menu-heading">Popular Courses</div>
                <div>
                    <button className="lunch-btn toggle">Paid</button>
                    <button className="dinner-btn toggle">Unpaid</button>
                </div>
            </div>
            <div className="menu-container">
                <Card />
            </div>
            <div className="menu-footer">
                <button className="request-btn">Load More</button>
            </div>
        </>
    )
}

export default CourseMenu;