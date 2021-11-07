import React, { useState } from "react";
import styles from "./Search.module.scss";
import { LoadingIcon, SearchIcon } from "../../Assets/Icons";
function Search() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading((e) => !e);
  }

  return (
    <>
      <form action="" className={styles.search} onSubmit={handleSubmit}>
        <input type="text" placeholder="Search games" />
        {loading && (
          <span className={styles.loading}>
            <LoadingIcon />
          </span>
        )}
        <button type="submit" className={styles.submit}>
          <SearchIcon />
        </button>
      </form>
    </>
  );
}

export default Search;
