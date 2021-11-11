import React from "react";
import Container from "../Layout/Container";
import styles from "./Footer.module.scss";
import Subscribe from "./Subscribe/Subscribe";

function Footer() {
  return (
    <footer className={styles.s__footer}>
      <Container className={styles.footer}>
        <Subscribe />
        <address className={styles.address}></address>
      </Container>
    </footer>
  );
}

export default Footer;
