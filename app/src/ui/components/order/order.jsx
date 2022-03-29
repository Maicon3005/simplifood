import { useEffect, useState } from "react";
import "./style.css";

export function Order() {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderItens, setOrderItens] = useState([{ qtt: "", item: "" }]);

  

  const [hour, setHour] = useState("");

  //teste

  useEffect(() => {
    setOrderNumber("13635");
    setOrderItens([
      { qtt: "1", item: "Hamburguer Bacon" },
      { qtt: "2", item: "Xis carne (Sem milho)" },
      { qtt: "1", item: "Dog duplo (com maionese extra e batata extra" },
      { qtt: "1", item: "Alaminuta de Frango" },
      { qtt: "1", item: "Alaminuta de Carne" },
      { qtt: "1", item: "Coca-cola 2,5 L" },
    ]);
    setHour("11h45m");
  }, []);

  //fim teste

  return (
    <>
      <div className="container-order">
        <div className="order-identity">
          <h3>{`Pedido ${orderNumber}`}</h3>
        </div>
        <ul className="order-itens">
          {orderItens.map((x, index) => {
            return <li key={index}>{`${x.qtt} ${x.item}`}</li>;
          })}
        </ul>
        <div className="order-identity">
          <h3>Endereço</h3>
        </div>
      </div>
    </>
  );
}
