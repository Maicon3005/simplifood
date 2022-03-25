import { useAxios } from "./use-axios-hook";
import { useCallback } from "react";

export function useViaCepApi() {
  const instance = useAxios("https://viacep.com.br/ws/");

  async function getCep(cep) {
    const response = await instance.get(`${cep}/json`);
    return response;
  }

  return useCallback({ getCep }, []);
}
