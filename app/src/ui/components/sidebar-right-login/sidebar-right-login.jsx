import "./style.css";

import logo from "../../../assets/images/logo.svg";
import { useHistory } from "react-router-dom";

export function SidebarRightLogin() {
  const history = useHistory();

  function handleOnClick() {
    history.push("/criar-conta-1");
  }

  return (
    <aside className="sidebar-right">
      <img src={logo} className="image-logo" alt="imagem da logomarca" />
      <div className="side-message">
        <p>
          Crie uma conta e descubra um mundo de possibilidades para seu negócio!
        </p>
      </div>
      <button className="button-white" onClick={handleOnClick}>
        Criar Conta
      </button>
    </aside>
  );
}
