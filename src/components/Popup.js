import React from 'react';


function Popup({ selected, closePopup }) {
  return(
    <section className="popup">
        <div className="popup__content">
            <h2 className="popup__content__title">{ selected.Title } 
                <span className="popup__content__title__span"> {selected.Type}</span>
            </h2>
            <p className="popup__content__rating">Rated:{ selected.Rated }</p>
            <p>Dates : {selected.Year} </p>
            <p> Episodes number: {selected.episodes}</p>
            <p> Score: {selected.Score}</p>
            <p> Status: { selected.Status } </p>
            <p>Genre { selected.Genre } </p>

            <div className="popup__content__synopsis">
                <img className="popup__content__synopsis__img" src={ selected.Poster } alt="" />
                <p className="popup__content__synopsis__text">{ selected.Synopsis }</p>
                
            </div>
            <button className="popup__button--close" onClick={closePopup}>Close</button>
        </div>
    </section>
   )

 }

export default Popup;