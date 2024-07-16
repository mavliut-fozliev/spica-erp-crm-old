interface ObjectWithId {
  _id: any;
}

export function convertObjectToString(object: any): { [key: string]: any } {
  const newObj: { [key: string]: any } = {};
  for (const [key, value] of Object.entries(object)) {
    if (Array.isArray(value)) {
      newObj[key] = value.map((obj: any) => (obj._id ? obj._id : obj));
    } else if (isObjectWithId(value)) {
      newObj[key] = value._id;
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}

function isObjectWithId(obj: any): obj is ObjectWithId {
  return obj && obj.hasOwnProperty("_id");
}
