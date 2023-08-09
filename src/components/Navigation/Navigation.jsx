import React from "react";
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import NavPromo from './NavPromo/NavPromo';
import NavMovie from "./NavMovie/NavMovie";

function Navigation() {
    const location = useLocation();

    return (
        <nav className="navigate">
            <Link to={'/'}>
                <img className="navigate__logo" src={logo} alt="Логотип" />
            </Link>
            {location.pathname === '/' ? <NavPromo /> : <NavMovie />}
            
        </nav>
    );
};

export default Navigation;