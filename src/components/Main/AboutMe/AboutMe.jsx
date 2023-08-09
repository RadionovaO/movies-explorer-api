import React from "react";
// import { Link } from "react-router-dom";
import studentPhoto from '../../../images/student.jpg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="student">
        <h1 className="student__title">Студент</h1>
            <div className="student-container">
                <div className="student__info">
                <h3 className="student__name">Виталий</h3>
                <p className="student__work">Фронтенд-разработчик, 30 лет</p>
                <p className="student__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a href='https://github.com/RadionovaO' className="student__link" target="blank">Github</a>
            </div>
                <img className="student__photo" src={studentPhoto} alt="Фото"></img>
                </div>
        </section>
    );
};

export default AboutMe;