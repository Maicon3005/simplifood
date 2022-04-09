import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Base, HeaderDefault } from "../../components";
import "./style.css";

export function ReturnToCarte() {
  const history = useHistory();

  function handleClickToCarte() {
    history.push("/");
  }

  return (
    <Base>
      <HeaderDefault />
      <div className="container-return-carte">
        <div className="return-carte">
          <h3>Seu pedido foi confirmado!</h3>
          <p>
            Seu pedido foi adicionado a fila, você receberá as atualizações
            sobre ele no seu WhatsApp!
          </p>
          <button onClick={handleClickToCarte}>Cardápio</button>
        </div>
      </div>
    </Base>
  );
}
