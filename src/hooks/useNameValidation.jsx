import { useState, useEffect, useCallback } from "react";
import { regExpName } from "../util";

export const useNameValidation = () => {
  const [name, setName] = useState(undefined);
  const [nameError, setNameError] = useState(undefined);
  const [isNameValid, setIsValidateName] = useState(false);

  const nameValidation = useCallback(() => {
    if (!name) {
      setNameError("Введите свое имя");
      setIsValidateName(false);
      return;
    }
    if (!regExpName.test(name)) {
      setNameError("Поле заполнено некорректно");
      setIsValidateName(false);
    } else {
      setNameError("");
      setIsValidateName(true);
    }
  }, [name]);

  useEffect(() => {
    if (name === undefined) {
      return;
    }
    nameValidation();
  }, [nameValidation, name]);

  return { name, setName, nameError, setNameError, isNameValid };
};
