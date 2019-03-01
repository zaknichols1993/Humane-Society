import React from 'react';

const CatSummary = ({cat}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{cat.name}</span>
                <span className="card-title ">{cat.breed}</span>
                <span className="card-title ">{cat.gender}</span>
                <span className="card-title ">{cat.age}</span>
                <p>Posted By Jill Richardson</p>
                <p className="grey-text">March 1st</p>
            </div>
        </div>
    )
}

export default CatSummary;