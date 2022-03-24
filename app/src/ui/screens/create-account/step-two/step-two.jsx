import { useRef, useState } from "react";
import "./style.css";
import "../../create-account/style.css";
import IconStepTwo from "../../../../assets/images/icon-step-two.svg";

import { SidebarRight } from "../../../components";
import { useHistory } from "react-router-dom";
import { useSimplifoodApi } from "../../../../services/use-simplifood-api";

export function StepTwo() {
  const erroRef = useRef();
  const history = useHistory();
  const api = useSimplifoodApi();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErroMessage] = useState("");

  function handleName(event) {
    setName(event.target.value);
    event.preventDefault();
  }

  function handleLastName(event) {
    setLastName(event.target.value);
    event.preventDefault();
  }

  function handleEmail(event) {
    setEmail(event.target.value);
    event.preventDefault();
  }

  function handlePassword(event) {
    setPassword(event.target.value);
    event.preventDefault();
  }

  function handleConfirmPassword(event) {
    setConfirmPassword(event.target.value);
    event.preventDefault();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErroMessage("As senhas não são iguais");
      return;
    }

    try {
      const response = await api.userSave(name, lastName, email, password);
      const location = { pathname: "/criar-conta-3", state: response.data };
      history.push(location);
    } catch (error) {
      setErroMessage("Erro ", error);
    }
  }

  function handleCheckBox(event) {
    setChecked(!checked);
  }

  return (
    <div className="container-main">
      <div className="sidebar-left sidebar-left-step-two">
        <h1>Queremos te conhecer melhor...</h1>
        <form onSubmit={handleSubmit} className="form-registry-client">
          <input
            id="name"
            className="text-field text-field-medium"
            placeholder="Nome"
            value={name}
            onChange={handleName}
            type="text"
          />
          <input
            id="lastname"
            className="text-field text-field-medium"
            placeholder="Sobrenome"
            value={lastName}
            onChange={handleLastName}
            type="text"
          />
          <input
            id="email"
            className="text-field text-field-medium"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            type="email"
          />
          <input
            id="password"
            className="text-field text-field-medium"
            placeholder="Senha"
            value={password}
            onChange={handlePassword}
            type={checked ? "text" : "password"}
          />
          <input
            id="confirmpassword"
            className="text-field text-field-medium"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            type={checked ? "text" : "password"}
          />
          <p
            ref={erroRef}
            className={errorMessage ? "error-message" : "offscreen"}
            aria-live="assertive"
          >
            {errorMessage}
          </p>
          <label className="checkbox-password">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckBox}
            />
            Mostrar senha
          </label>
          <button className="button-blue button-blue-registry-client">
            Avançar
          </button>
        </form>
        <img
          className="icon-step-two"
          src={IconStepTwo}
          alt="Passo um da criação de conta"
        />
      </div>
      <SidebarRight content="Mais agilidade para você e seus clientes. Com poucos cliques é possível criar um cardápio!" />
    </div>
  );
}
