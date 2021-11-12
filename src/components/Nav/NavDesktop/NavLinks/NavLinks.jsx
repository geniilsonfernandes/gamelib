import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./NavLinks.module.scss";

function NavLinks() {
  return (
    <>
      <Link to="/" className={styles.logo}></Link>
      <div className={styles.links}>
        <NavLink to="/" className={styles.link}>
          Discover
        </NavLink>
        <NavLink to="/my" className={styles.link}>
          My Games
        </NavLink>
      </div>
    </>
  );
}

export default NavLinks;
