import "./style.css";
import logo from "../../../assets/images/logo.svg";

export function SidebarRight(props) {
  const { content } = props;
  return (
    <div className="sidebar-right">
      <img src={logo} className="image-logo" alt="imagem da logomarca" />
      <div className="side-message">
        <p>{content}</p>
      </div>
    </div>
  );
}
