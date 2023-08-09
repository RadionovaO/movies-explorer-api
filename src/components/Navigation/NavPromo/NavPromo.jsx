import React from "react";
import { Link } from "react-router-dom";
import './NavPromo.css'

function NavPromo() {

    return (
        <div className="nav-promo">
            <Link to={'/signup'} className="nav-promo__link">Регистрация</Link>
            <Link to={'/signin'} className="nav-promo__button">Войти</Link>
        </div>
    );
};

export default NavPromo;