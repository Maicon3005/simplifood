import "./style.css";
import logo from "../../../assets/images/logo.svg";

export function TopMenu({ ...props }) {
  return (
    <header className="container-menu">
      <img src={logo} className="logo-menu" alt="imagem da logomarca" />
      <button
        className={`btn-add-menu ${
          !props.setVisibleButton && "show-component"
        }`}
        onClick={() => props.onclick()}
      >
        Add
      </button>
    </header>
  );
}
