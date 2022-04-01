import { useEffect, useState } from "react";
import "./style.css";

export function Order() {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderItens, setOrderItens] = useState([{ qtt: "", item: "" }]);
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [complement, setComplement] = useState("");

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

    setStreet("Avenida Brasil");
    setNumber("1136");
    setDistrict("Oriço");
    setCity("Gravataí");
    setState("RS");
    setComplement("Deixar na portaria do prédio");

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
        <div className="container-address-order">
          <h3>Endereço</h3>

          <p>
            Rua: <strong>{street}</strong>, nº <strong>{number}</strong>
          </p>
          <p>
            Bairro: <strong>{district}</strong>
          </p>
          <p>
            Cidade: <strong>{`${city}, ${state}`}</strong>
          </p>
          <p>
            Complemento: <strong>{complement}</strong>
          </p>
        </div>
        <div className="container-hour">
          <h3>
            Hora: <strong>{hour}</strong>
          </h3>
        </div>
        <div className="container-order-command">
          <button className="button-order">Iniciar</button>
        </div>
      </div>
    </>
  );
}
