import { useState } from "react";
import { regExpPassword } from "../util";

export const usePasswordValidate = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(undefined);

  const passwordHendler = () => {
    if (!password) {
      setPasswordError("Придумайте надежный пароль");
      return;
    }
    if (!regExpPassword.test(password)) {
      setPasswordError("Пароль должен содержать одну заглавную букву и цифру");
    } else {
      setPasswordError("");
    }
  };

  return {
    password,
    setPassword,
    passwordError,
    setPasswordError,
    passwordHendler,
  };
};
