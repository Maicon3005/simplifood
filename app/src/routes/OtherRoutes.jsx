import { BrowserRouter, Route } from "react-router-dom";

import { Desktop, QRCodeConfigure, StepFive, StepFour, StepThree } from "../ui/screens";

export function OtherRoutes() {
  return (
    <BrowserRouter>
      <Route path="/desktop" component={Desktop} exact />
      <Route path="/qrcode-configure" component={QRCodeConfigure} exact />
      <Route path="/criar-conta-3" component={StepThree} exact />
      <Route path="/criar-conta-4" component={StepFour} exact />
      <Route path="/criar-conta-5" component={StepFive} exact />
    </BrowserRouter>
  );
}
