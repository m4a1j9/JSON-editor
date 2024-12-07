import { Debounce } from "./models/Debounce";

export const debounce: Debounce = (callback, wait) => {
  let timeoutId: number | undefined = undefined;

  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
