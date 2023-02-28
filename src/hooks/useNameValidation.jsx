import { useState, useEffect, useCallback } from "react";
import { regExpName } from "../util";

export const useNameValidation = () => {
  const [name, setName] = useState(undefined);
  const [nameError, setNameError] = useState(undefined);

  const nameValidation = useCallback(() => {
    if (!name) {
      setNameError("Введите свое имя");
      return;
    }
    if (!regExpName.test(name)) {
      setNameError("Поле заполнено некорректно");
    } else {
      setNameError("");
    }
  }, [name]);

  useEffect(() => {
    if (name === undefined) {
      return;
    }
    nameValidation();
  }, [nameValidation, name]);

  return { name, setName, nameError, setNameError };
};
