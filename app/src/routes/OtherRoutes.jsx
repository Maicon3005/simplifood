import { BrowserRouter, Route } from "react-router-dom";

import {
  CreateCategory,
  CreateProduct,
  Desktop,
  QRCodeConfigure,
  ShowCategory,
  ShowProducts,
  StepFive,
  StepFour,
  StepThree,
} from "../ui/screens";

export function OtherRoutes() {
  return (
    <BrowserRouter>
      <Route path="/desktop" component={Desktop} exact />
      <Route path="/qrcode-configure" component={QRCodeConfigure} exact />
      <Route path="/criar-conta-3" component={StepThree} exact />
      <Route path="/criar-conta-4" component={StepFour} exact />
      <Route path="/criar-conta-5" component={StepFive} exact />
      <Route path="/mostrar-categorias" component={ShowCategory} exact />
      <Route path="/criar-categoria" component={CreateCategory} exact />
      <Route path="/criar-produto" component={CreateProduct} exact />
      <Route path="/mostrar-produtos" component={ShowProducts} exact />
    </BrowserRouter>
  );
}
