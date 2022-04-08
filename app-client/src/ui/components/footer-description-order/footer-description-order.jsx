import { useEffect, useState } from "react";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";
import "./style.css";

export function FooterDescriptionOrder() {
  const api = useSimplifoodApi();
  const idOrder = localStorage.getItem("@IdOrder");

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function loadBasicOrder() {
      try {
        const response = await api.getBasicOrder(idOrder);
        console.log(response);
        setQuantity(response.quantityOfProducts);
        setPrice(response.totalPriceOrder);
      } catch (error) {
        console.log(error);
      }
    }

    loadBasicOrder();
  }, []);

  return (
    <>
      {quantity ? (
        <div className="footer-description">
          <p className="footer-description-quantity">
            <strong>
              {quantity === 1 ? `${quantity} item` : `${quantity} itens`}
            </strong>
          </p>
          <button>Ver Pedido</button>
          <p>
            <strong>{`R$ ${price.toFixed(2)}`}</strong>
          </p>
        </div>
      ) : (
        <p className="footer-description">Carregando...</p>
      )}
    </>
  );
}
