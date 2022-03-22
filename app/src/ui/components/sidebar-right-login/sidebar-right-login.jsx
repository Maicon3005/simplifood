import "./style.css";
import logo from "../../../assets/images/logo.svg";
import { ButtonWhite } from "..";

export function SidebarRightLogin() {
  return (
    <aside className="sidebar-right">
      <img src={logo} className="image-logo" alt="imagem da logomarca" />
      <div className="side-message">
        <p>
          Crie uma conta e descubra um mundo de possibilidades para seu negócio!
        </p>
      </div>
      <ButtonWhite />
    </aside>
  );
}
