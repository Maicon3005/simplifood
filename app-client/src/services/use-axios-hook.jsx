import axios from "axios";

export function useAxios(baseURL, authorization) {
  const instance = axios.create({
    baseURL: baseURL,
  });

  return instance;
}
