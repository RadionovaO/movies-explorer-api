import React from "react";
import './Techs.css';

function Techs() {

    return (
        <section className="techs">
            <h1 className="techs__title">Технологии</h1>
            <div className="techs__container">
                <h4 className="techs__tech-title">7 технологий</h4>
                <p className="techs__caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__list">
                    <li className="techs__list-element">HTML</li>
                    <li className="techs__list-element">CSS</li>
                    <li className="techs__list-element">JS</li>
                    <li className="techs__list-element">React</li>
                    <li className="techs__list-element">Git</li>
                    <li className="techs__list-element">Express.js</li>
                    <li className="techs__list-element">MongoDB</li>
            </ul>
            </div> 
        </section>
    );
};

export default Techs;