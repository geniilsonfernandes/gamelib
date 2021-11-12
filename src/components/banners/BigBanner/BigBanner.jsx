import React from "react";
import styles from "./BigBanner.module.scss";
import image from "../../../assets/images/game__mock_02.png";
import Tag from "./../../Tag/Tag";
import { Link } from "react-router-dom";
import { GamePadIcon } from "../../../assets/Icons/Icon";

function BigBanner() {
  return (
    <div className={styles.s__banner}>
      <span className={styles.tag}>
        <Tag> highlight</Tag>
      </span>
      <div className={styles.left}>
        <div className={styles.left__content}>
          <Link to="/" className={styles.title}>
            Need for Speed™ Heat
          </Link>
          <span className={styles.publisher}>Electronic Arts Inc</span>
          <p>
            Trabalhe de dia e arrisque tudo à noite no Need for Speed™ Heat,
            corra contra a polícia corrupta da cidade, em eventos das corridas
            de rua.
          </p>
          <div className={styles.button__group}>
            <Link to="/" className={styles.action__button}>
              Let's go <GamePadIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right__content}>
          <img src={image} alt="Need for Speed™ Heat" />
        </div>
      </div>
    </div>
  );
}

export default BigBanner;
