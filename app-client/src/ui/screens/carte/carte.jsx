import { useEffect, useState } from "react";
import { Base } from "../../components/";
import "./style.css";

export function Carte() {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    setCategorys([
      { id: "1", category: "Lanches" },
      { id: "2", category: "Massas" },
      { id: "3", category: "Escondidinhos" },
      { id: "4", category: "Bebidas" },
    ]);
  }, []);
  return (
    <Base>
      <div className="container-carte">
        <ul className="container-categories">
          {categorys.map((category) => (
            <li className="container-category" key={category.id}>
              <h3>{category.category}</h3>
            </li>
          ))}
        </ul>
      </div>
    </Base>
  );
}
