import "./style.css";
import { BotaoAzul, QRCode, TopMenu } from "../../components";
import { SidebarRight } from "../../components";

export function QRCodeConfigure() {
  return (
    <div className="container-qrcode-configure">
      <TopMenu />
      <div className="page-qrcode-configure">
        <div className="section-qrcode-configure">
          <h1 className="title-qrcode-configure">
            Configurar o WhatsApp do seu estabelecimento
          </h1>
          <p className="content-qrcode-configure">
            Utilize o leitor de QR CODE do WhatsApp de seu estabelecimento para
            se registrar na plataforma Simplifood.
          </p>
          <QRCode />
        </div>
        <SidebarRight />
      </div>
    </div>
  );
}
