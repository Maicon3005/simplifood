import { BrowserRouter, Route } from "react-router-dom";

import { Desktop, QRCodeConfigure, CreateAccount } from "../ui/screens";

export function OtherRoutes() {
  return (
    <BrowserRouter>
      <Route path="/desktop" component={Desktop} exact />
      <Route path="/qrcode-configure" component={QRCodeConfigure} exact />
    </BrowserRouter>
  );
}
