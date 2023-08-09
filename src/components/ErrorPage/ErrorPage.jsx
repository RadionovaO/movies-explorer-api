import React from "react";
import { useNavigate } from "react-router-dom";
import './ErrorPage.css';

function ErrorPage() {

    const navigate = useNavigate();

    return (
        <section className="error">
            <h1 className="error__title">404</h1>
            <p className="error__subtitle">Страница не найдена
            </p>
            <button className="error__button" type="button" onClick={() => navigate(-1)}>Назад</button>
        </section>
    );
};

export default ErrorPage;