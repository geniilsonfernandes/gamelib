import Footer from "./components/Footer/Footer";
import useMedia from "./Hooks/useMedia";
import Router from "./Router/Router";
import "./styles/main.css";
import NavMobile from "./components/Nav/NavMobile/NavMobile";
import NavDesktop from "./components/Nav/NavDesktop/NavDesktop";

function App() {
  const match = useMedia("(max-width: 850px)");

  return (
    <>
      {match ? <NavMobile /> : <NavDesktop />}
      <Router />
      <Footer />
    </>
  );
}

export default App;
