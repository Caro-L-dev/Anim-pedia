import React from 'react';
import YoutubeEmbed from "./YoutubeEmbed";


function Popup({ selected, closePopup }) {
  return(
    <section className="popup">
        <div className="popup__content">

        <button className="popup__button--close" onClick={closePopup}>X</button>
            <h2 className="popup__content__title">{ selected.Title } / {selected.JapTitle}
                <span className="popup__content__title__span"> {selected.Type}</span>
            </h2>

                <div className="popup__content__synopsis">
                    <img className="popup__content__synopsis__img" src={ selected.Poster } alt="" />

                    <div className="popup__content__infos">
                        <p className="popup__content__rating">{ selected.Rating }</p>
                        <p> {selected.Episodes} episode(s).</p>
                        <p> { selected.Duration}.</p>
                        <p> Score: {selected.Score}.</p>
                        <p> { selected.Status }. </p>
                        <p> Genre: { selected.Genres }</p>
                        <p>Dates : {selected.Year} </p>
                    </div>

                    <p className="popup__content__synopsis__text">{ selected.Synopsis }</p>
                </div>
                <div className="trailer"><YoutubeEmbed url={selected.Trailer} /></div>

        </div>

            
           
        
    </section>
   )

 }

export default Popup;