import "./style.css";
import { Base } from "../../components/base/base";
import { HeaderDefault } from "../../components";
import { useState } from "react";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function AddPhone() {
  const [phone, setPhone] = useState("");
  const [verify, setVerify] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const api = useSimplifoodApi();
  const history = useHistory();
  const idOrder = localStorage.getItem("@IdOrder");

  function handlePhone(event) {
    setPhone(event.target.value);
    event.preventDefault();
  }

  function handleVerify(event) {
    setVerify(event.target.value);
    event.preventDefault();
  }

  async function getVerifyNumber() {
    try {
      const response = await api.getVerifyNumber(phone);
      console.log(response);
      setIsConfirmed(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleVerifyNumber() {
    try {
      const response = await api.verifyNumber(verify, idOrder);
      console.log(response);
      localStorage.clear();
      history.push("/retornar-cardapio");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Base>
      <HeaderDefault />
      <div className="container-config-phone">
        <div className="container-verify">
          <h3>Por favor, vamos conferir seu telefone!</h3>
          <input
            id="phone"
            placeholder="55 55 99999 9999"
            value={phone}
            onChange={handlePhone}
            type="text"
          />
          <p>
            Você receberá um código de confirmação no WhatsApp do número
            informado. Ao recebê-lo é só inseri-lo no campo abaixo.
          </p>
          <input
            id="verify"
            placeholder="0000"
            value={verify}
            onChange={handleVerify}
            type="text"
          />
          {isConfirmed ? (
            <button onClick={handleVerifyNumber} className="button-verify">
              Confirmar
            </button>
          ) : (
            <button onClick={getVerifyNumber} className="button-verify">
              Verificar
            </button>
          )}
        </div>
      </div>
    </Base>
  );
}
