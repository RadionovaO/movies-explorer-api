import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Profile() {

    return (
        <div className="profile">
            <Header />
            <div className="profile__container">
            <h2 className="profile__title">Привет, Виталий</h2>
            <form className="profile__form">
                <label className="profile__label" for="name">Имя
                    <input className="profile__input"
                        id="name"
                        type="text"
                        placeholder="Ведите имя"
                    />
                </label>
                <label className="profile__label">E-mail
                    <input className="profile__input"
                        type="text"
                        placeholder="Ведите E-mail"
                    />
                </label>
                </form>
                <button className="profile__edit-button" type="button">Редактировать</button>
                <Link className="profile__link-signout" to='/'>Выйти из аккаунта</Link>
            </div>
        </div>
    );
};

export default Profile;