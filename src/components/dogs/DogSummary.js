import React from 'react';

const DogSummary = ({dog}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{dog.name}</span>
                <span className="card-title ">{dog.breed}</span>
                <span className="card-title ">{dog.gender}</span>
                <span className="card-title ">{dog.age}</span>
                <p>Posted By Jill Richardson</p>
                <p className="grey-text">March 1st</p>
            </div>
        </div>
    )
}

export default DogSummary;