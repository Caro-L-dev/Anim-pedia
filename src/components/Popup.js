import React from 'react';


function Popup({ selected, closePopup }) {
  return(
    <section className="popup">
        <div className="popup__content">
            <h2 className="popup__content__title">{ selected.Title } <span className="popup__content__title__span">({ selected.Year })</span></h2>
            <p className="popup__content__rating">Rating: { selected.imdbRating }</p>
            <div className="popup__content__plot">
                <img className="popup__content__plot__img" src={ selected.Poster } alt="" />
                <p className="popup__content__plot__text">{ selected.Plot }</p>
            </div>
            <button className="popup__button--close" onClick={closePopup}>Close</button>
        </div>
    </section>
   )

 }

export default Popup;