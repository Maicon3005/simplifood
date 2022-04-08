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

  async function getProduct(idProduct) {
    const response = await instance.get(`/product/get/${idProduct}`);
    return response.data;
  }

  async function getAllProducts(idCategory) {
    const response = await instance.get(`/product/getall/${idCategory}`);
    return response.data;
  }

  async function getPricePerProduct(idProduct, quantity) {
    const response = await instance.get(
      `/product/calculateprice/${idProduct}/${quantity}`
    );
    return response.data;
  }

  async function createOrder() {
    const response = await instance.post("order/create");
    return response.data;
  }

  async function addProductToOrder(idOrder, idProduct, quantity) {
    const response = await instance.post("/order/addproduct", {
      idOrder: idOrder,
      idProduct: idProduct,
      quantityProduct: quantity,
    });
    return response.data;
  }

  async function getBasicOrder(idOrder) {
    const response = await instance.get(`/order/getbasicorder/${idOrder}`);
    return response.data;
  }

  async function getOrderItens(idOrder) {
    const response = await instance.get(`/order/getitens/${idOrder}`);
    return response.data;
  }

  return useCallback(
    {
      getAddress,
      getAllCategories,
      getAllProducts,
      getProduct,
      getPricePerProduct,
      createOrder,
      addProductToOrder,
      getBasicOrder,
      getOrderItens,
    },
    []
  );
}
