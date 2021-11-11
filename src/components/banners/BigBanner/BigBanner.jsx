import React from "react";
import styles from "./BigBanner.module.scss";
import image from "../../../assets/images/game__mock_02.png";
import Tag from "./../../Tag/Tag";
import { Link } from "react-router-dom";

function BigBanner() {
  return (
    <div className={styles.s__banner}>
      <span className={styles.tag}>
        <Tag> highlight</Tag>
      </span>
      <div className={styles.left}>
        <div className={styles.left__content}>
          <Link to="/">Need for Speed™ Heat</Link>
          <span>Electronic Arts Inc</span>
          <p>
            Trabalhe de dia e arrisque tudo à noite no Need for Speed™ Heat,
            corra contra a polícia corrupta da cidade, em eventos das corridas
            de rua.
          </p>
          <div className={styles.button__group}>
            <button className={styles.add__button}> See game </button>
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
