import React from "react";
import ButtonSmall from "../../../components/buttons/ButtonSmall/ButtonSmall";
import Container from "../../../components/Layout/Container";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Container classCss={styles.header__content}>
        <div className={styles.left}>
          <div className={styles.left__content}>
            <h1>Make you list of games you played or i’ll play</h1>
            <p>Create a list, share and search news games</p>
            <div className={styles.group__cta}>
              <ButtonSmall>Create my lib</ButtonSmall>
              <ButtonSmall highlight={false}>Search games</ButtonSmall>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
