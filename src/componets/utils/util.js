const arrayDays = Array.from({ length: 31 }, (_, index) => 1 + index);
export const countDays = [...arrayDays];

const arraMounth = Array.from({ length: 12 }, (_, index) => 1 + index);
export const mounthsBth = [...arraMounth];

const arrayYears = Array.from(
  { length: 100 },
  (_, index) => new Date().getFullYear() - index
);
export const yearsBth = [...arrayYears];

export const regExpName = /^[A-Za-z_-]{2,}|[А-Яа-я_-]{2,}$/;
export const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
export const regExpPassword =
  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z]{8,}/g;

export const changeClassNames = (error, fieldName) => {
  if (error === undefined) {
    return `${fieldName}_quastionnaire`;
  }
  if (error === "") {
    return `${fieldName}_quastionnaire ${fieldName}_valid`;
  }
  return `${fieldName}_quastionnaire ${fieldName}_invalid`;
};

export const addCheckMarkOnInput = (error, fieldName) => {
  if (error === undefined) {
    return `${fieldName}_wrapper`;
  }
  if (error === "") {
    return `${fieldName}_wrapper ${fieldName}_wrapper_check_mark`;
  }
  return `${fieldName}_wrapper ${fieldName}_wrapper_crros`;
};
