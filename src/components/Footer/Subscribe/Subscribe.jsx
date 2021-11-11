import React, { useEffect, useState } from "react";
import { UserIcon } from "../../../assets/Icons";
import styles from "./Subscribe.module.scss";
function Subscribe() {
  const [showIcon, setShowIcon] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    value.length !== 0 ? setShowIcon(true) : setShowIcon(false);
  }, [value]);
  return (
    <div className={styles.subscribe} data-input-change={showIcon}>
      <form action="" className={styles.form}>
        <span className={styles.icon} data-input-change={showIcon}>
          <UserIcon />
        </span>
        <input
          type="email"
          className={styles.input}
          placeholder="Email address"
          data-input-change={showIcon}
          onChange={({ target }) => setValue(target.value)}
        />
        <button type="submit" className={styles.submit}>
          Subscribe now
        </button>
      </form>
      <div className={styles.term}>
        By clicking on <span>“Subscribe now”</span> button I agree that my
        submitted data is being <u>collected and stored</u>.
      </div>
    </div>
  );
}

export default Subscribe;
