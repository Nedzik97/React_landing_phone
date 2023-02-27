import React, { useState, useEffect } from "react";
import {
  yearsBirth,
  daysBirth,
  monthsBirth,
  regExpName,
  regExpEmail,
  regExpPassword,
  changeClassNames,
} from "../util";

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const [selectError, setSelectError] = useState(undefined);
  const [formValid, setFormValid] = useState(false);
  const [days, setDays] = useState("");
  const [month, setMounth] = useState("");
  const [years, setYears] = useState("");

  const dataValidation = () => {
    const receivedDate = new Date(`/${month}/${days}/${years}`);
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
  }, [dataValidation, days, month, years]);

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
    <div className="container-create-quastionnaire">
      <main className="main-create-quastionnaire">
        <h1 className="title-create-quastionnaire">Создать анкету</h1>
        <p className="text-create-quastionnaire">
          Бистрая регистрация, чтобы перейти к общению
        </p>
        <form
          className="form-quastionnaire"
          action="#"
          method="post"
          name="create-quastionnaire"
        >
          <label className="label-name-quastionnaire">
            Имя:
            <div
              className={changeClassNames(
                nameError,
                "name-wrapper",
                "valid",
                "invalid"
              )}
            >
              <input
                onInput={(e) => firstNameHandler(e)}
                value={firstName}
                className={changeClassNames(
                  nameError,
                  "name-quastionnaire",
                  "valid",
                  "invalid"
                )}
                type="text"
                name="name"
                placeholder="Введите имя"
              />
              {nameError && (
                <span className="text-name-error">{nameError}</span>
              )}
            </div>
          </label>
          <label className="label-name-quastionnaire">
            Дата рождения:
            <div className="input-wrapper" onChange={dataValidation}>
              <select
                onChange={(e) => handlerDays(e)}
                className={changeClassNames(
                  selectError,
                  "select-quastionnaire",
                  "valid",
                  "invalid"
                )}
                aria-label="Дата рождения"
                value={days}
              >
                <option value="" disabled>
                  ДД
                </option>
                {daysBirth.map((day, index) => (
                  <option value={day} key={index}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => handlerMounth(e)}
                className={changeClassNames(
                  selectError,
                  "select-quastionnaire",
                  "valid",
                  "invalid"
                )}
                aria-label="Месяц рождения"
                value={month}
              >
                <option value="" disabled>
                  MM
                </option>
                {monthsBirth.map((mounth, index) => (
                  <option value={mounth} key={index}>
                    {mounth}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => handlerYears(e)}
                className={changeClassNames(
                  selectError,
                  "select-quastionnaire",
                  "valid",
                  "invalid"
                )}
                aria-label="Год рождения"
                value={years}
              >
                <option value="" disabled>
                  ГГГГ
                </option>
                {yearsBirth.map((year, index) => (
                  <option value={year} key={index}>
                    {year}
                  </option>
                ))}
              </select>
              {selectError && (
                <span className="select-error">{selectError}</span>
              )}
            </div>
          </label>
          <label className="label-password-quastionnaire">
            Придумайте пароль:
            <div
              className={changeClassNames(
                passwordError,
                "password-wrapper",
                "valid",
                "invalid"
              )}
            >
              <input
                onInput={(e) => passwordHendler(e)}
                value={password}
                className={changeClassNames(
                  passwordError,
                  "password-quastionnaire",
                  "valid",
                  "invalid"
                )}
                type="password"
                name="password"
                placeholder="Минимум 8 символов"
              />
              {passwordError && (
                <div className="text-password-error">{passwordError}</div>
              )}
            </div>
          </label>
          <label className="label-mail-quastionnaire">
            Email:
            <div
              className={changeClassNames(
                emailError,
                "mail-wrapper",
                "valid",
                "valid"
              )}
            >
              <input
                onInput={(e) => emailHendler(e)}
                value={email}
                className={changeClassNames(
                  emailError,
                  "mail-quastionnaire",
                  "valid",
                  "invalid"
                )}
                type="mail"
                name="mail"
                placeholder="Введите свою почту"
              />
            </div>
            {emailError && (
              <span className="text-email-error">{emailError}</span>
            )}
          </label>
          <button
            className="button-create-quastionnaire"
            onChange={(e) => hendlerButton(e)}
            disabled={!formValid}
            type="submit"
          >
            Создать
          </button>
          <label className="label-checkbox">
            Регистрируясь, я подтверждаю что мне исполнилось 18 лет. Я принимаю
            условия лицензионного соглашения, политики конфиденциальности,
            обработки персональных данных.
            <input
              className="input-checkbox"
              type="checkbox"
              name="proof-of-age"
            />
            <span className="checkbox-mark"></span>
          </label>
        </form>
      </main>
    </div>
  );
};
