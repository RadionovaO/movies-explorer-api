import React from "react";
import { Link, useLocation } from "react-router-dom";
import './NavMovie.css';
import HamburgerMenu from "../../HamburgerMenu/HamburgerMenu";

function NavMovie() {

    const location = useLocation();

    return (
        <>
        <div className="nav-movie">
            <ul className="nav-movie__list">
                <li>
                    <Link className={location.pathname === "/movies" ? "nav-movie__link_active" : "nav-movie__link"} to='/movies'>Фильмы</Link>
                </li>
                <li>
                    <Link className={location.pathname === "/saved-movies" ? "nav-movie__link_active" : "nav-movie__link"} to='/saved-movies'>Сохранённые фильмы</Link>
                </li>
           </ul>
           
            <Link className="nav-movie__button" to={'/profile'}>
            </Link>

            </div>
            <HamburgerMenu />
        </>
    );
};

export default NavMovie;