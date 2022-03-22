import { useContext } from "react";
import AuthContext from "../context/auth";

import { SignRoutes } from "./SignRoutes";
import { OtherRoutes } from "./OtherRoutes";

export function Routes() {
  const { signed } = useContext(AuthContext);

  return signed ? <OtherRoutes /> : <SignRoutes />;
}
