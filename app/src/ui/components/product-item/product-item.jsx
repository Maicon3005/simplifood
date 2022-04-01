import "./style.css";

import BtnRemove from "../../../assets/images/btn-remove-item.svg";
import BtnEdit from "../../../assets/images/btn-edit-item.svg";
import { useHistory } from "react-router-dom";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";

export function ProductItem({ ...props }) {
  const {
    id,
    urlImage,
    productName,
    quantity,
    price,
    description,
    categoryId,
    categoryName,
  } = props;
  const history = useHistory();
  const api = useSimplifoodApi();

  function handleEdit(event) {
    event.preventDefault();

    const location = {
      pathname: "/atualizar-produto",
      idCategory: categoryId,
      idProduct: id,
      categoryName: categoryName,
    };
    history.push(location);
  }

  async function handleDelete(event) {
    event.preventDefault();
    try {
      const response = await api.deleteProduct(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-item-product">
      <div className="container-image-product">
        <div className="product-image">
          <img src={urlImage} alt="Imagem do produto" />
        </div>
      </div>
      <div className="content-product">
        <div className="content-product-upper">
          <h3>{productName}</h3>
          <p>{quantity}</p>
          <p>{`R$ ${price}`}</p>
          <div className="btn-product-item">
            <button className="btn-item" onClick={handleEdit}>
              <img src={BtnEdit} alt="Botão editar item" />
            </button>
            <button className="btn-item" onClick={handleDelete}>
              <img src={BtnRemove} alt="Botão remover item" />
            </button>
          </div>
        </div>
        <div className="content-product-bottom">{description}</div>
      </div>
    </div>
  );
}
