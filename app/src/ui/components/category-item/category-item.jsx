import "./style.css";

import { useEffect } from "react";
import { useState } from "react";
import BtnView from "../../../assets/images/btn-view-item.svg";
import BtnAdd from "../../../assets/images/btn-add-item.svg";
import BtnRemove from "../../../assets/images/btn-remove-item.svg";

export function CategoryItem() {
  const [name, setName] = useState("");
  const [primaryLetter, setPrimaryLetter] = useState("");
  const [qttProducts, setQttProducts] = useState("");

  //testes

  useEffect(() => {
    setName("Bebidas");
    getPrimaryLetter();
    setQttProducts(2);
  }, []);

  //fim teste

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
        <p>{`${qttProducts} Produtos`}</p>
      </div>
      <div className="container-commands">
        <button className="btn-item">
          <img src={BtnView} alt="Botão ver item" />
        </button>
        <button className="btn-item">
          <img src={BtnAdd} alt="Botão ver item" />
        </button>
        <button className="btn-item">
          <img src={BtnRemove} alt="Botão ver item" />
        </button>
      </div>
    </li>
  );
}
