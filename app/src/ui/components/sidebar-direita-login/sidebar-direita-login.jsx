import "./style.css";
import logo from "../../../assets/images/logo.svg";
import { BotaoBranco } from "..";

export function SidebarDireitaLogin() {
  return (
    <aside className="sidebar-direita">
      <img src={logo} className="imagem-logo" alt="imagem da logomarca" />
      <div className="mensagem-lateral">
        <p>
          Crie uma conta e descubra um mundo de possibilidades para seu negócio!
        </p>
      </div>
      <BotaoBranco />
    </aside>
  );
}
