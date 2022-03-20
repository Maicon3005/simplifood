import "./style.css";
import { BotaoAzul, QRCode, TopMenu } from "../../components";
import { SidebarRight } from "../../components";

export function QRCodeConfigure() {
  return (
    <div className="container-qrcode">
      <TopMenu />
      <div className="page-qrcode">
        <div className="section-qrcode">
          <h1 className="title-qrcode">Configurar o WhatsApp do seu estabelecimento</h1>
          <p className="content-qrcode">
            Utilize o leitor de QR CODE do WhatsApp de seu estabelecimento para
            se registrar na plataforma Simplifood.
          </p>
          <div>
              <QRCode />
          </div>
        </div>
        <SidebarRight />
      </div>
    </div>
  );
}
