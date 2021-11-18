import React from "react";
import { useLocation } from "react-router";
import Container from "../../Layout/Container";
import Search from "../../Search/Search";
import NavAuth from "./NavAuth/NavAuth";
import NavLinks from "./NavLinks/NavLinks";
import User from "./User/User";
import styles from "./NavDesktop.module.scss";
import { useUser } from "../../../Context/User";

function NavDesktop() {
  const { pathname } = useLocation();
  const ishome = pathname === "/";
  const { login } = useUser();
  return (
    <nav className={styles.nav} data-home={ishome}>
      <Container className={styles.nav__item}>
        <div className={styles.right}>
          <NavLinks />
        </div>
        {!ishome && <Search />}
        <div className={styles.left}>{login ? <User /> : <NavAuth />}</div>
      </Container>
    </nav>
  );
}

export default NavDesktop;
