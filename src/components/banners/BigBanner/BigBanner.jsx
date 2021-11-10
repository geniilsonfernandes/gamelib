import React from "react";
import styles from "./BigBanner.module.scss";
import image from "../../../assets/images/game__mock_02.png";
import Container from "../../Layout/Container";
function BigBanner() {
  return (
    <Container>
      <div className={styles.banner}>
        <span className={styles.highlight}>highlight</span>
        <div className={styles.left}>
          <div className={styles.left__content}>
            <h2>Need for Speed™ Heat</h2>
            <span>Electronic Arts Inc</span>
            <p>
              Trabalhe de dia e arrisque tudo à noite no Need for Speed™ Heat,
              corra contra a polícia corrupta da cidade, em eventos das corridas
              de rua.
            </p>
            <div className={styles.button__group}>
              <button className={styles.add__button}>Add My list</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right__content}>
            <img src={image} alt="Need for Speed™ Heat" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BigBanner;
