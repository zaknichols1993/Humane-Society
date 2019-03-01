import React from 'react';

const CatDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title ">Cat Name {id}</span>
                    <p>This is some info about a cat.</p>
                </div>
                <div className="card-action lighten-4 grey-text">
                    <p>Posted by Jill Richardson</p>
                    <p className="grey-text">March 1st</p>
                </div>
            </div>
        </div>
    )
}

export default CatDetails;
