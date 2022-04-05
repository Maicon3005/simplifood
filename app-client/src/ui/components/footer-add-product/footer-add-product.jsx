import { useEffect, useState } from "react";
import "./style.css";

export function FooterAddProduct({ ...props }) {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const { priceProduct } = props;

  useEffect(()=>{},[price])

  function handleQuantity(event) {
    event.preventDefault();
  }

  function handlePrice(event) {
    event.preventDefault();
  }

  function handleClickAdd() {
    setQuantity(quantity + 1);
    calculatePrice();
  }

  function handleClickRemove() {
    if (quantity > 0) setQuantity(quantity - 1);
    calculatePrice();
  }

  function calculatePrice() {
    const totalPrice = quantity * priceProduct;
    setPrice(totalPrice);
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
          <button>Adicionar</button>
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
