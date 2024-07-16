export const transformInputToObject = (str: string | number | { _id: string; name: string }) => {
  if (typeof str === "string" || typeof str === "number") {
    return { _id: str, name: str };
  } else {
    return str;
  }
};
