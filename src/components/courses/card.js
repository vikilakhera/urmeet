import React from 'react';
import { courseInfo } from './courseInfo';
import '../common.css';

function Card () {
    return(
        <>
            {
                courseInfo.map(course => {
                    return(
                        <div className="card-container fadeInUp">
                            <div className="img-container">
                                <img src={course.image} alt={course.name} />
                            </div>
                            <div className="img-info">
                                <div className="course-name">{course.name}</div>
                                <div className="price-container">
                                    <div className="by">by <strong>{course.by}</strong></div>
                                    <div className="price">{course.price}</div>
                                </div>
                                <div className="btn-container">
                                    {
                                        course.labels.map((label, index) =>{
                                            return(
                                                <button className={`btn-info btn-color-${index}`}>{label}</button>
                                            )
                                        })
                                    }
                                </div>
                                <div className="course-info">{course.description}</div>
                                <button className="buy-btn">Buy Now</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card;