import "./style.css";

export function Order({ ...props }) {
  const { id, address, hour, products, status, onclick } = props;
  const hourCurrent = new Date(hour);
  const hourFormated = hourCurrent.getHours();
  const minutesFormated = hourCurrent.getMinutes();

  function showButtons() {
    if (status === "OPEN" || status === "LOADING") {
      return (
        <button onClick={handleOnClick} className="button-order-green">
          Iniciar
        </button>
      );
    } else if (status === "INITIATED") {
      return (
        <button onClick={handleOnClick} className="button-order-yellow">
          Finalizar
        </button>
      );
    }
  }

  function handleOnClick() {
    onclick(id);
  }

  return (
    <>
      <div className="container-order">
        <div className="order-identity">
          <h3>{`Pedido ${id}`}</h3>
        </div>
        <ul className="order-itens">
          {products.map((x, index) => {
            return (
              <li key={index}>
                <strong>1 </strong>
                {`${x.name}`}
              </li>
            );
          })}
        </ul>
        <div className="container-address-order">
          <h3>Endereço</h3>

          <p>
            Rua: <strong>{address.street}</strong>, nº{" "}
            <strong>{address.number}</strong>
          </p>
          <p>
            Bairro: <strong>{address.district}</strong>
          </p>
          <p>
            Cidade: <strong>{`${address.city}`}</strong>
          </p>
        </div>
        <div className="container-hour">
          <h3>
            Hora:{" "}
            <strong>
              {`${hourCurrent.getHours()}h:`}
              {minutesFormated < 10 ? `0${minutesFormated}m` : minutesFormated}
            </strong>
          </h3>
        </div>
        <div className="container-order-command">{showButtons()}</div>
      </div>
    </>
  );
}
