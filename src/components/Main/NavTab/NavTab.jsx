import React from "react";
import { Link } from "react-scroll";
import './NavTab.css';

function NavTab() {
    
    return (
        <nav className="nav-tab">
            <ul className="nav-tab__links">
                <li>
                    <Link
                        to='about'
                        className="nav-tab__link"
                        smooth={true}
                        duration={500}>
                        О проекте
                    </Link>
                </li>
                <li>
                    <Link
                        to='techs'
                        className="nav-tab__link"
                        smooth={true}
                        duration={500}>
                        Технологии
                    </Link>
                </li>
                <li>
                    <Link
                        to='student'
                        className="nav-tab__link"
                        smooth={true}
                        duration={500}>
                        Студент
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavTab;