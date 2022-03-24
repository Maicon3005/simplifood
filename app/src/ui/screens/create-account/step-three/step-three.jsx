import { useState } from "react";
import "./style.css";
import "../../create-account/style.css";
import IconStepThree from "../../../../assets/images/icon-step-three.svg";

import { SidebarRight } from "../../../components";

export function StepThree() {
  const [corporateName, setCorporateName] = useState("");
  const [fantasyName, setFantasyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");

  function handleCorporateName(event) {
    setCorporateName(event.target.value);
    event.preventDefault();
  }

  function handleFantasyName(event) {
    setFantasyName(event.target.value);
    event.preventDefault();
  }

  function handleCnpj(event) {
    setCnpj(event.target.value);
    event.preventDefault();
  }

  function handleCep(event) {
    setCep(event.target.value);
    event.preventDefault();
  }

  function handleCity(event) {
    setCity(event.target.value);
    event.preventDefault();
  }

  function handleState(event) {
    setState(event.target.value);
    event.preventDefault();
  }

  function handleDistrict(event) {
    setDistrict(event.target.value);
    event.preventDefault();
  }

  function handleStreet(event) {
    setStreet(event.target.value);
    event.preventDefault();
  }

  function handleNumber(event) {
    setNumber(event.target.value);
    event.preventDefault();
  }

  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container-main">
      <div className="sidebar-left sidebar-left-step-three">
        <h1>Sobre seu estabelecimento...</h1>
        <form onSubmit={handleSubmit} className="form-registry-restaurant">
          <input
            id="corporateName"
            className="text-field text-field-large"
            placeholder="Razão Social"
            value={corporateName}
            onChange={handleCorporateName}
            type="text"
          />
          <input
            id="fantasyName"
            className="text-field text-field-large"
            placeholder="Nome fantasia"
            value={fantasyName}
            onChange={handleFantasyName}
            type="text"
          />
          <input
            id="cnpj"
            className="text-field text-field-large"
            placeholder="CNPJ"
            value={cnpj}
            onChange={handleCnpj}
            type="text"
          />
          <div className="cep-search">
            <input
              id="cep"
              className="text-field text-field-medium"
              placeholder="CEP"
              value={cep}
              onChange={handleCep}
              type="text"
            />
            <button className="button-blue">Consultar</button>
          </div>
          <div className="city-state">
            <input
              id="city"
              className="text-field field-left"
              placeholder="Cidade"
              value={city}
              onChange={handleCity}
              type="text"
            />
            <input
              id="state"
              className="text-field field-right"
              placeholder="Estado"
              value={state}
              onChange={handleState}
              type="text"
            />
          </div>
          <input
            id="district"
            className="text-field text-field-large"
            placeholder="Bairro"
            value={district}
            onChange={handleDistrict}
            type="text"
          />
          <div className="street-number">
            <input
              id="street"
              className="text-field field-left"
              placeholder="Rua"
              value={street}
              onChange={handleStreet}
              type="text"
            />
            <input
              id="number"
              className="text-field field-right"
              placeholder="Number"
              value={number}
              onChange={handleNumber}
              type="text"
            />
          </div>
          <button className="button-blue">
            Avançar
          </button>
        </form>
        <img
          className="icon-step-three"
          src={IconStepThree}
          alt="Passo um da criação de conta"
        />
      </div>
      <SidebarRight content="Mais agilidade para você e seus clientes. Com poucos cliques é possível criar um cardápio!" />
    </div>
  );
}
