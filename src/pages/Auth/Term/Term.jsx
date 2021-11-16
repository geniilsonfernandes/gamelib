import React from "react";
import styles from "./Term.module.scss";

function Term() {
  return (
    <div className={styles.term}>
      By signing up with <span>Gamelib</span> , you acknowledge that you have
      read and agree to all applicable <span>Terms of Service </span> and our
      <span> Privacy policy</span>
    </div>
  );
}

export default Term;
