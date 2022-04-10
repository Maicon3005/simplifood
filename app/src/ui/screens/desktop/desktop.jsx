import "./style.css";

import { Order, TopMenu } from "../../components/";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";
import { useEffect, useState } from "react";

export function Desktop() {
  const api = useSimplifoodApi();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadAllOrders() {
      try {
        const response = await api.getAllOrders();
        console.log(response.orderResponseList);
        setOrders(response.orderResponseList);
      } catch (error) {
        console.log(error);
      }
    }

    loadAllOrders();
  }, []);

  async function loadOrdersUpdated(idOrder) {
    try {
      const response = await api.updateStatus(idOrder);
      console.log(response.orderResponseList);
      setOrders(response.orderResponseList);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <TopMenu />
      <div className="container-desktop">
        <h1>Área de Trabalho</h1>
      </div>
      <div className="panel-order">
        {orders[0] ? (
          <div className="scroller">
            {orders.map((order) => (
              <Order
                key={order.id}
                id={order.id}
                address={order.addressResponse}
                hour={order.hourToOrder}
                products={order.productOrderModelList}
                status={order.orderStatus}
                onclick={(idOrder) => loadOrdersUpdated(idOrder)}
              />
            ))}
          </div>
        ) : (
          <div className="notfound-orders">
            <h3>Você não possui pedidos pendentes...</h3>
          </div>
        )}
      </div>
    </div>
  );
}
