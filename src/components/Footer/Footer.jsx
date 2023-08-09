import React from "react";
import './Footer.css';

function Footer() {

    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__copyright-container">
                <p className="footer__copyright">© 2023</p>
                <ul className="footer__list">
                    <li>
                        <a href="https://practicum.yandex.ru" className="footer__link" target="blank">Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a href="https://github.com/RadionovaO" className="footer__link" target="blank">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;