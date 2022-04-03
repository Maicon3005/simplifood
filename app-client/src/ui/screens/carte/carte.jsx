import "./style.css";

import { useEffect, useState } from "react";
import { Base, AllProducts } from "../../components/";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";

export function Carte() {
  const api = useSimplifoodApi();

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
    </Base>
  );
}
