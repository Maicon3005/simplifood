import Routes from "./routes";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider value={{ signed: true }}>
      <Routes />;
    </AuthProvider>
  );
}

export default App;
