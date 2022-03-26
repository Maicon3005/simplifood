import "./style.css";
import "../../create-account/style.css";
import IconStepFive from "../../../../assets/images/icon-step-five.svg";
import IconOu from "../../../../assets/images/icon-ou.svg";
import { QRCode, SidebarRight } from "../../../components";

import { useHistory } from "react-router-dom";
import { useSimplifoodApi } from "../../../../services/use-simplifood-api";
import { useEffect, useState } from "react";

export function StepFive() {
  const api = useSimplifoodApi();
  const history = useHistory();

  function handleStepFive() {
    history.push("/criar-conta-5");
  }
  return (
    <div className="container-main">
      <div className="sidebar-left sidebar-left-step-five">
        <h1>Para integrar o WhatsApp do seu estabelecimento</h1>
        <p>
          Utilize o leitor de QR CODE do WhatsApp de seu estabelecimento para se
          registrar na plataforma Simplifood.
        </p>
        <div className="option-qrcode">
          <QRCode />
          <img
            src={IconOu}
            className="divider-page divider-page-large"
            alt="Icone de escolha do login"
          />
          <button className="button-white-blue" onClick={handleStepFive}>
            Pular etapa
          </button>
        </div>
        <img
          className="icon-step-four"
          src={IconStepFive}
          alt="Passo um da criação de conta"
        />
      </div>
      <SidebarRight content="Com o nosso suporte você vai conseguir produzir muito mais em menos tempo!" />
    </div>
  );
}
