import "./style.css";

import { CategoryItem, TopMenu } from "../../components/";
import { useHistory } from "react-router-dom";

export function ShowCategory() {
  const history = useHistory();

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
        <CategoryItem />
      </ul>
    </div>
  );
}
