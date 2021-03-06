import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";
import { Base, Header } from "../../components";
import { OrderItem } from "../../components/order-item/order-item";
import "./style.css";

export function OrderDetail() {
  const api = useSimplifoodApi();
  const idOrder = localStorage.getItem("@IdOrder");
  const history = useHistory();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function loadItemsOrder() {
      try {
        const response = await api.getOrderItens(idOrder);
        setProduct(response.orderItemResponses);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    loadItemsOrder();
  }, []);

  function handleOnClickMakeOrder() {
    history.push("/cadastro-endereco");
  }

  return (
    <Base>
      <Header>
        <div className="header-order">
          <h1>Pedido</h1>
          <button>Excluir</button>
        </div>
      </Header>
      <div className="container-order-detail">
        {product ? (
          product.map((item, index) => (
            <OrderItem
              key={index}
              nameProduct={item.nameProduct}
              priceProduct={item.priceProduct}
              urlImage={item.urlImage}
            />
          ))
        ) : (
          <p>Carregando...</p>
        )}
        <div className="footer-order-datail">
          <button onClick={handleOnClickMakeOrder}>Fazer Pedido</button>
        </div>
      </div>
    </Base>
  );
}
