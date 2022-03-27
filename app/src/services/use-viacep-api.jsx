import { useAxios } from "./use-axios-hook";
import { useCallback } from "react";

export function useViaCepApi() {
  const instance = useAxios("http://www.viacep.com.br/ws/",{});

  async function getCep(cep) {
    const response = await instance.get(`${cep}/json`);
    console.log(response);
    //return response;
  }

  return useCallback({ getCep }, []);
}
