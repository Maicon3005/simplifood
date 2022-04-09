import { BrowserRouter, Route } from "react-router-dom";
import { Carte, OrderDetail, ShowDetailProduct } from "../ui/screens";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Carte} exact />
      <Route path="/mostrar-produto" component={ShowDetailProduct} exact />
      <Route path="/mostrar-pedido" component={OrderDetail} exact />
    </BrowserRouter>
  );
}
