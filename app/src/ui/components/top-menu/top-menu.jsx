import "./style.css";
import logo from "../../../assets/images/logo.svg";
import IconHamburger from "../../../assets/images/icon-hamburger.svg";
import { useState } from "react";
import { Menu } from "..";

export function TopMenu({ ...props }) {
  const [checked, setChecked] = useState(false);

  function handleCheckBox() {
    setChecked(!checked);
  }

  return (
    <>
      <header className="container-menu">
        <div className="container-menu-left">
          <input
            id="checkbox"
            type="checkbox"
            checked={checked}
            onChange={handleCheckBox}
          />
          <label htmlFor="checkbox">
            <img src={IconHamburger} alt="Icone hamburguer" />
          </label>
          <img src={logo} className="logo-menu" alt="imagem da logomarca" />
        </div>
        <button
          className={`btn-add-menu ${
            !props.setVisibleButton && "show-component"
          }`}
          onClick={() => props.onclick()}
        >
          Add
        </button>
      </header>
      {checked && <Menu />}
    </>
  );
}
