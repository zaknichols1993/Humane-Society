import React from 'react';
import CatSummary from './CatSummary';

const CatList = ({cats}) => {
    return (
        <div className="cat-list section">
        { cats && cats.map(cat => {
            return(
                <CatSummary cat={cat} key={cat.id} />
            )
        })}
        </div>
    )
}

export default CatList;