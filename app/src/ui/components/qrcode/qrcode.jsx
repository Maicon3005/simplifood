import "./style.css";
import { useState } from "react";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";
import { useEffect } from "react";

export function QRCode() {
  const api = useSimplifoodApi();

  const [tokenWpp, setTokenWpp] = useState({});
  const [qrcode, setQrcode] = useState("");

  useEffect(() => {
    async function loadTokenWpp() {
      const response = await api.postTokenWpp();
      setTokenWpp(`Bearer ${response.data.token}`);
    }

    loadTokenWpp();
  }, []);

  async function startSession() {
    const response = await api.startSession(tokenWpp);
    console.log(response);
    if (response.data.status === "QRCODE") {
      setQrcode(response.data.QRCode);
    }
    console.log(response);
  }

  async function postQRCode() {
    const response = await api.postQRCode(tokenWpp);
    if (response.status === "QRCODE") {
      setQrcode(response.QRCode);
    }
    console.log(response);
  }

  return (
    <div className="container-qrcode">
      {qrcode ? (
        <img className="qrcode-image" src={qrcode} />
      ) : (
        <button className="button-blue" onClick={startSession}>
          Configurar WhatsApp
        </button>
      )}
    </div>
  );
}
