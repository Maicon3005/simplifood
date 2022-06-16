import { useAxios } from "./use-axios-hook";
import { useCallback } from "react";

export function useSimplifoodApi() {
  const TOKEN_API = localStorage.getItem("@App:token");
  const instance = useAxios("http://localhost:8080", TOKEN_API);

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

  async function getAddress(cep) {
    const response = await instance.post("/address/getaddress", {
      cep: cep,
    });
    return response;
  }

  async function startSession(tokenWpp) {
    const response = await instance.post("/startsession", {
      token: tokenWpp,
    });
    return response;
  }

  async function statusSession(tokenWpp) {
    const response = await instance.post("/getStatusConnection", {
      token: tokenWpp,
    });
    return response.data;
  }

  async function createCategory(nameCategory) {
    const response = await instance.post("/category/create", {
      nameCategory: nameCategory,
    });
    return response.data;
  }

  async function getAllCategories() {
    const response = await instance.get("/category/getall");
    return response.data;
  }

  async function deleteCategory(idCategory) {
    const response = await instance.delete(`/category/delete/${idCategory}`);
    return response;
  }

  async function createProduct(
    idCategory,
    name,
    quantity,
    price,
    description,
    imageUrl
  ) {
    const response = await instance.post("/product/create", {
      idCategory: idCategory,
      name: name,
      quantity: quantity,
      price: price,
      description: description,
      imageUrl: imageUrl,
    });
    return response.data;
  }

  async function getProduct(idCategory) {
    const response = await instance.get(`/product/get/${idCategory}`);
    return response.data;
  }

  async function getAllProducts(idCategory) {
    const response = await instance.get(`/product/getall/${idCategory}`);
    return response.data;
  }

  async function deleteProduct(idProduct) {
    const response = await instance.delete(`/product/delete/${idProduct}`);
    return response;
  }

  async function updateProduct(
    idProduct,
    idCategory,
    name,
    quantity,
    price,
    description,
    imageUrl
  ) {
    const response = await instance.put("/product/update", {
      idProduct: idProduct,
      idCategory: idCategory,
      name: name,
      quantity: quantity,
      price: price,
      description: description,
      imageUrl: imageUrl,
    });
    return response.data;
  }

  async function getAllOrders() {
    const response = await instance.get("/order/getall");
    return response.data;
  }

  async function updateStatus(orderId) {
    const response = await instance.post(`/order/updatestatus/${orderId}`);
    return response.data;
  }

  return useCallback(
    {
      login,
      userSave,
      restaurantSave,
      postTokenWpp,
      getAddress,
      startSession,
      statusSession,
      createCategory,
      getAllCategories,
      createProduct,
      getAllProducts,
      deleteProduct,
      getProduct,
      updateProduct,
      deleteCategory,
      getAllOrders,
      updateStatus,
    },
    []
  );
}
