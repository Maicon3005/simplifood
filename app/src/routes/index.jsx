import { useContext } from "react";
import AuthContext from "../context/auth";

import SignRoutes from "./SignRoutes";
import OtherRoutes from "./OtherRoutes";

const Routes = () => {
  //const { signed } = useContext(AuthContext);

  const signed = true;

  //console.log("signed: ", signed);

 return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;
