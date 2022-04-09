import "./style.css";

export function OrderItem({ ...props }) {
  const { nameProduct, priceProduct, urlImage } = props;

  return (
    <div className="container-order-items">
      <div className="container-order-item-description">
        <h3>{nameProduct}</h3>
        <p>{`R$ ${priceProduct.toFixed(2)}`}</p>
      </div>
      <div className="container-order-item-image">
        <div className="order-item-image-background">
          <img src={urlImage} alt={nameProduct} />
        </div>
      </div>
    </div>
  );
}
