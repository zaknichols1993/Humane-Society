import React from 'react';

const DogDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title ">Dog Name {id}</span>
                    <p>lorem asdiofjasdofijasdfkoj askdfj ldksadlf jwkg jwqoghqrhigqrg</p>
                </div>
                <div className="card-action lighten-4 grey-text">
                    <p>Posted by Jill Richardson</p>
                    <p className="grey-text">March 1st</p>
                </div>
            </div>
        </div>
    )
}

export default DogDetails;
