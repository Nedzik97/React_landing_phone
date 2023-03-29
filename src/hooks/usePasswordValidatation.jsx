import { useCallback, useState, useEffect } from "react";
import { regExpPassword } from "../util";

export const usePasswordValidation = () => {
  const [password, setPassword] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const [isPasswordValid, setIsValidatePassword] = useState(false);

  const passwordValidation = useCallback(() => {
    if (!password) {
      setPasswordError("Придумайте надежный пароль");
      setIsValidatePassword(false);
      return;
    }
    if (!regExpPassword.test(password)) {
      setPasswordError("Пароль должен содержать одну заглавную букву и цифру");
      setIsValidatePassword(false);
    } else {
      setPasswordError("");
      setIsValidatePassword(true);
    }
  }, [password]);

  useEffect(() => {
    if (password === undefined) {
      return;
    }
    passwordValidation();
  }, [passwordValidation, password]);

  return {
    password,
    setPassword,
    passwordError,
    isPasswordValid,
  };
};
