import "./style.css";

import { useEffect, useState } from "react";
import BtnRemove from "../../../assets/images/btn-remove-item.svg";
import BtnEdit from "../../../assets/images/btn-edit-item.svg";
import { useHistory } from "react-router-dom";

export function ProductItem() {
  const history = useHistory();

  const [urlImagem, setUrlImagem] = useState("");
  const [name, setName] = useState("");
  const [qtt, setQtt] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setUrlImagem(
      "https://static.distribuidoracaue.com.br/media/catalog/product/cache/1/thumbnail/600x800/9df78eab33525d08d6e5fb8d27136e95/r/e/refrigerante-coca-cola-2-litros.jpg"
    );

    setName("Coca-cola");
    setQtt("2,5L");
    setPrice("7,90");
    setDescription(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta odio tellus, eu fermentum ipsum ullamcorper et. "
    );
  }, []);

  function handleEdit(event) {
    history.push("/criar-produto");
    event.preventDefault();
  }

  return (
    <div className="container-item-product">
      <div className="container-image-product">
        <div className="product-image">
          <img src={urlImagem} alt="Imagem do produto" />
        </div>
      </div>
      <div className="content-product">
        <div className="content-product-upper">
          <h3>{name}</h3>
          <p>{qtt}</p>
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
