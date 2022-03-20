import "./style.css";
import logo from "../../../assets/images/logo.svg";

export function TopMenu() {
  return (
    <div className="container-menu">
      <img src={logo} className="logo-menu" alt="imagem da logomarca" />
    </div>
  );
}
