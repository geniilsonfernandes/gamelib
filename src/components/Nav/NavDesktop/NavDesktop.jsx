import React from "react";
import { useLocation } from "react-router";
import Container from "../../Layout/Container";
import Search from "../../Search/Search";
import NavAuth from "./NavAuth/NavAuth";
import NavLinks from "./NavLinks/NavLinks";
import User from "./User/User";
import styles from "./NavDesktop.module.scss";

function NavDesktop() {
  const { pathname } = useLocation();
  const login = false;

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

export default NavDesktop;
