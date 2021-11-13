import React from "react";
import styles from "./BlogCard.module.scss";
import Tag from "./../../Tag/Tag";
import { Link } from "react-router-dom";
function BlogCard({ title, author, type, cover, date, id }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__photo}>
        <img src={cover} alt={title} />
        <div className={styles.tag}>
          <Tag> {type}</Tag>
        </div>
      </div>
      <div className={styles.card__description}>
        <Link to={`my/${id}`}>{title}</Link>
        <div className={styles.info}>
          <span className={styles.info__inline}>
            By <span> {author}</span>
          </span>
          <span className={styles.info__inline}>
            Published on <span>{date}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
