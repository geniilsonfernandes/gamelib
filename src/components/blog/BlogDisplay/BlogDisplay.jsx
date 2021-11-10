import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import styles from "./BlogDisplay.module.scss";

function BlogDisplay() {
  return (
    <div className={styles.s__blog}>
      <div className={styles.head}>
        <h2>Last notices</h2>
      </div>
      <div className={styles.grid}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default BlogDisplay;
