import cx from "classnames";
import { useState } from "react";
import { useNameValidation } from "../../hooks/useNameValidation";
import { usePasswordValidation } from "../../hooks/usePasswordValidatation";
import { useEmailValidation } from "../../hooks/useEmailValidation";
import { useDateValidation } from "../../hooks/useDateValidation";
import { yearsBirth, daysBirth, monthsBirth } from "../../util";
import { checkedValidField } from "../../util";
import styles from "./Registration-form.module.scss";

export const RegistrationForm = () => {
  const [checked, setChecked] = useState(false);
  const { name, setName, nameError, isNameValid } = useNameValidation();
  const { password, setPassword, passwordError, isPasswordValid } =
    usePasswordValidation();
  const { email, setEmail, emailError, isEmailValid } = useEmailValidation();
  const {
    days,
    setDays,
    month,
    setMonth,
    years,
    setYears,
    selectError,
    dateValidation,
    isDateValid,
  } = useDateValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const isEnableButton =
    !!isNameValid &&
    !!isDateValid &&
    !!isPasswordValid &&
    !!isEmailValid &&
    !!checked;

  return (
    <main className={styles.mainRegistrationForm}>
      <h1 className={styles.titleRegistrationForm}>Создать анкету</h1>
      <p className={styles.textForm}>
        Бистрая регистрация, чтобы перейти к общению
      </p>
      <form
        className={styles.RegistrationForm}
        action="#"
        method="post"
        name="create"
      >
        <label className={styles.labelName}>
          Имя:
          <div
            className={cx(styles.nameWrapper, {
              [styles.nameWrapperValid]: checkedValidField(name) && isNameValid,
              [styles.nameWrapperInvalid]:
                checkedValidField(name) && !isNameValid,
            })}
          >
            <input
              onInput={(e) => setName(e.target.value)}
              value={name}
              className={cx(styles.name, {
                [styles.nameValid]: checkedValidField(name) && isNameValid,
                [styles.nameInvalid]: checkedValidField(name) && !isNameValid,
              })}
              type="text"
              name="name"
              placeholder="Введите имя"
            />
            {nameError && (
              <span className={styles.textNameError}>{nameError}</span>
            )}
          </div>
        </label>
        <label className={styles.labelDate}>
          Дата рождения:
          <div className={styles.selectWrapper} onChange={dateValidation}>
            <select
              onChange={(e) => setDays(e.target.value)}
              className={cx(styles.select, {
                [styles.selectValid]: checkedValidField(days) && isDateValid,
                [styles.selectInvalid]: checkedValidField(days) && !isDateValid,
              })}
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
              className={cx(styles.select, {
                [styles.selectValid]: checkedValidField(month) && isDateValid,
                [styles.selectInvalid]:
                  checkedValidField(month) && !isDateValid,
              })}
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
              className={cx(styles.select, {
                [styles.selectValid]: checkedValidField(years) && isDateValid,
                [styles.selectInvalid]:
                  checkedValidField(years) && !isDateValid,
              })}
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
              <span className={styles.selectError}>{selectError}</span>
            )}
          </div>
        </label>
        <label className={styles.labelPassword}>
          Придумайте пароль:
          <div
            className={cx(styles.passwordWrapper, {
              [styles.passwordWrapperValid]:
                checkedValidField(password) && isPasswordValid,
              [styles.passwordWrapperInvalid]:
                checkedValidField(password) && !isPasswordValid,
            })}
          >
            <input
              onInput={(e) => setPassword(e.target.value)}
              value={password}
              className={cx(styles.password, {
                [styles.passwordValid]:
                  checkedValidField(password) && isPasswordValid,
                [styles.passwordInvalid]:
                  checkedValidField(password) && !isPasswordValid,
              })}
              type="password"
              name="password"
              placeholder="Минимум 8 символов"
            />
            {passwordError && (
              <div className={styles.textPasswordError}>{passwordError}</div>
            )}
          </div>
        </label>
        <label className={styles.labelMail}>
          Email:
          <div
            className={cx(styles.mailWrapper, {
              [styles.mailWrapperValid]:
                checkedValidField(email) && isEmailValid,
              [styles.mailWrapperInvalid]:
                checkedValidField(email) && !isEmailValid,
            })}
          >
            <input
              onInput={(e) => setEmail(e.target.value)}
              value={email}
              className={cx(styles.mail, {
                [styles.mailValid]: checkedValidField(email) && isEmailValid,
                [styles.mailInvalid]: checkedValidField(email) && !isEmailValid,
              })}
              type="mail"
              name="mail"
              placeholder="Введите свою почту"
            />
          </div>
          {emailError && (
            <span className={styles.textEmailError}>{emailError}</span>
          )}
        </label>
        <button
          className={styles.submitButton}
          onChange={(e) => handleSubmit(e)}
          disabled={!isEnableButton}
          type="submit"
        >
          Создать
        </button>
        <label className={styles.labelCheckbox}>
          Регистрируясь, я подтверждаю что мне исполнилось 18 лет. Я принимаю
          условия лицензионного соглашения, политики конфиденциальности,
          обработки персональных данных.
          <input
            onChange={() => {
              setChecked(!checked);
            }}
            className={styles.inputCheckbox}
            type="checkbox"
            name="proof-of-age"
            checked={checked}
          />
          <span className={styles.checkboxMark}></span>
        </label>
      </form>
    </main>
  );
};
