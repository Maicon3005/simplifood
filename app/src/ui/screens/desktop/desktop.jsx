import "./style.css";
import { useRef } from "react";
import SockJsClient from "react-stomp";

import { Order, TopMenu } from "../../components/";
import { useState } from "react";

export function Desktop() {
  const SOCKET_URL = "http://localhost:8080/ws-message";
  const stompRef = useRef();

  const [order, setOrder] = useState("");

  function onConnect() {
    try {
      console.log("conectado com sucesso");
    } catch (error) {
      console.log(error);
    }
  }

  function onOrderReceived(orderReceived) {
    setOrder(orderReceived);
    console.log(orderReceived);
  }
  return (
    <>
      <SockJsClient
        url={SOCKET_URL}
        topics={["/topic/order"]}
        onConnect={onConnect}
        onMessage={onOrderReceived}
        debug={false}
        ref={stompRef}
      />
      <TopMenu />
      <div className="container-desktop">
        <h1>Área de Trabalho</h1>
      </div>
      <div className="panel-order">
        <div className="scroller">
          <Order />
        </div>
      </div>
    </>
  );
}
