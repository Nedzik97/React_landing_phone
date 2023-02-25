import React, { useState, useEffect } from "react";
import { yearsBth } from "./utils/util";
import { mounthsBth } from "./utils/util";
import { countDays } from "./utils/util";
import { regExpName } from "./utils/util";
import { regExpEmail } from "./utils/util";
import { regExpPassword } from "./utils/util";

export const CreateQuastionnaire = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [days, setDays] = useState("");
  const [mounth, setMounth] = useState("");
  const [years, setYears] = useState("");
  const [selectError, setSelectError] = useState("");

  const dataValidation = () => {
    const receivedDate = new Date(`/${mounth}/${days}/${years}`);
    const dataNow = new Date();
    const diffDate = Math.floor(
      (dataNow - receivedDate) / (1000 * 60 * 60 * 24 * 365)
    ).valueOf();
    if (diffDate >= 18 && diffDate <= 80) {
      setSelectError("");
    } else {
      setSelectError(" Укажите точную дату своего рождения");
    }
  };

  useEffect(() => {
    dataValidation();
  }, [dataValidation, days, mounth, years]);

  const handlerDays = (e) => {
    setDays(e.target.value);
  };

  const handlerMounth = (e) => {
    setMounth(e.target.value);
  };

  const handlerYears = (e) => {
    setYears(e.target.value);
  };

  const hendlerButton = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (nameError || emailError || passwordError || selectError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError, selectError]);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if (!e.target.value) {
      setNameError("Введите свое имя");
      return;
    }
    if (!regExpName.test(e.target.value)) {
      setNameError("Поле заполнено некорректно");
    } else {
      setNameError("");
    }
  };

  const emailHendler = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Введите свой Email");
      return;
    }
    if (!regExpEmail.test(e.target.value)) {
      setEmailError("Email заполнен некорректно");
    } else {
      setEmailError("");
    }
  };

  const passwordHendler = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Придумайте надежный пароль");
      return;
    }
    if (!regExpPassword.test(e.target.value)) {
      setPasswordError("Пароль должен содержать одну заглавную букву и цифру");
    } else {
      setPasswordError("");
    }
  };

  const changeClassNames = () => {
    if (!nameError) {
      return "";
    } else if (nameError) {
      return "input_name_invalid";
    } else {
      return "input_name_valid";
    }
  };

  return (
    <div className="container_create_quastionnaire">
      <main className="main_create_quastionnaire">
        <h1 className="title_create_quastionnaire">Создать анкету</h1>
        <p className="text_create_quastionnaire">
          Бистрая регистрация, чтобы перейти к общению
        </p>
        <form
          className="form_quastionnaire"
          action="#"
          method="post"
          name="create_quastionnaire"
        >
          <label className="label_name_quastionnaire">
            Имя:
            <div className="input_name_wrapper">
              <input
                onInput={(e) => firstNameHandler(e)}
                value={firstName}
                className={`input_name_quastionnaire ${changeClassNames()}`}
                type="text"
                name="name"
                placeholder="Введите имя"
              />
              {nameError && (
                <span className="text_name_error">{nameError}</span>
              )}
            </div>
          </label>
          <label className="label_name_quastionnaire">
            Дата рождения:
            <div className="input_wrapper" onChange={dataValidation}>
              <select
                onChange={(e) => handlerDays(e)}
                className={`select_quastionnaire ${
                  selectError ? "select_invalid" : "select_valid"
                }`}
                aria-label="Дата рождения"
                value={days}
              >
                <option value="" disabled>
                  ДД
                </option>
                {countDays.map((day, index) => (
                  <option value={day} key={index}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => handlerMounth(e)}
                className={`select_quastionnaire ${
                  selectError ? "select_invalid" : "select_valid"
                }`}
                aria-label="Месяц рождения"
                value={mounth}
              >
                <option value="" disabled>
                  MM
                </option>
                {mounthsBth.map((mounth, index) => (
                  <option value={mounth} key={index}>
                    {mounth}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => handlerYears(e)}
                className={`select_quastionnaire ${
                  selectError ? "select_invalid" : "select_valid"
                }`}
                aria-label="Год рождения"
                value={years}
              >
                <option value="" disabled>
                  ГГГГ
                </option>
                {yearsBth.map((year, index) => (
                  <option value={year} key={index}>
                    {year}
                  </option>
                ))}
              </select>
              {selectError && (
                <span className="select_error">{selectError}</span>
              )}
            </div>
          </label>
          <label className="label_password_quastionnaire">
            Придумайте пароль:
            <input
              onInput={(e) => passwordHendler(e)}
              value={password}
              className={`input_password_quastionnaire ${
                passwordError
                  ? "input_password_invalid"
                  : "input_password_valid"
              }`}
              type="password"
              name="password"
              placeholder="Минимум 8 символов"
            />
            {passwordError && (
              <div className="text_password_error">{passwordError}</div>
            )}
          </label>
          <label className="label_mail_quastionnaire">
            Email:
            <input
              onInput={(e) => emailHendler(e)}
              value={email}
              className={`input_mail_quastionnaire ${
                emailError ? "input_mail_invalidvalid" : "input_mail_valid"
              }`}
              type="mail"
              name="mail"
              placeholder="Введите свою почту"
            />
            {emailError && (
              <span className="text_email_error">{emailError}</span>
            )}
          </label>
          <button
            className="button_create_quastionnaire"
            onChange={(e) => hendlerButton(e)}
            disabled={!formValid}
            type="submit"
          >
            Создать
          </button>
          <label className="label_checkbox">
            Регистрируясь, я подтверждаю что мне исполнилось 18 лет. Я принимаю
            условия лицензионного соглашения, политики конфиденциальности,
            обработки персональных данных.
            <input
              className="input_checkbox"
              type="checkbox"
              name="proof_of_age"
            />
            <span className="checkbox_mark"></span>
          </label>
        </form>
      </main>
    </div>
  );
};
