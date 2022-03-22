import { BrowserRouter, Route } from "react-router-dom";

import { Login } from "../ui/screens";

export function SignRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} />
    </BrowserRouter>
  );
}
