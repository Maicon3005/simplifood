import "./style.css";

import { TopMenu, ProductItem } from "../../components";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";
import { useIsMounted } from "../../../hooks/use-is-mounted";

export function ShowProducts() {
  const history = useHistory();
  const categoryId = history.location.idCategory;
  const categoryName = history.location.nameCategory;
  const isMounted = useIsMounted();
  const api = useSimplifoodApi();

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.getAllProducts(categoryId);
        if (isMounted.current) {
          setAllProducts(response.productResponses);
        }
      } catch (error) {
        console.log(error);
      }
    }

    categoryId && loadProducts();
  }, [categoryId, api, isMounted]);

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
              categoryId={categoryId}
              categoryName={categoryName}
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
