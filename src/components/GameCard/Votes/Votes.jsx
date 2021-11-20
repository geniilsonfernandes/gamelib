import React from "react";
import styles from "./Votes.module.scss";

function Votes({ votes }) {
  const value = votes || votes.toFixed(1);
  return <div className={styles.votes}>{votes}</div>;
}

export default Votes;
