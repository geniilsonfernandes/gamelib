import Footer from "./components/Footer/Footer";
import useMedia from "./Hooks/useMedia";
import Router from "./Router/Router";
import "./styles/main.css";
import NavMobile from "./components/Nav/NavMobile/NavMobile";
import NavDesktop from "./components/Nav/NavDesktop/NavDesktop";
import { useLocation } from "react-router";
import AuthRouter from "./Router/AuthRouter";

function App() {
  const { pathname } = useLocation();
  const match = useMedia("(max-width: 850px)");
  console.log(pathname);
  return (
    <>
      {pathname === "/auth" ? (
        <AuthRouter />
      ) : (
        <>
          {match ? <NavMobile /> : <NavDesktop />}
          <Router />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
