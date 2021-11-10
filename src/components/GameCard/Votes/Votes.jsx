import React from "react";
import styles from "./Votes.module.scss";

function Votes({ votes }) {
  return (
    <div className={styles.votes}>
      {votes} <span>,7</span>
    </div>
  );
}

export default Votes;
