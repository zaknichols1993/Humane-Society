import React from 'react';
import DogSummary from './DogSummary';

const DogList = ({dogs}) => {
    return (
        <div className="dog-list section">
        { dogs && dogs.map(dog => {
            return(
                <DogSummary dog={dog} key={dog.id} />
            )
        })}
        </div>
    )
}

export default DogList;