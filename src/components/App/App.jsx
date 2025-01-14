import Header from "../global/Header/Header";
import AppRouter from "../../router/AppRouter";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </>
  );
}

export default App;