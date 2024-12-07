import { INIT_JSON } from "../constants/initJSON";
import { LS_JSON } from "../constants/primitives";

export const getJSON = () => {
  const jsonFromLS = localStorage.getItem(LS_JSON);
  return jsonFromLS ?? INIT_JSON;
};

