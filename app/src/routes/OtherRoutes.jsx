import { BrowserRouter, Route } from "react-router-dom";

import { Desktop, QRCodeConfigure } from "../ui/screens";

const OtherRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/desktop" component={Desktop} />
      <Route path="/qrcode-configure" component={QRCodeConfigure} />
    </BrowserRouter>
  );
};

export default OtherRoutes;
