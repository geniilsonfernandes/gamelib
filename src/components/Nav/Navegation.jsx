import React from "react";
import styles from "./Navegation.module.scss";
import Container from "../Layout/Container";
import Search from "../Search/Search";
import User from "./User/User";
import NavLinks from "./NavLinks/NavLinks";

function Navegation() {
  return (
    <nav className={styles.nav}>
      <Container ClassCss={styles.nav__item}>
        <div className={styles.right}>
          <NavLinks />
        </div>
        <Search />
        <div className={styles.left}>
          <User />
        </div>
      </Container>
    </nav>
  );
}

export default Navegation;
