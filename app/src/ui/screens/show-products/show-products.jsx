import "./style.css";

import { TopMenu, ProductItem } from "../../components";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";

export function ShowProducts() {
  const history = useHistory();
  const categoryId = history.location.idCategory;
  const categoryName = history.location.nameCategory;
  const api = useSimplifoodApi();

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.getAllProducts(categoryId);
        setAllProducts(response.productResponses);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();
  });

  return (
    <>
      <TopMenu />
      <div className="container-show-products">
        <h1>
          Categoria -{" "}
          <strong className="category-strong">{categoryName}</strong>
        </h1>
        {!allProducts ? (
          <h3>Você não possui nenhum produto cadastrado!</h3>
        ) : (
          allProducts.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              urlImage={product.urlImage}
              productName={product.productName}
              quantity={product.quantity}
              price={product.price}
              description={product.description}
            />
          ))
        )}
      </div>
    </>
  );
}
