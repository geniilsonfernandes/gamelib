import React from "react";
import styles from "./Votes.module.scss";

function Votes({ votes }) {
  return <div className={styles.votes}>{votes}</div>;
}

export default Votes;
