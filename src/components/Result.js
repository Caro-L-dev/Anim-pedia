import React from 'react';

function Result({ result, openPopup }) {
    return (
        <div className="result" onClick={() => openPopup(result.Mal_ID)} >
            <img className="result__img" src={result.Poster} alt="" />
            <h3 className="result__title">{result.Title}</h3>
        </div>
    )

};

export default Result;