import React, { useEffect, useRef } from "react";
import ButtonSmall from "../../../components/buttons/ButtonSmall/ButtonSmall";
import Container from "../../../components/Layout/Container";
import styles from "./Header.module.scss";
import joystick from "../../../assets/images/Joystick.png";

function Header() {
  const backgroundEl = useRef(null);

  useEffect(() => {
    const paralaxScroll = (e) => {
      const nodeEl = backgroundEl.current;
      nodeEl.style.backgroundPosition = `center -${window.scrollY / 3}px`;
    };
    window.addEventListener("scroll", paralaxScroll);
    return () => {
      window.removeEventListener("scroll", paralaxScroll);
    };
  }, []);

  return (
    <header className={styles.header} ref={backgroundEl}>
      <Container classCss={styles.header__content}>
        <div className={styles.left}>
          <div className={styles.left__content}>
            <h1>
              <span>Make you list of games </span> you played or i’ll play
            </h1>
            <p>Create a list, share and search news games</p>
            <div className={styles.group__cta}>
              <ButtonSmall>Create my lib</ButtonSmall>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={joystick} alt="joystick" />
        </div>
      </Container>
    </header>
  );
}

export default Header;
