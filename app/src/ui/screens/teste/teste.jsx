import React, { useState } from "react";
import SockJsClient from "react-stomp";

export function Teste() {
  const SOCKET_URL = "http://localhost:8080/wss-message";
  const TOKEN_API = localStorage.getItem("@App:token");
  const obj = {
    url: SOCKET_URL,
    headers: { Authorization: TOKEN_API },
  };

  const [message, setMessage] = useState("You server message here.");

  let onConnected = () => {
    console.log("Connected!!");
  };

  let onMessageReceived = (msg) => {
    setMessage(msg.message);
  };

  return (
    <div>
      <SockJsClient
        url={SOCKET_URL}
        topics={["/topic/message"]}
        onConnect={onConnected}
        onDisconnect={console.log("Disconnected!")}
        onMessage={(msg) => onMessageReceived(msg)}
        debug={false}
      />
      <div>{message}</div>
    </div>
  );
}
