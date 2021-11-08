import React, { useState } from "react";
import styles from "./Search.module.scss";
import { LoadingIcon, SearchIcon } from "../../assets/Icons";
function Search() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [activeSearchButton, setActiveSearchButton] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading((e) => !e);
  }

  function changeValue(value) {
    setValue(value);
    value !== "" ? setActiveSearchButton(true) : setActiveSearchButton(false);

    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }

  return (
    <>
      <form action="" className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search games"
          value={value}
          onChange={(e) => changeValue(e.target.value)}
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
    </>
  );
}

export default Search;
