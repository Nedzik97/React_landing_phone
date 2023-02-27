export const daysBirth = Array.from({ length: 31 }, (_, index) => 1 + index);
export const monthsBirth = Array.from({ length: 12 }, (_, index) => 1 + index);
export const yearsBirth = Array.from(
  { length: 100 },
  (_, index) => new Date().getFullYear() - index
);
export const regExpName = /^[A-Za-z_-]{2,}|[А-Яа-я_-]{2,}$/;
export const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
export const regExpPassword =
  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z]{8,}/g;

export const changeClassNames = (
  error,
  fieldName,
  fieldValid,
  fieldInvalid
) => {
  if (error === undefined) {
    return `${fieldName}`;
  }
  if (error === "") {
    return `${fieldName} ${fieldName}-${fieldValid}`;
  }
  return `${fieldName} ${fieldName}-${fieldInvalid}`;
};
