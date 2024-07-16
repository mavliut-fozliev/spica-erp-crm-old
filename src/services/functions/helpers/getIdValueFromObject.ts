import { obj } from "types/types";

export const getIdValueFromObject = (obj: obj | undefined) => {
  if (!obj) return "";
  if (typeof obj === "object") {
    return obj._id;
  } else {
    return obj;
  }
};
