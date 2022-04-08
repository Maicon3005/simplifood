import { useEffect, useState } from "react";
import { useSimplifoodApi } from "../../../services/use-simplifood-api";
import "./style.css";

export function HeaderDefault() {
  const api = useSimplifoodApi();

  const [nameRestaurant, setNameRestaurant] = useState([]);
  useEffect(() => {
    async function loadNameRestaurant() {
      try {
        const response = await api.getRestaurantName();
        setNameRestaurant(response.nameRestaurant);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    loadNameRestaurant();
  }, []);

  return (
    <header className="container-header-default">
      {nameRestaurant ? <h1>{nameRestaurant}</h1> : <p>Carregando...</p>}
    </header>
  );
}
