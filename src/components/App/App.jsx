import Header from "../global/Header/Header";
import AppRouter from "../../router/AppRouter";
import FooterMenu from "../../components/global/FooterMenu/FooterMenu"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
      <FooterMenu />
    </>
  );
}

export default App;