import "./style.css";

import { useEffect, useState } from "react";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function FooterAddProduct({ ...props }) {
  const api = useSimplifoodApi();
  const history = useHistory();
  const { idProduct } = props;
  const ID_ORDER = localStorage.getItem("@IdOrder");

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {}, [api]);

  function handleQuantity(event) {
    event.preventDefault();
  }

  function handlePrice(event) {
    event.preventDefault();
  }

  async function handleClickAdd() {
    setQuantity(quantity + 1);
    const addOneQuantity = quantity + 1;
    try {
      const response = await api.getPricePerProduct(idProduct, addOneQuantity);
      setPrice(response.pricePerProduct);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function onHandleClickAddOrder() {
    if (quantity > 0 && ID_ORDER) {
      for (let i = 0; i < quantity; i++) {
        await addProductToOrder();
      }
      history.push("/");
    } else if (quantity > 0) {
      console.log("teste");
      try {
        const response = await api.createOrder();
        localStorage.setItem("@IdOrder", response.idOrder);
        for (let i = 0; i < quantity; i++) {
          await createProductToOrder(response.idOrder);
        }
        history.push("/");
      } catch (error) {
        console.log();
      }
    }
  }

  async function addProductToOrder() {
    try {
      const response = await api.addProductToOrder(
        ID_ORDER,
        idProduct,
        quantity
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function createProductToOrder(idOrder) {
    try {
      const response = await api.addProductToOrder(
        idOrder,
        idProduct,
        quantity
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function handleClickRemove() {
    if (quantity > 0) setQuantity(quantity - 1);
    const addOneQuantity = quantity - 1;
    try {
      const response = await api.getPricePerProduct(idProduct, addOneQuantity);
      setPrice(response.pricePerProduct);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <footer className="footer-add-product">
      <div className="container-quantity-products">
        <div className="container-button-quantity">
          <button className="button-quantity-left" onClick={handleClickRemove}>
            -
          </button>
          <input value={quantity} onChange={handleQuantity} disabled />
          <button className="button-quantity-right" onClick={handleClickAdd}>
            +
          </button>
        </div>
      </div>
      <div className="container-price-product">
        <div className="price-product">
          <button onClick={onHandleClickAddOrder}>Adicionar</button>
          <input
            value={`R$ ${price.toFixed(2)}`}
            onChange={handlePrice}
            disabled
          />
        </div>
      </div>
    </footer>
  );
}
