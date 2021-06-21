import React from 'react';

function Result({ result }) {
    return (
        <div className="result">
            <img className="result__img" src={result.Poster} alt="" />
            <h3 className="result__title">{result.Title}</h3>
        </div>
    )

};

export default Result;