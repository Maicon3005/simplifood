import { useAxios } from "./use-axios-hook";
import { useCallback } from "react";

export function useSimplifoodApi() {
  const instance = useAxios("http://localhost:8080", {});

  async function login(email, password) {
    const response = await instance.post("/login", {
      email,
      password,
    });
    return response;
  }

  return useCallback(
    {
      login,
    },
    []
  );
}
