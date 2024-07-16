export const getNameValueFromObject = (obj?: { [key: string]: any } | null) => {
  if (!obj) return "";
  if (typeof obj === "object") {
    return obj.name;
  } else {
    return obj;
  }
};
