import { SUCCESS } from "../constants/primitives";

export function parseJSON(json: string) {
  const parsedJSON = JSON.parse(json);

  console.log(SUCCESS);

  return parsedJSON;
}
