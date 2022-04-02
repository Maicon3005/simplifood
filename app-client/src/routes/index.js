import { BrowserRouter, Route } from "react-router-dom";
import { Carte } from "../ui/screens";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Carte} />
    </BrowserRouter>
  );
}
