import { useAxios } from "./use-axios-hook";
import { useCallback } from "react";

export function useSimplifoodApi() {
  const instance = useAxios("http://localhost:8080");

  async function getAddress(cep) {
    const response = await instance.post("/address/getaddress", {
      cep: cep,
    });
    return response;
  }

  async function getAllCategories() {
    const response = await instance.get("/category/getall");
    return response.data;
  }

  async function getProduct(idCategory) {
    const response = await instance.get(`/product/get/${idCategory}`);
    return response.data;
  }

  async function getAllProducts(idCategory) {
    const response = await instance.get(`/product/getall/2`);
    return response.data;
  }

  return useCallback(
    {
      getAddress,
      getAllCategories,
      getAllProducts,
      getProduct,
    },
    []
  );
}
