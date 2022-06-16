import "./style.css";
import "../../create-account/style.css";
import IconStepFive from "../../../../assets/images/icon-step-five.svg";
import IconOu from "../../../../assets/images/icon-ou.svg";
import { SidebarRight } from "../../../components";
import { Redirect } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { useSimplifoodApi } from "../../../../services/use-simplifood-api";
import { useEffect, useState } from "react";

export function StepFive() {
  const api = useSimplifoodApi();
  const history = useHistory();

  const [tokenWpp, setTokenWpp] = useState({});
  const [qrcode, setQrcode] = useState("");
  const [isRedirect, setIsRedirect] = useState({ redirect: false });
  const [progress, setProgress] = useState(0);
  let isConnected = false;
  let isQrcode = false;

  useEffect(() => {
    async function loadTokenWpp() {
      try {
        const response = await api.postTokenWpp();
        setTokenWpp(`Bearer ${response.data.token}`);
        localStorage.setItem("@Wpp:token", response.data.token);
      } catch (error) {
        console.log(error);
      }
    }

    loadTokenWpp();
  }, [api]);

  useEffect(() => {
    return () => clearTimeout();
  }, []);

  async function startSession() {
    setProgress(1);
    try {
      while (!isConnected) {
        console.log("dentro do start session while");
        await Promise.all([await getQrcode(), timeout(1000)]);
        statusSessionTimer();
        isQrcode && setProgress(2);
      }
      setIsRedirect({ redirect: true });
    } catch (error) {
      console.log(error);
    }
  }

  async function getQrcode() {
    const response = await api.startSession(tokenWpp);
    console.log("response do start session ", response);
    if (response.data.status === "QRCODE") {
      setQrcode(response.data.qrcode);
      isQrcode = true;
    }
  }

  async function statusSessionTimer() {
    try {
      await Promise.all([await getStatusSession(), timeout(1000)]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getStatusSession() {
    try {
      const response = await api.statusSession(tokenWpp);
      console.log("response tester final ", response);
      isConnected = response.status;
    } catch (error) {
      console.log(error);
    }
  }

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function handleSkipStep() {
    history.push("/desktop");
  }

  function showController() {
    if (progress === 0) {
      return (
        <>
          <h1>Para integrar o WhatsApp do seu estabelecimento</h1>
          <p>
            Utilize o leitor de QR CODE do WhatsApp de seu estabelecimento para
            se registrar na plataforma Simplifood.
          </p>
          <div className="option-qrcode">
            <button className="button-blue" onClick={startSession}>
              Configurar QR Code
            </button>
            <img
              src={IconOu}
              className="divider-page divider-page-large"
              alt="Icone de escolha do login"
            />
            <button className="button-white-blue" onClick={handleSkipStep}>
              Pular etapa
            </button>
          </div>
        </>
      );
    } else if (progress === 1) {
      return (
        <>
          <div className="load-wrapper">
            <div className="loader">
              <div className="loader loader-inner"></div>
            </div>
          </div>
          <p>Carregando QR code...</p>
        </>
      );
    } else if (progress === 2) {
      return (
        <>
          <h1>Para integrar o WhatsApp do seu estabelecimento</h1>
          <p>
            Utilize o leitor de QR CODE do WhatsApp de seu estabelecimento para
            se registrar na plataforma Simplifood.
          </p>
          <img src={qrcode} alt="Imagem QR code" />
          );
        </>
      );
    }
  }

  return (
    <>
      {isRedirect.redirect && <Redirect to="/desktop" />}
      <div className="container-main">
        <div className="sidebar-left sidebar-left-step-five">
          {showController()}
          {progress != 1 && (
            <img
              className="icon-step-four"
              src={IconStepFive}
              alt="Passo um da criação de conta"
            />
          )}
        </div>
        <SidebarRight content="Com o nosso suporte você vai conseguir produzir muito mais em menos tempo!" />
      </div>
    </>
  );
}
