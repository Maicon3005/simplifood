import { BrowserRouter, Route } from "react-router-dom";

import { Login } from "../ui/screens";

const SignRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} />
    </BrowserRouter>
  );
};

export default SignRoutes;
