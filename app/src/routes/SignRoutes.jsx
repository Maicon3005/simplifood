import { BrowserRouter, Route } from "react-router-dom";

import { Login, StepOne } from "../ui/screens";

export function SignRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/criar-conta-1" component={StepOne} exact/>
    </BrowserRouter>
  );
}
