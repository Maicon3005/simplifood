import "./style.css";
import { useState } from "react";

import logo from "../../../assets/images/logo.svg";
import { Redirect } from "react-router-dom";

export function SidebarRightLogin() {
  const [isRedirect, setIsRedirect] = useState({ redirect: false });

  function handleOnClick() {
    setIsRedirect({ redirect: true });
  }

  return (
    <>
      {isRedirect.redirect && <Redirect to="/criar-conta-1" />}
      <aside className="sidebar-right">
        <img src={logo} className="image-logo" alt="imagem da logomarca" />
        <div className="side-message">
          <p>
            Crie uma conta e descubra um mundo de possibilidades para seu
            negócio!
          </p>
        </div>
        <button className="button-white" onClick={handleOnClick}>
          Criar Conta
        </button>
      </aside>
    </>
  );
}
