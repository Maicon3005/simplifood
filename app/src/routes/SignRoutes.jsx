import { BrowserRouter, Route } from "react-router-dom";

import {
  Login,
  StepFive,
  StepFour,
  StepOne,
  StepThree,
  StepTwo,
} from "../ui/screens";

export function SignRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/criar-conta-1" component={StepOne} exact />
      <Route path="/criar-conta-2" component={StepTwo} exact />
      <Route path="/criar-conta-3" component={StepThree} exact />
      <Route path="/criar-conta-4" component={StepFour} exact />
      <Route path="/criar-conta-5" component={StepFive} exact />
    </BrowserRouter>
  );
}
