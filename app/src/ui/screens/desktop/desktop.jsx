import "./style.css";

import { Order, TopMenu } from "../../components/";

export function Desktop() {
  return (
    <>
      <TopMenu />
      <div className="container-desktop">
        <h1>Área de Trabalho</h1>
      </div>
      <div className="panel-order">
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </>
  );
}
