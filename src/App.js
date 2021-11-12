import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Navegation from "./components/Nav/Navegation";
import useMedia from "./Hooks/useMedia";
import Router from "./Router/Router";
import "./styles/main.css";
import NavMobile from "./components/Nav/NavMobile/NavMobile";
function App() {
  const match = useMedia("(max-width: 850px)");
  useEffect(() => {
    console.log(match);
  }, [match]);
  return (
    <>
      {match ? <NavMobile /> : <Navegation />}
      <Router />
      <Footer />
    </>
  );
}

export default App;
