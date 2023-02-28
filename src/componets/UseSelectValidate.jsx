import { useState } from "react";

export const useSelectValidate = () => {
  const [selectError, setSelectError] = useState(undefined);
  const [days, setDays] = useState("");
  const [month, setMounth] = useState("");
  const [years, setYears] = useState("");

  const dateValidation = () => {
    const receivedDate = new Date(`/${month}/${days}/${years}`);
    const dataNow = new Date();
    const diffDate = Math.floor(
      (dataNow - receivedDate) / (1000 * 60 * 60 * 24 * 365)
    ).valueOf();
    if (diffDate >= 18 && diffDate <= 80) {
      setSelectError("");
    } else {
      setSelectError(" Укажите точную дату своего рождения");
    }
  };

  return {
    selectError,
    days,
    setDays,
    month,
    setMounth,
    years,
    setYears,
    dateValidation,
  };
};
