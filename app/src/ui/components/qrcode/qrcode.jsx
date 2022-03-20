import { useEffect, useState } from "react";
import api from "../../../services/api";

export function QRCode() {
  const [tokenWpp, setTokenWpp] = useState({});

  useEffect(() => {
    getTokenWpp();
  }, []);

  async function getTokenWpp() {
    try {
      const response = await api.post("/gettoken", {});
      setTokenWpp(response.data.token);
      localStorage.setItem(
        "@WppToken",
        `Bearer ${JSON.stringify(response.data.token)}`
      );
      console.log(response.data.token);
    } catch (error) {
      console.log("deu ruim na caminhada");
    }
  }

  return (
    <div>
      <p>teste</p>
    </div>
  );
}
