import "./style.css";
import { BotaoAzul, SidebarDireitaLogin } from "../../components";
import IconeFacebook from "../../../assets/images/icon-facebook.svg";
import IconeGoogle from "../../../assets/images/icon-google.svg";
import IconeLinkedin from "../../../assets/images/icon-linkedin.svg";
import IconOu from "../../../assets/images/icon-ou.svg";
import { useRef, useState, useEffect, useContext } from "react";

import AuthContext from "../../../context/auth";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const URL_LOGIN = "/login";

export function Login() {
  const context = useContext(AuthContext);
  const emailRef = useRef();
  const erroRef = useRef();
  //const UseHistory = useHistory();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setMensagemErro("");
  }, [email, senha]);

  function handleEmail(event) {
    setEmail(event.target.value);
    event.preventDefault();
  }

  function handleSenha(event) {
    setSenha(event.target.value);
    event.preventDefault();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      context.Login(email, senha);
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

    setSucesso(true);
  }

  return (
    <div className="container-principal">
      <div className="sidebar-esquerda">
        <h1 className="titulo-padrao">Entrar na sua conta</h1>
        <h3 className="subtitle-padrao">Entre com suas redes sociais</h3>
        <div className="botoes-rede-social">
          <button className="botao-rede-social">
            <img src={IconeFacebook} alt="Botão acessar com Facebook" />
          </button>
          <button className="botao-rede-social">
            <img src={IconeGoogle} alt="Botão acessar com Google" />
          </button>
          <button className="botao-rede-social">
            <img src={IconeLinkedin} alt="Botão acessar com Linkedin" />
          </button>
        </div>
        <img
          src={IconOu}
          className="divisor-pagina"
          alt="Icone de escolha do login"
        />
        <p
          ref={erroRef}
          className={mensagemErro ? "erro-mensagem" : "offscreen"}
          aria-live="assertive"
        >
          {mensagemErro}
        </p>
        <form onSubmit={handleSubmit} className="form-login">
          <input
            id="email"
            ref={emailRef}
            className="campo-texto"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            type="email"
            required
          />
          <input
            id="senha"
            className="campo-texto"
            placeholder="Senha"
            value={senha}
            onChange={handleSenha}
            type="password"
            required
          />
          <BotaoAzul conteudo="Entrar" />
        </form>
      </div>
      <SidebarDireitaLogin />
    </div>
  );
}
