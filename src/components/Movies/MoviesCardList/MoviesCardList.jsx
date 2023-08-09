import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { moviesList } from "../../../utils/consts";

function MoviesCardList() {

    return (
        <section className="movies">
            <>
                <ul className="movies__list">
                    {moviesList.map((card, i) => (
                    <MoviesCard card={card} key={i} />
                    ))}
                </ul>
                <button className="movies__more-button" type="button">Ещё</button>
            </>
       </section>
    );
};

export default MoviesCardList;