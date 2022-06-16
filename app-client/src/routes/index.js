import { BrowserRouter, Route } from "react-router-dom";
import {
  AddPhone,
  Carte,
  OrderAddress,
  OrderDetail,
  ShowDetailProduct,
} from "../ui/screens";
import { ReturnToCarte } from "../ui/screens/return-to-carte/return-to-carte";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Carte} exact />
      <Route path="/mostrar-produto" component={ShowDetailProduct} exact />
      <Route path="/mostrar-pedido" component={OrderDetail} exact />
      <Route path="/cadastro-endereco" component={OrderAddress} exact />
      <Route path="/adicionar-fone" component={AddPhone} exact />
      <Route path="/retornar-cardapio" component={ReturnToCarte} exact />
    </BrowserRouter>
  );
}
