import React from "react";
import styles from "./Navegation.module.css";
import Container from "../Layout/Container";
import { Logo } from "../../Assets/Icons";
import { NavLink } from "react-router-dom";
function Navegation() {
  return (
    <nav className={styles.nav}>
      <Container ClassCss={styles.nav__item}>
        <div className={styles.right}>
          <Logo />
          <div className={styles.links}>
            <NavLink to="/" className={styles.link}>
              Discover
            </NavLink>
            <NavLink to="/my" className={styles.link}>
              My Games
            </NavLink>
          </div>
        </div>
        <div className={styles.center}></div>
        <div className={styles.left}></div>
      </Container>
    </nav>
  );
}

export default Navegation;
