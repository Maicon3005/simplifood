import "./style.css";

import { useEffect } from "react";
import { useState } from "react";
import BtnView from "../../../assets/images/btn-view-item.svg";
import BtnAdd from "../../../assets/images/btn-add-item.svg";
import BtnRemove from "../../../assets/images/btn-remove-item.svg";
import { useHistory } from "react-router-dom";

export function CategoryItem({ ...props }) {
  const history = useHistory();

  const { id, name, qttProducts } = props;
  const [primaryLetter, setPrimaryLetter] = useState("");

  useEffect(() => {
    getPrimaryLetter();
  }, []);

  function handleAddProduct(event) {
    event.preventDefault();
    const location = { pathname: "/criar-produto", state: id };
    history.push(location);
  }

  function handleShowProducts(event) {
    event.preventDefault();
    const location = { pathname: "/mostrar-produtos", idCategory: id , nameCategory: name  };
    history.push(location);
  }

  function getPrimaryLetter() {
    const letter = name.substring(0, 1);
    setPrimaryLetter(letter);
  }

  return (
    <li className="category-item">
      <div className="identity-item">
        <div className="circle-default">
          <h2>{primaryLetter}</h2>
        </div>
        <h3>{name}</h3>
      </div>
      <div className="qtt-products">
        <p>
          {qttProducts <= 1
            ? `${qttProducts} Produto`
            : `${qttProducts} Produtos`}
        </p>
      </div>
      <div className="container-commands">
        <button className="btn-item">
          <img
            src={BtnView}
            alt="Botão ver item"
            onClick={handleShowProducts}
          />
        </button>
        <button className="btn-item" onClick={handleAddProduct}>
          <img src={BtnAdd} alt="Botão ver item" />
        </button>
        <button className="btn-item">
          <img src={BtnRemove} alt="Botão ver item" />
        </button>
      </div>
    </li>
  );
}
