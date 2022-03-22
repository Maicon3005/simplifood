import { useContext } from "react";
import AuthContext from "../context/auth";

import SignRoutes from "./SignRoutes";
import OtherRoutes from "./OtherRoutes";

const Routes = () => {
  const { signed } = useContext(AuthContext);

  console.log("valor signed route ", signed);

  return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;
