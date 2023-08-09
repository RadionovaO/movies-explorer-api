import React from "react";
import './Login.css';
import HeaderForm from "../Forms/HeaderForm/HeaderForm";
import ButtonForm from "../Forms/ButtonForm/ButtonForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Login() {

    const {values, handleChange, errors, isValid, setValues} = useFormAndValidation()

    return (
        <div className="login">
            <HeaderForm />
            <form className="login__form">

                <label className="login__label">E-mail</label>
                <input
                    className={`login__input ${!isValid && 'login__input_type_error'}`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Введите email"
                    value={values.email ?? ''}
                    required
                    onChange={handleChange}
                />
                <span className="login__input-error">{ errors.email ?? '' }</span>
                
                <label className="login__label">Пароль</label>
                <input
                    className={`login__input ${!isValid && 'login__input_type_error'}`}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Введите пароль"
                    minLength='6'
                    value={values.password ?? ''}
                    required
                    onChange={handleChange}
                />
                <span className="login__input-error">{ errors.password ?? '' }</span>
                
            </form>
            <ButtonForm />
        </div>
    );
};

export default Login;