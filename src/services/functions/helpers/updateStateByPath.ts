export const updateStateByPath = (setState: any, path: string, value: any) => {
  setState((prevState: any) => {
    const newState = { ...prevState };
    const keys = path.split(".");
    let current = newState;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    return newState;
  });
};
