import Header from "../global/Header/Header"
import { useLocation } from "react-router-dom";
import AppRouter from "../../router/AppRouter";

function App() {
  return (
    <div className="container">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;