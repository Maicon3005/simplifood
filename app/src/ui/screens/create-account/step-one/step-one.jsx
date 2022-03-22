import "./style.css";
import "../../create-account/style.css";
import IconStepOne from "../../../../assets/images/icon-step-one.svg";

import { SidebarRight } from "../../../components";

export function StepOne() {
  function teste() {
    alert("opa");
  }

  return (
    <div className="container-main">
      <div className="sidebar-left sidebar-left-step-one">
        <h1>Criar sua conta</h1>
        <p>
          Com poucos passos você já terá uma conta no Simplifood! Para criar sua
          conta é só clicar em começar.
        </p>
        <div>
          <button className="button-blue" onClick={teste}>
            Começar
          </button>
        </div>
        <img
          className="icon-step"
          src={IconStepOne}
          alt="Passo um da criação de conta"
        />
      </div>
      <SidebarRight content="Com o Simplifood você padroniza o atendimento ao cliente e melhora seus processos internos." />
    </div>
  );
}
