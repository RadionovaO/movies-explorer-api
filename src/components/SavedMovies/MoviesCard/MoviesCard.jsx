import React from "react";
import './MoviesCard.css';
import cardImage from '../../../images/card.png'

function MoviesCard(card) {

    return (
        <div className="card">
            <div className="card__description">
                <h2 className="card__name">название</h2>
                <p className="card__duration">27 мин</p>
            </div>
            <img className="card__image" src={cardImage} alt='постер' />
            <button className="card__delete" type="button"></button>
        </div>
    );
};

export default MoviesCard;