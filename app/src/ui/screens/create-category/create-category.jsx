import { useState } from "react";
import { SidebarRight } from "../../components";
import { TopMenu } from "../../components/top-menu/top-menu";
import "./style.css";

export function CreateCategory() {
  const [categoryName, setCategoryName] = useState("");

  function handleCategoryName(event) {
    setCategoryName(event.target.value);
    event.preventDefault();
  }

  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <TopMenu />
      <div className="container-main">
        <div className="container-create-category">
          <h1>Cadastrar Categoria</h1>
          <form onSubmit={handleSubmit} className="form-registry-category">
            <input
              id="category"
              className="text-field text-field-large"
              placeholder="Nome da categoria"
              value={categoryName}
              onChange={handleCategoryName}
              type="text"
            />
            <button className="button-blue">Cadastrar</button>
          </form>
        </div>
        <SidebarRight />
      </div>
    </>
  );
}
