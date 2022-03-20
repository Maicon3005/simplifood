import { useEffect, useState } from "react";

import { BotaoAzul } from "..";
import api from "../../../services/api";

export function QRCode() {
  const [tokenWpp, setTokenWpp] = useState({});
  const [qrcode, setQrcode] = useState("");

  async function getTokenWpp() {
    try {
      const response = await api.post("/generatetoken", {});
      setTokenWpp(response.data.token);
      localStorage.setItem("@WppToken", response.data.token);
      console.log("reponse generate token ", response.data);
      await startSession();
      console.log(JSON.stringify(tokenWpp));
    } catch (error) {
      console.log("deu ruim na caminhada");
    }
  }

  async function startSession() {
    try {
      const response = await api.post("/startsession", {
        token: `Bearer ${tokenWpp}`,
      });
      console.log("start session response ", response.data);
      getQRCode();
    } catch (error) {
      console.log("deu ruim na caminhada");
    }
  }

  async function getQRCode() {
    try {
      const response = await api.post("/getqrcode", {
        token: `Bearer ${tokenWpp}`,
      });

      console.log("qr code recebido ",response.data.qrcode);

      if (response.qrcode !== null) {
        setQrcode(response.data.qrcode);
      }

      console.log(qrcode);
    } catch (error) {
      console.log("deu ruim na caminhada");
    }
  }

  return (
    <div>
      {qrcode && <p>{qrcode}</p>}
      <BotaoAzul conteudo="Iniciar" onclick={getTokenWpp} />
    </div>
  );
}
