import { useState, useCallback, useEffect } from "react";

export const useDateValidation = () => {
  const [selectError, setSelectError] = useState(undefined);
  const [days, setDays] = useState("");
  const [month, setMonth] = useState("");
  const [years, setYears] = useState("");
  const [isValidateDate, setIsValidateDate] = useState(false);

  const dateValidation = useCallback(() => {
    const receivedDate = new Date(`/${month}/${days}/${years}`);
    const dataNow = new Date();
    const diffDate = Math.floor(
      (dataNow - receivedDate) / (1000 * 60 * 60 * 24 * 365)
    ).valueOf();
    if (diffDate >= 18 && diffDate <= 80) {
      setSelectError("");
      setIsValidateDate(true);
    } else {
      setSelectError(" Укажите точную дату своего рождения");
      setIsValidateDate(false);
    }
  }, [days, month, years]);

  useEffect(() => {
    if (selectError === undefined) {
      return;
    }
    dateValidation();
  }, [dateValidation, days, month, years, selectError]);

  return {
    selectError,
    days,
    setDays,
    month,
    setMonth,
    years,
    setYears,
    dateValidation,
    isValidateDate,
  };
};
