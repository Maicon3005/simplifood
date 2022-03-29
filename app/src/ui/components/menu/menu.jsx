import "./style.css";

import IconOrder from "../../../assets/images/icon-order.svg";
import IconCategorie from "../../../assets/images/icon-categorie.svg";
import IconDelivery from "../../../assets/images/icon-delivery.svg";
import IconWhatsApp from "../../../assets/images/icon-whatsapp.svg";
import IconLogout from "../../../assets/images/icon-logout.svg";

export function Menu() {
  return (
    <div className="menu-bar">
      <ul>
        <li>
          <a href="/desktop">
            <img src={IconOrder} alt="Icone de pedidos" />
            Meus Pedidos
          </a>
        </li>
        <li>
          <a href="/mostrar-categorias">
            <img src={IconCategorie} alt="Icone de pedidos" />
            Minhas Categorias/Produtos
          </a>
        </li>
        <li>
          <a href="/mostrar-categorias">
            <img src={IconDelivery} alt="Icone de pedidos" />
            Entrega
          </a>
        </li>
        <li>
          <a href="/criar-conta-5">
            <img src={IconWhatsApp} alt="Icone de pedidos" />
            Configurar WhatsApp
          </a>
        </li>
        <li>
          <a href="/criar-conta-5">
            <img src={IconLogout} alt="Icone de pedidos" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
