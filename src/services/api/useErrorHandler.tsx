import React from "react";
import { defaultPage, usePageStore } from "store/pageStore";
import authService from "./Authentication";
import { useAuthStore } from "store/authStore";
import { useNavigate } from "react-router-dom";
import { useInstantStore } from "store/instantStore";

type ErrorToHandlerMapping = {
  [key: string]: () => void;
};

export default function useErrorHandler() {
  const pageStore = usePageStore();
  const authStore = useAuthStore();
  const instantStore = useInstantStore();
  const navigate = useNavigate();

  const handleExpiredJWT = () => {
    console.error("jwt expired, redirecting to login page");
    pageStore.setPage(defaultPage);
    authService.logOut();
    authStore.setSignedIn(false);
    navigate("/login");
  };

  const errorHandlers: ErrorToHandlerMapping = {
    "jwt expired": handleExpiredJWT,
  };

  function withErrorHandler<T extends (...args: any[]) => Promise<any>>(fn: T): T {
    return async function (...args: Parameters<T>): Promise<ReturnType<T>> {
      try {
        return await fn(...args);
      } catch (error: any) {
        errorHandlers[error.message]?.();
        throw error;
      }
    } as T;
  }

  return withErrorHandler;
}
