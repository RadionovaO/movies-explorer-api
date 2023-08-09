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
            <button className="card__save" type="button">Сохранить</button>
            <span className="card__save-active"></span>
        </div>
    );
};

export default MoviesCard;