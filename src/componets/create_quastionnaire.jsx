import React, { useState, useEffect } from "react";
import { yearsBth } from "./utils/util";
import { mounthsBth } from "./utils/util";
import { countDays } from "./utils/util";
import { regExpName } from "./utils/util";
import { regExpEmail } from "./utils/util";
import { regExpPassword } from "./utils/util";
import { addCheckMarkOnInput } from "./utils/util";
import { changeClassNames } from "./utils/util";

export const CreateQuastionnaire = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const [formValid, setFormValid] = useState(false);
  const [days, setDays] = useState("");
  const [mounth, setMounth] = useState("");
  const [years, setYears] = useState("");
  const [selectError, setSelectError] = useState(undefined);

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
            <div className={addCheckMarkOnInput(nameError, "name")}>
              <input
                onInput={(e) => firstNameHandler(e)}
                value={firstName}
                className={changeClassNames(nameError, "name")}
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
                className={changeClassNames(selectError, "select")}
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
            <div className={addCheckMarkOnInput(passwordError, "password")}>
              <input
                onInput={(e) => passwordHendler(e)}
                value={password}
                className={changeClassNames(passwordError, "password")}
                type="password"
                name="password"
                placeholder="Минимум 8 символов"
              />
              {passwordError && (
                <div className="text_password_error">{passwordError}</div>
              )}
            </div>
          </label>
          <label className="label_mail_quastionnaire">
            Email:
            <div className={addCheckMarkOnInput(emailError, "mail")}>
              <input
                onInput={(e) => emailHendler(e)}
                value={email}
                className={changeClassNames(emailError, "mail")}
                type="mail"
                name="mail"
                placeholder="Введите свою почту"
              />
            </div>
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
