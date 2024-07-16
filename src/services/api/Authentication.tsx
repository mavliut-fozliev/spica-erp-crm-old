import { login, registration } from "../functions/Auth";
import jwtDecode from "jwt-decode";

export type signIn = {
  email: string;
  password: string;
};

export type signUp = {
  email: string;
  password: string;
};

export class Authentication {
  signIn(signInData: signIn) {
    return new Promise((res, rej) => {
      login({ data: signInData })
        .then((result: { token: string }) => {
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(jwtDecode(result.token)));
          res(result);
        })
        .catch((error: Error) => {
          rej(error);
        });
    });
  }

  signUp(signUpData: signUp) {
    return new Promise((res, rej) => {
      registration({ data: signUpData })
        .then((result: { token: string }) => {
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(jwtDecode(result.token)));
          res(result);
        })
        .catch((error: Error) => {
          console.error(error.message);
          rej(error);
        });
    });
  }

  logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
}

const authService = new Authentication();
export default authService;
