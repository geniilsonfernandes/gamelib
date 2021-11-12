import React from "react";
import styles from "./BlogCard.module.scss";
import Tag from "./../../Tag/Tag";
import image from "../../../assets/images/game__mock_03.png";
function BlogCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card__photo}>
        <img src={image} alt="Marvel's Guardians of the Galaxy" />
        <div className={styles.tag}>
          <Tag> Review</Tag>
        </div>
      </div>
      <div className={styles.card__description}>
        <h2>Marvel's Guardians of the Galaxy - Review</h2>
        <div className={styles.info}>
          <span className={styles.info__inline}>
            By <span> Thomas Paul</span>
          </span>
          <span className={styles.info__inline}>
            Published on <span>9. 6. 2021</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
