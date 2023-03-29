export const daysBirth = Array.from({ length: 31 }, (_, index) => 1 + index);
export const monthsBirth = Array.from({ length: 12 }, (_, index) => 1 + index);
export const yearsBirth = Array.from(
  { length: 100 },
  (_, index) => new Date().getFullYear() - index
);
export const regExpName = /^[A-Za-z_-]{2,}|[А-Яа-я_-]{2,}$/;
export const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
export const regExpPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

export const checkedValidField = (fieldValue) =>
  fieldValue !== undefined && fieldValue !== "";
