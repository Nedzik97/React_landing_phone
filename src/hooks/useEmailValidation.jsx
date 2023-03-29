import { useState, useCallback, useEffect } from "react";
import { regExpEmail } from "../util";

export const useEmailValidation = () => {
  const [email, setEmail] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);
  const [isEmailValid, setIsValidateEmail] = useState(false);

  const emailValidation = useCallback(() => {
    if (!email) {
      setEmailError("Введите свой Email");
      setIsValidateEmail(false);
      return;
    }
    if (!regExpEmail.test(email)) {
      setEmailError("Email заполнен некорректно");
      setIsValidateEmail(false);
    } else {
      setEmailError("");
      setIsValidateEmail(true);
    }
  }, [email]);

  useEffect(() => {
    if (email === undefined) {
      return;
    }
    emailValidation();
  }, [emailValidation, email]);

  return { email, setEmail, emailError, isEmailValid };
};
