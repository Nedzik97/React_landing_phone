import { useState } from "react";
import { regExpEmail } from "../util";

export const useEmailValidate = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(undefined);

  const emailHendler = () => {
    if (!email) {
      setEmailError("Введите свой Email");
      return;
    }
    if (!regExpEmail.test(email)) {
      setEmailError("Email заполнен некорректно");
    } else {
      setEmailError("");
    }
  };

  return { email, setEmail, emailError, emailHendler };
};
