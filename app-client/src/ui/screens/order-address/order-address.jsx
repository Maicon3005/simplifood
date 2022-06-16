import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";
import { Base, HeaderDefault } from "../../components";
import "./style.css";

export function OrderAddress() {
  const api = useSimplifoodApi();
  const history = useHistory();
  const ORDER_ID = localStorage.getItem("@IdOrder");

  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");

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

  async function handleSearchCep(event) {
    event.preventDefault();
    try {
      const response = await api.getAddress(cep);
      const address = response.data;
      setCity(address.localidade);
      setState(address.uf);
      setDistrict(address.bairro);
      setStreet(address.logradouro);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = api.addAddressToOrder(
        ORDER_ID,
        cep,
        city,
        state,
        district,
        street,
        number
      );
      console.log("Adicionou endeço a ordem");
      history.push("/adicionar-fone");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Base>
      <HeaderDefault />
      <div className="container-address">
        <h3>Por favor, preencha o seu endereço!</h3>
        <form className="form-address" onSubmit={handleSubmit}>
          <div className="address-cep-search">
            <input
              id="cep"
              placeholder="CEP"
              value={cep}
              onChange={handleCep}
              type="text"
            />
            <button className="button-blue" onClick={handleSearchCep}>
              Consultar
            </button>
          </div>
          <input
            id="city"
            placeholder="Cidade"
            className="input-city"
            value={city}
            onChange={handleCity}
            type="text"
          />
          <div className="address-two-fields">
            <input
              id="street"
              placeholder="Rua"
              className="address-firsfield"
              value={street}
              onChange={handleStreet}
              type="text"
            />
            <input
              id="number"
              className="second-field"
              placeholder="Nº"
              value={number}
              onChange={handleNumber}
              type="text"
            />
          </div>
          <div className="address-two-fields">
            <input
              id="district"
              className="address-firsfield"
              placeholder="Bairro"
              value={district}
              onChange={handleDistrict}
              type="text"
            />
            <input
              id="state"
              className="second-field"
              placeholder="UF"
              value={state}
              onChange={handleState}
              type="text"
            />
          </div>
          <button className="button-submit-address">Continuar</button>
        </form>
      </div>
    </Base>
  );
}
