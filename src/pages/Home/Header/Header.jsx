import React, { useState } from "react";
import { useNavigate } from "react-router";
import Container from "../../../components/Layout/Container";
import useMedia from "../../../Hooks/useMedia";
import { SearchIcon } from "../../../Icons/Icon";
import styles from "./Header.module.scss";

function Header() {
  const match = useMedia("(max-width: 850px)");
  const [inputFocus, setInputFocus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue === "") return;
    navigate(`result/${searchValue}`);
  }

  return (
    <header className={styles.header}>
      <Container className={styles.header__content}>
        <h1>
          <span>Search your game</span> and save your favorites
        </h1>
        <form
          action=""
          className={styles.wrapper__form}
          onSubmit={handleSubmit}
        >
          <div className={styles.wrapper__input} data-focus={inputFocus}>
            {!match && (
              <span className={styles.icon} data-focus={inputFocus}>
                <SearchIcon />
              </span>
            )}
            <input
              className={styles.input}
              type="text"
              placeholder="The Witcher 3: Wild Hunt"
              value={searchValue}
              onChange={({ target }) => setSearchValue(target.value)}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(searchValue !== "" ? true : false)}
            />
            <button className={styles.button} type="submit">
              {match ? <SearchIcon /> : "Seach Now"}
            </button>
          </div>
        </form>
      </Container>
    </header>
  );
}

export default Header;
