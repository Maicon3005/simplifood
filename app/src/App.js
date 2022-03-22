import Routes from "./routes";
import { useHistory } from "react-router-dom";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <Routes />;
    </AuthProvider>
  );
}

export default App;
