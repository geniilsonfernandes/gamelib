import React from "react";
import styles from "./BigBanner.module.scss";

import Tag from "./../../Tag/Tag";
import { Link } from "react-router-dom";
import { GamePadIcon } from "../../../Icons/Icon";

function BigBanner({ title, description, publisher, background }) {
  return (
    <div className={styles.s__banner}>
      <span className={styles.tag}>
        <Tag>highlight</Tag>
      </span>
      <div className={styles.left}>
        <div className={styles.left__content}>
          <Link to="/" className={styles.title}>
            {title}
          </Link>
          <span className={styles.publisher}>{publisher}</span>
          <p>{description}</p>
          <div className={styles.button__group}>
            <Link to="/" className={styles.action__button}>
              Let's go <GamePadIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right__content}>
          <img src={background} alt={title} />
        </div>
      </div>
    </div>
  );
}

export default BigBanner;
