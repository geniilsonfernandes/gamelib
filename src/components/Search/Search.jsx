import React, { useState } from "react";
import styles from "./Search.module.scss";
import { LoadingIcon, SearchIcon } from "../../Icons/Icon";
import ModalSuggestion from "./ModalSuggestion/ModalSuggestion";
import { AnimatePresence } from "framer-motion";
function Search() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading((e) => !e);
  }

  function changeValue(value) {
    setValue(value);

    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }

  return (
    <div className={styles.wrapper}>
      <form action="" className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search games"
          value={value}
          onChange={(e) => changeValue(e.target.value)}
          onFocus={() => setShowModal(true)}
          onBlur={() => setShowModal(false)}
        />
        {loading && (
          <span className={styles.loading}>
            <LoadingIcon />
          </span>
        )}
        <button type="submit" className={styles.submit} disabled={loading}>
          <SearchIcon />
        </button>
      </form>
      <AnimatePresence initial={false}>
        {showModal && <ModalSuggestion />}
      </AnimatePresence>
    </div>
  );
}

export default Search;
