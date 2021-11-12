import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon, checkIcon, UserIcon } from "../../../assets/Icons";
import styles from "./Subscribe.module.scss";

function Subscribe() {
  const [showIcon, setShowIcon] = useState(false);
  const [value, setValue] = useState("");
  const [submited, setSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    value.length !== 0 ? setShowIcon(true) : setShowIcon(false);
  }, [value]);

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(!submited);
    setSubmited(!submited);
  }

  return (
    <div className={styles.subscribe}>
      <AnimatePresence>
        {!submited ? (
          <motion.form
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            action=""
            className={styles.form}
            onSubmit={handleSubmit}
            data-input-change={showIcon}
          >
            <span className={styles.icon} data-input-change={showIcon}>
              <UserIcon />
            </span>
            <input
              type="email"
              className={styles.input}
              placeholder="Email address"
              data-input-change={showIcon}
              onFocus={() => setShowIcon(true)}
              onBlur={() => setShowIcon(value !== "" ? true : false)}
              onChange={({ target }) => setValue(target.value)}
              //required
            />

            <button type="submit" className={styles.submit}>
              Subscribe now
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={styles.submited}
            onClick={() => setSubmited(!submited)}
          >
            All Right <CheckIcon />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.term}>
        By clicking on <span>“Subscribe now”</span> button I agree that my
        submitted data is being <u>collected and stored</u>.
      </div>
    </div>
  );
}

export default Subscribe;
