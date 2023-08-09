import React from "react";
import { Link } from "react-router-dom";
import './Portfolio.css';

function Portfolio() {

    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__element">
                    <Link className="portfolio__link">Статичный сайт</Link>
                    <button className="portfolio__button">↗</button>
                </li>
                <li className="portfolio__element">
                    <Link className="portfolio__link">Адаптивный сайт</Link>
                    <button className="portfolio__button">↗</button>
                </li>
                <li className="portfolio__element">
                    <Link className="portfolio__link">Одностраничное приложение</Link>
                    <button className="portfolio__button">↗</button>
                </li>
            </ul>
        </div>
    );
};

export default Portfolio;