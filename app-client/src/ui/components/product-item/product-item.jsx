import "./style.css";

export function ProductItem({ ...props }) {
  const { id, urlImage, productName, description, quantity, price } = props;

  return (
    <li className="container-item-product">
      <div className="container-item-image">
        <img src={urlImage} alt={productName} />
      </div>
      <div className="container-item-data">
        <h3>{productName}</h3>
        <p>{description}</p>
      </div>
      <div className="price-item">
        <p>
          <strong>{`R$ ${price}`}</strong>
        </p>
      </div>
    </li>
  );
}
