import "./style.css";

import { useEffect, useState } from "react";
import BtnRemove from "../../../assets/images/btn-remove-item.svg";
import BtnEdit from "../../../assets/images/btn-edit-item.svg";
import { useHistory } from "react-router-dom";

export function ProductItem({ ...props }) {
  const { id, urlImage, productName, quantity, price, description } = props;
  const history = useHistory();

  function handleEdit(event) {
    history.push("/criar-produto");
    event.preventDefault();
  }

  return (
    <div className="container-item-product">
      <div className="container-image-product">
        <div className="product-image">
          <img src={urlImage} alt="Imagem do produto" />
        </div>
      </div>
      <div className="content-product">
        <div className="content-product-upper">
          <h3>{productName}</h3>
          <p>{quantity}</p>
          <p>{`R$ ${price}`}</p>
          <div className="btn-product-item">
            <button className="btn-item" onClick={handleEdit}>
              <img src={BtnEdit} alt="Botão editar item" />
            </button>
            <button className="btn-item">
              <img src={BtnRemove} alt="Botão remover item" />
            </button>
          </div>
        </div>
        <div className="content-product-bottom">{description}</div>
      </div>
    </div>
  );
}
