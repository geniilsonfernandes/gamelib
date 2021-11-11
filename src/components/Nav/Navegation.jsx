import React, { useState } from "react";
import styles from "./Navegation.module.scss";
import Container from "../Layout/Container";
import Search from "../Search/Search";
import User from "./User/User";
import NavLinks from "./NavLinks/NavLinks";
import NavAuth from "./NavAuth/NavAuth";
import { useLocation } from "react-router";

function Navegation() {
  const { pathname } = useLocation();
  const [login, setLogin] = useState(false);

  return (
    <nav className={styles.nav} data-home={pathname === "/"}>
      <Container className={styles.nav__item}>
        <div className={styles.right}>
          <NavLinks />
        </div>
        <Search />
        <div className={styles.left}>{login ? <User /> : <NavAuth />}</div>
      </Container>
    </nav>
  );
}

export default Navegation;
