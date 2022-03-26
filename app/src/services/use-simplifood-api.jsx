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

  async function userSave(name, lastName, email, password) {
    const response = await instance.post("/user/save", {
      name,
      lastName,
      email,
      password,
    });
    return response;
  }

  async function restaurantSave(
    userId,
    corporateName,
    fantasyName,
    cnpj,
    cep,
    city,
    state,
    district,
    street,
    number
  ) {
    const response = await instance.post("/restaurant/save", {
      userId,
      corporateName,
      fantasyName,
      cnpj,
      cep,
      city,
      state,
      district,
      street,
      number,
    });
    return response;
  }

  async function postTokenWpp() {
    const response = await instance.post("/generatetoken", {});
    return response;
  }

  async function startSession(tokenWpp) {
    const response = await instance.post("/startsession", {
      token: `Bearer ${tokenWpp}`,
    });
    return response;
  }

  async function postQRCode(tokenWpp) {
    const response = await instance.post("/getqrcode", {
      token: `Bearer ${tokenWpp}`,
    });
  }

  return useCallback(
    {
      login,
      userSave,
      restaurantSave,
      postTokenWpp,
      startSession,
      postTokenWpp,
    },
    []
  );
}
