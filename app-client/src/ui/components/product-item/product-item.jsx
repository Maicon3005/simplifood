import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./style.css";

export function ProductItem({ ...props }) {
  const history = useHistory();

  const { id, urlImage, productName, description, quantity, price } = props;

  function handleOnClickItem(event) {
    event.preventDefault();
    const location = {
      pathname: "mostrar-produto",
      idProduct: id,
    };
    history.push(location);
  }

  return (
    <li className="container-item-product" onClick={handleOnClickItem}>
      <div className="container-item-image">
        <img src={urlImage} alt={productName} />
      </div>
      <div className="container-item-data">
        <h3>{productName}</h3>
        <p>{description}</p>
      </div>
      <div className="price-item">
        <p>
          <strong>{`R$ ${price.toFixed(2)}`}</strong>
        </p>
      </div>
    </li>
  );
}
