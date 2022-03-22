import "./style.css";
import { useRef, useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";

import { SidebarRightLogin } from "../../components";
import IconeFacebook from "../../../assets/images/icon-facebook.svg";
import IconeGoogle from "../../../assets/images/icon-google.svg";
import IconeLinkedin from "../../../assets/images/icon-linkedin.svg";
import IconOu from "../../../assets/images/icon-ou.svg";

import AuthContext from "../../../context/auth";

export function Login() {
  const context = useContext(AuthContext);
  const emailRef = useRef();
  const erroRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [isRedirect, setIsRedirect] = useState({ redirect: false });

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setMensagemErro("");
  }, [email, password]);

  function handleEmail(event) {
    setEmail(event.target.value);
    event.preventDefault();
  }

  function handlePassword(event) {
    setPassword(event.target.value);
    event.preventDefault();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      context.Login(email, password);
      setIsRedirect({ redirect: true });
    } catch (erro) {
      if (!erro?.response) {
        setMensagemErro("Sem resposta do servidor");
      } else if (erro.response?.status === 400) {
        setMensagemErro("Faltou o email ou a senha");
      } else if (erro.response?.status === 401) {
        setMensagemErro("Não autorizado");
      } else {
        setMensagemErro("Email ou senha inválidos");
      }
      erroRef.current.focus();
    }
  }

  return (
    <>
      {isRedirect.redirect && <Redirect to="/desktop" />}
      <div className="container-main">
        <div className="sidebar-left">
          <h1 className="default-title">Entrar na sua conta</h1>
          <h3 className="default-subtitle">Entre com suas redes sociais</h3>
          <div className="buttons-social-network">
            <button className="button-social-network">
              <img src={IconeFacebook} alt="Botão acessar com Facebook" />
            </button>
            <button className="button-social-network">
              <img src={IconeGoogle} alt="Botão acessar com Google" />
            </button>
            <button className="button-social-network">
              <img src={IconeLinkedin} alt="Botão acessar com Linkedin" />
            </button>
          </div>
          <img
            src={IconOu}
            className="divider-page"
            alt="Icone de escolha do login"
          />
          <p
            ref={erroRef}
            className={mensagemErro ? "error-message" : "offscreen"}
            aria-live="assertive"
          >
            {mensagemErro}
          </p>
          <form onSubmit={handleSubmit} className="form-login">
            <input
              id="email"
              ref={emailRef}
              className="text-field"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              type="email"
              required
            />
            <input
              id="password"
              className="text-field"
              placeholder="Senha"
              value={password}
              onChange={handlePassword}
              type="password"
              required
            />
            <button className="button-blue">Entrar</button>
          </form>
        </div>
        <SidebarRightLogin />
      </div>
    </>
  );
}
