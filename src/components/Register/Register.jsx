import React from "react";
import './Register.css';
import HeaderForm from "../Forms/HeaderForm/HeaderForm";
import ButtonForm from "../Forms/ButtonForm/ButtonForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Register() {

    const {values, handleChange, errors, isValid, setValues} = useFormAndValidation()

    return (
        <div className="register">
            <HeaderForm />
            <form className="register__form">
                <label className="register__label">Имя</label>
                <input
                    className={`register__input ${!isValid && 'register__input_type_error'}`}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Введите имя"
                    value={values.name ?? ''}
                    required
                    onChange={handleChange}
                /> 
                <span className="register__input-error">{ errors.name ?? '' }</span>
                
                <label className="register__label">E-mail</label>
                <input
                    className={`register__input ${!isValid && 'register__input_type_error'}`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Введите email"
                    value={values.email ?? ''}
                    required
                    onChange={handleChange}
                />
                <span className="register__input-error">{ errors.email ?? '' }</span>
                
                <label className="register__label">Пароль</label>
                <input
                    className={`register__input ${!isValid && 'register__input_type_error'}`}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Введите пароль"
                    minLength='6'
                    value={values.password ?? ''}
                    required
                    onChange={handleChange}
                />
                <span className="register__input-error">{ errors.password ?? '' }</span>

            </form>
            <ButtonForm />
        </div>
    );
};

export default Register;