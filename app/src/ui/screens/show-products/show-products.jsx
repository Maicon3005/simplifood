import "./style.css";

import { TopMenu, ProductItem } from "../../components";
import { useEffect, useState } from "react";

export function ShowProducts() {
  const [categoryName, setCategoryName] = useState();

  useEffect(() => {
    setCategoryName("Bebidas");
  });

  return (
    <>
      <TopMenu />
      <div className="container-show-products">
        <h1>
          Categoria -{" "}
          <strong className="category-strong">{categoryName}</strong>
        </h1>
        <ProductItem />
      </div>
    </>
  );
}
