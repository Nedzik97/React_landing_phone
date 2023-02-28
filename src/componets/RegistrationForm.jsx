import React, { useState, useEffect } from "react";
import { useNameValidation } from "../hooks/useNameValidation";
import { usePasswordValidation } from "../hooks/usePasswordValidatation";
import { useEmailValidation } from "../hooks/useEmailValidation";
import { useDateValidation } from "../hooks/useDateValidation";
import { yearsBirth, daysBirth, monthsBirth, changeClassNames } from "../util";

export const RegistrationForm = () => {
  const { name, setName, nameError } = useNameValidation();
  const { password, setPassword, passwordError } = usePasswordValidation();
  const { email, setEmail, emailError } = useEmailValidation();
  const {
    days,
    setDays,
    month,
    setMonth,
    years,
    setYears,
    selectError,
    dateValidation,
  } = useDateValidation();
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError || selectError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError, selectError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      // sendForm() if we have endoint to send data
    }
  };

  return (
    <div className="container-regisratation-form">
      <main className="main-registration-form">
        <h1 className="title-registration-form">Создать анкету</h1>
        <p className="text-form">
          Бистрая регистрация, чтобы перейти к общению
        </p>
        <form
          className="registration-form"
          action="#"
          method="post"
          name="create"
        >
          <label className="label-name">
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
                  "name",
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
          <label className="label-date">
            Дата рождения:
            <div className="input-wrapper" onChange={dateValidation}>
              <select
                onChange={(e) => setDays(e.target.value)}
                className={changeClassNames(
                  selectError,
                  "select",
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
                onChange={(e) => setMonth(e.target.value)}
                className={changeClassNames(
                  selectError,
                  "select",
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
                  "select",
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
          <label className="label-password">
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
                  "password",
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
          <label className="label-mail">
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
                  "mail",
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
            className="submit-button"
            onChange={(e) => handleSubmit(e)}
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
