import "./style.css";
import "../../create-account/style.css";
import IconStepFour from "../../../../assets/images/icon-step-four.svg";
import IconOu from "../../../../assets/images/icon-ou.svg";
import { SidebarRight } from "../../../components";

import { useHistory } from "react-router-dom";

export function StepFour() {
  const history = useHistory();

  function handleStepFive() {
    history.push("/criar-conta-5");
  }

  function handleSkipStep() {
    history.push("/desktop");
  }
  return (
    <div className="container-main">
      <div className="sidebar-left sidebar-left-step-four">
        <h1>Precisamos conectar seu WhatsApp</h1>
        <p>
          Essa etapa é necessária para podermos integrar o WhatsApp de seu
          estabelecimento com sua conta Simplifood. Mas fique tranquilo, caso
          não consiga concluir essa configuração nesse momento, poderá pular
          essa etapa e fazê-la mais tarde.Com poucos passos você já terá uma
          conta no Simplifood! Para criar sua conta é só clicar em começar.
        </p>
        <div className="buttons-options-whatsapp">
          <button className="button-blue" onClick={handleStepFive}>
            Conectar WhatsApp
          </button>
          <img
            src={IconOu}
            className="divider-page divider-page-large"
            alt="Icone de escolha do login"
          />
          <button className="button-white-blue" onClick={handleSkipStep}>
            Pular etapa
          </button>
        </div>
        <img
          className="icon-step-four"
          src={IconStepFour}
          alt="Passo um da criação de conta"
        />
      </div>
      <SidebarRight content="Com o nosso suporte você vai conseguir produzir muito mais em menos tempo!" />
    </div>
  );
}
