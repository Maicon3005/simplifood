import "./style.css";

import { CategoryItem, TopMenu } from "../../components/";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";

export function ShowCategory() {
  const history = useHistory();
  const api = useSimplifoodApi();

  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function loadAllCategories() {
      const response = await api.getAllCategories();
      setAllCategories(response.categories);
    }

    loadAllCategories();
  }, [api]);

  function handleOnClickAdd() {
    history.push("/criar-categoria");
  }

  return (
    <div className="show-itens-restaurant">
      <TopMenu onclick={() => handleOnClickAdd()} setVisibleButton={true} />
      <div className="title-pages-restaurant">
        <h1>Categorias e Produtos</h1>
      </div>
      <ul className="item-default">
        {allCategories.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            name={category.categoryName}
          />
        ))}
      </ul>
    </div>
  );
}
