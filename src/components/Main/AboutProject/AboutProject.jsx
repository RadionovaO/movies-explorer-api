import React from "react";
import './AboutProject.css';

function AboutProject() {

    return (
        <section className="about">
            <h1 className="about__title">О проекте</h1>
            <div className="about-container">

                <div className="about__info-block">
                    <h2 className="about__info-title">Дипломный проект включал 5 этапов</h2>
                    <p className="about__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__info-block">
                    <h2 className="about__info-title">На выполнение диплома ушло 5 недель</h2>
                    <p className="about__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

                <div className="about__scale">
                    <h3 className="about__scale-week about__scale-week_type_black">1 неделя</h3>
                    <h3 className="about__scale-week">4 недели</h3>
                    <p className="about__scale-caption">Back-end</p>
                    <p className="about__scale-caption">Front-end</p>
                </div>
            
        </section>
    );
};

export default AboutProject;