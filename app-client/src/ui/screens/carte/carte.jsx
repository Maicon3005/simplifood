import "./style.css";

import { useEffect, useState } from "react";
import {
  Base,
  AllProducts,
  FooterDescriptionOrder,
  HeaderDefault,
} from "../../components/";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";

export function Carte() {
  const api = useSimplifoodApi();
  const isOrder = localStorage.getItem("@IdOrder");

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    async function loadAllCategories() {
      const response = await api.getAllCategories();
      setCategorys(response.categories);
    }

    loadAllCategories();
  }, []);

  return (
    <Base>
      <HeaderDefault />
      {categorys ? (
        <div className="container-carte">
          <ul className="container-categories">
            {categorys.map((category) => (
              <a
                key={category.id}
                href={`#${category.categoryName}`}
                className="container-category"
              >
                <li id={category.categoryName}>
                  <h3>{category.categoryName}</h3>
                </li>
              </a>
            ))}
          </ul>
          <div>
            {categorys ? (
              categorys.map((category) => (
                <AllProducts
                  key={category.id}
                  categoryId={category.id}
                  categoryName={category.categoryName}
                />
              ))
            ) : (
              <p>Carregando...</p>
            )}
          </div>
        </div>
      ) : (
        <div className="container-empty-category">
          <p>Não existem itens cadastrados nesse restaurante!</p>
        </div>
      )}
      {isOrder && <FooterDescriptionOrder />}
    </Base>
  );
}
