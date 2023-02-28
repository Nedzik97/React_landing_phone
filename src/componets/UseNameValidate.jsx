import { useState } from "react";
import { regExpName } from "../util";

export const useNameValidate = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(undefined);

  const nameHandler = () => {
    if (!name) {
      setNameError("Введите свое имя");
      return;
    }
    if (!regExpName.test(name)) {
      setNameError("Поле заполнено некорректно");
    } else {
      setNameError("");
    }
  };

  return { name, setName, nameError, setNameError, nameHandler };
};
