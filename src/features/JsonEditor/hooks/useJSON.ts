import { useState, ChangeEvent, useMemo, useEffect } from "react";
import { ERROR, LS_JSON } from "../constants/primitives";
import { parseJSON } from "../utils/parseJSON";
import { debounce } from "../../../shared/utils";
import { getJSON } from "../utils/getJSON";

export const useJSON = () => {
  const [json, setJson] = useState(getJSON());

  const handleJSON = debounce((e: ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value);
  }, 250);

  const formattedJSON = useMemo<string>(() => {
    try {
      return JSON.stringify(parseJSON(json), null, 2);
    } catch (e) {
      console.log(e);
      return ERROR;
    }
  }, [json]);

  useEffect(() => {
    const saveJSON = () => localStorage.setItem(LS_JSON, json);

    addEventListener("beforeunload", saveJSON);
    return () => {
      removeEventListener("beforeunload", saveJSON);
    };
  }, [json]);

  return {
    handleJSON,
    formattedJSON,
    json,
  };
};
