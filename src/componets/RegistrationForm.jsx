import React, { useState, useEffect } from "react";
import { useNameValidate } from "./UseNameValidate";
import { usePasswordValidate } from "./UsePasswordValidate";
import { yearsBirth, daysBirth, monthsBirth, changeClassNames } from "../util";
import { useEmailValidate } from "./UseEmailValidate";
import { useSelectValidate } from "./UseSelectValidate";

export const RegistrationForm = () => {
  const { name, setName, nameError, nameHandler } = useNameValidate();
  const { password, setPassword, passwordError, passwordHendler } =
    usePasswordValidate();
  const { email, setEmail, emailError, emailHendler } = useEmailValidate();
  const {
    days,
    setDays,
    month,
    setMounth,
    years,
    setYears,
    dateValidation,
    selectError,
  } = useSelectValidate();
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    dateValidation();
  }, [dateValidation, days, month, years]);

  useEffect(() => {
    nameHandler();
  }, [nameHandler, name, nameError]);

  useEffect(() => {
    passwordHendler();
  }, [passwordHendler, password, passwordError]);

  useEffect(() => {
    emailHendler();
  }, [emailHendler, email, emailError]);

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
                onInput={(e) => setName(e.target.value)}
                value={name}
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
            <div className="input-wrapper" onChange={dateValidation}>
              <select
                onChange={(e) => setDays(e.target.value)}
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
                onChange={(e) => setMounth(e.target.value)}
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
                onChange={(e) => setYears(e.target.value)}
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
                onInput={(e) => setPassword(e.target.value)}
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
                onInput={(e) => setEmail(e.target.value)}
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
