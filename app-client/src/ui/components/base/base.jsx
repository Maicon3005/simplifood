import "./style.css";

import { Header } from "..";

export function Base({ children }) {
  return (
    <div className="screen-base">
      <Header />
      <main className="container-main">{children}</main>
    </div>
  );
}
