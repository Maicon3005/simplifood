import "./style.css";

import { useEffect, useState } from "react";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";
import { ProductItem } from "../product-item/product-item";

export function AllProducts({ ...props }) {
  const { categoryId } = props;
  const api = useSimplifoodApi();

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function loadAllProducts() {
      const response = await api.getAllProducts(categoryId);
      setAllProducts(response.productResponses);
      console.log(response);
    }

    loadAllProducts();
  }, []);

  return (
    <ul className="container-allproducts">
      {allProducts ? (
        allProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            urlImage={product.urlImage}
            productName={product.productName}
            description={product.description}
            quantity={product.quantity}
            price={product.price}
          />
        ))
      ) : (
        <p>Essa categoria não possui produto cadastrado!</p>
      )}
    </ul>
  );
}
