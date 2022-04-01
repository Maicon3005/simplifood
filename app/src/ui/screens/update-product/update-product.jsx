import "./style.css";

import { useEffect, useState } from "react";
import { TopMenu, SidebarRight } from "../../components";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";
import { useHistory } from "react-router-dom";

export function UpdateProduct() {
  const api = useSimplifoodApi();
  const history = useHistory();
  const categoryId = history.location.idCategory;
  const productId = history.location.idProduct;
  const categoryName = history.location.categoryName;

  const [nameProduct, setNameProduct] = useState("");
  const [qttProduct, setQttProduct] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.getProduct(productId);
        console.log(response);
        setNameProduct(response.productName);
        setQttProduct(response.quantity);
        setPrice(response.price);
        setDescription(response.description);
        setImageUrl(response.urlImage);
      } catch (error) {
        console.log(error);
      }
    }

    loadProduct();
  }, [api, productId]);

  function handleNameProduct(event) {
    setNameProduct(event.target.value);
    event.preventDefault();
  }

  function handleQttProduct(event) {
    setQttProduct(event.target.value);
    event.preventDefault();
  }

  function handlePrice(event) {
    setPrice(event.target.value);
    event.preventDefault();
  }

  function handleDescription(event) {
    setDescription(event.target.value);
    event.preventDefault();
  }

  function handleImageUrl(event) {
    setImageUrl(event.target.value);
    event.preventDefault();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(categoryId);

    try {
      const response = await api.updateProduct(
        productId,
        categoryId,
        nameProduct,
        qttProduct,
        price,
        description,
        imageUrl
      );
      console.log(response);
      history.push("/mostrar-produtos");

      const location = {
        pathname: "/mostrar-produtos",
        idCategory: categoryId,
        nameCategory: categoryName,
      };

      history.push(location);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <TopMenu />
      <div className="container-main">
        <div className="container-create-product">
          <h1>Atualizar Produto</h1>
          <form onSubmit={handleSubmit} className="form-create-product">
            <input
              id="name"
              className="text-field text-field-large"
              placeholder="Nome"
              value={nameProduct}
              onChange={handleNameProduct}
              type="text"
              required
            />
            <div className="text-field-half">
              <input
                id="qtt"
                className="text-field text-field-medium"
                placeholder="Quantidade"
                value={qttProduct}
                onChange={handleQttProduct}
                type="text"
                required
              />
              <input
                id="price"
                className="text-field text-field-medium"
                placeholder="Preço"
                value={price}
                onChange={handlePrice}
                type="text"
                required
              />
            </div>
            <input
              id="description"
              className="text-field text-field-large text-area"
              placeholder="Descrição"
              value={description}
              onChange={handleDescription}
              type="text"
              required
            />
            <input
              id="image"
              className="text-field text-field-large"
              placeholder="URL da imagem"
              value={imageUrl}
              onChange={handleImageUrl}
              type="text"
              required
            />
            <button className="button-blue">Atualizar</button>
          </form>
        </div>
        <SidebarRight />
      </div>
    </>
  );
}
