import "./style.css";

import { CategoryItem, TopMenu } from "../../components/";

export function ShowCategory() {
  return (
    <div className="show-itens-restaurant">
      <TopMenu />
      <div className="title-pages-restaurant">
        <h1>Categorias e Produtos</h1>
      </div>
      <ul className="item-default">
        <CategoryItem />
      </ul>
    </div>
  );
}
