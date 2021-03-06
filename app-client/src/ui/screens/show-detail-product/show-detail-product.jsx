import "./style.css";

import { Base, FooterAddProduct, HeaderDefault } from "../../components/";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";

export function ShowDetailProduct() {
  const history = useHistory();
  const idProduct = history.location.idProduct;
  const api = useSimplifoodApi();

  const [product, setProduct] = useState();

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.getProduct(idProduct);
        setProduct(response);
      } catch (error) {
        console.log(error);
      }
    }

    loadProduct();
  }, []);
  return (
    <Base>
      <HeaderDefault />
      {product ? (
        <>
          <div className="container-details">
            <div className="container-product-image">
              <img src={product.urlImage} />
            </div>
            <div className="container-description-product">
              <h3>{product.productName}</h3>
              <div className="card-price-quantity">
                <p>
                  <strong>{`R$ ${product.price.toFixed(2)}`}</strong>
                </p>
                <p>{product.quantity}</p>
              </div>
              <p>{product.description}</p>
            </div>
            <form className="form-observation">
              <label>Observação</label>
              <input type="text" placeholder="Ex.: Tirar milho e ervilhas!" />
            </form>
          </div>
          <FooterAddProduct idProduct={idProduct} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </Base>
  );
}
