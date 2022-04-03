import "./style.css";

import { useEffect, useState } from "react";
import { Base, AllProducts } from "../../components/";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";

export function Carte() {
  const api = useSimplifoodApi();

  const [categorys, setCategorys] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    async function loadAllCategories() {
      const response = await api.getAllCategories();
      setCategorys(response.categories);
      setCategoryId(response.categories[0].id);
    }

    loadAllCategories();
  }, []);

  function handleOnCategoryCLick(idCategory) {
    console.log("Category id: ", idCategory);
    setCategoryId(idCategory);
  }

  return (
    <Base>
      <div className="container-carte">
        <ul className="container-categories">
          {categorys.map((category) => (
            <li
              className="container-category"
              key={category.id}
              onClick={() => handleOnCategoryCLick(category.id)}
            >
              <h3>{category.categoryName}</h3>
            </li>
          ))}
        </ul>
        <div>
          {categoryId? (
            <AllProducts categoryId={categoryId} />
          ) : (
            <p>Carregando</p>
          )}
        </div>
      </div>
    </Base>
  );
}
