import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../images/logo.svg";
import './HeaderForm.css';

function HeaderForm() {
    const location = useLocation(); 
    return (
        <header className="header-form">
            <Link to={'/'}>
                <img className="header-form__logo" src={logo} alt="Логотип" />
            </Link>
            <h1 className="header-form__title">{ location.pathname === '/signup' ? 'Добро пожаловать!' : 'Рады видеть!' }</h1>
        </header>
    );
};

export default HeaderForm;