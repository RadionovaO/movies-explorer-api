import React from "react";
import { Link, useLocation } from "react-router-dom";
import './HamburgerMenu.css';

function HamburgerMenu() {

    const location = useLocation();

    return (
        <nav className="hamburger-menu">
            <input type="checkbox" id="checkbox" className="hamburger-menu__checkbox" />
            <label htmlFor="checkbox" className="hamburger-menu__btn"></label>
            <div className="hamburger-menu__container">
                <ul className="hamburger-menu__list">
                    <li className="hamburger-menu__item"><a href="/" className={location.pathname === "/" ? "hamburger-menu__link_active" : "hamburger-menu__link"}>Главная</a></li>
                    <li className="hamburger-menu__item"><a href="/movies" className={location.pathname === "/movies" ? "hamburger-menu__link_active" : "hamburger-menu__link"}>Фильмы</a></li>
                    <li className="hamburger-menu__item"><a href="/saved-movies" className={location.pathname === "/saved-movies" ? "hamburger-menu__link_active" : "hamburger-menu__link"}>Сохранённые фильмы</a></li>
                </ul>
                <Link className="hamburger-menu__button" to={'/profile'}>
            </Link>
            </div>
        </nav>
    );
};

export default HamburgerMenu;