import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import styles from "./BlogDisplay.module.scss";

function BlogDisplay({ articles }) {
  return (
    <div className={styles.s__blog}>
      <div className={styles.grid}>
        {articles &&
          articles.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              author={post.author}
              type={post.type}
              cover={post.cover}
              date={post.date}
              id={post.id}
            />
          ))}
      </div>
    </div>
  );
}

export default BlogDisplay;
