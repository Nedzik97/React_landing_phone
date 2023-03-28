import cx from "classnames";
import { useNameValidation } from "../../hooks/useNameValidation";
import { usePasswordValidation } from "../../hooks/usePasswordValidatation";
import { useEmailValidation } from "../../hooks/useEmailValidation";
import { useDateValidation } from "../../hooks/useDateValidation";
import { yearsBirth, daysBirth, monthsBirth } from "../../util";
import styles from "./Registration-form.module.scss";

export const RegistrationForm = () => {
  const { name, setName, nameError, isValidateName } = useNameValidation();
  const { password, setPassword, passwordError, isValidatePassword } =
    usePasswordValidation();
  const { email, setEmail, emailError, isValidateEmail } = useEmailValidation();
  const {
    days,
    setDays,
    month,
    setMonth,
    years,
    setYears,
    selectError,
    dateValidation,
    isValidateDate,
  } = useDateValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const isButtonDisable =
    !!isValidateName &&
    !!isValidateDate &&
    !!isValidatePassword &&
    !!isValidateEmail;
  console.log(isButtonDisable);
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
              [styles.nameWrapperValid]: isValidateName,
              [styles.nameWrapperInvalid]: !isValidateName,
            })}
          >
            <input
              onInput={(e) => setName(e.target.value)}
              value={name}
              className={cx(styles.name, {
                [styles.nameValid]: isValidateName,
                [styles.nameInvalid]: !isValidateName,
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
                [styles.selectValid]: isValidateDate,
                [styles.selectInvalid]: !isValidateDate,
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
                [styles.selectValid]: isValidateDate,
                [styles.selectInvalid]: !isValidateDate,
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
                [styles.selectValid]: isValidateDate,
                [styles.selectInvalid]: !isValidateDate,
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
              [styles.passwordWrapperValid]: isValidatePassword,
              [styles.passwordWrapperInvalid]: !isValidatePassword,
            })}
          >
            <input
              onInput={(e) => setPassword(e.target.value)}
              value={password}
              className={cx(styles.password, {
                [styles.passwordValid]: isValidatePassword,
                [styles.passwordInvalid]: !isValidatePassword,
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
              [styles.mailWrapperValid]: isValidateEmail,
              [styles.mailWrapperInvalid]: !isValidateEmail,
            })}
          >
            <input
              onInput={(e) => setEmail(e.target.value)}
              value={email}
              className={cx(styles.mail, {
                [styles.mailValid]: isValidateEmail,
                [styles.mailInvalid]: !isValidateEmail,
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
          disabled={!isButtonDisable}
          type="submit"
        >
          Создать
        </button>
        <label className={styles.labelCheckbox}>
          Регистрируясь, я подтверждаю что мне исполнилось 18 лет. Я принимаю
          условия лицензионного соглашения, политики конфиденциальности,
          обработки персональных данных.
          <input
            className={styles.inputCheckbox}
            type="checkbox"
            name="proof-of-age"
          />
          <span className={styles.checkboxMark}></span>
        </label>
      </form>
    </main>
  );
};
