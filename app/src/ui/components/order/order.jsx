import "./style.css";

export function Order({ ...props }) {
  const { id, address, hour, products } = props;

  return (
    <>
      <div className="container-order">
        <div className="order-identity">
          <h3>{`Pedido ${id}`}</h3>
        </div>
        <ul className="order-itens">
          {products.map((x, index) => {
            return <li key={index}><strong>1 </strong>{`${x.name}`}</li>;
          })}
        </ul>
        <div className="container-address-order">
          <h3>Endereço</h3>

          <p>
            Rua: <strong>{address.street}</strong>, nº <strong>{address.number}</strong>
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
            Hora: <strong>{hour}</strong>
          </h3>
        </div>
        <div className="container-order-command">
          <button className="button-order">Iniciar</button>
        </div>
      </div>
    </>
  );
}
