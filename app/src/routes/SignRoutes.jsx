import { BrowserRouter, Route } from "react-router-dom";

import { Login, StepOne, StepTwo } from "../ui/screens";

export function SignRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/criar-conta-1" component={StepOne} exact />
      <Route path="/criar-conta-2" component={StepTwo} exact />
    </BrowserRouter>
  );
}
