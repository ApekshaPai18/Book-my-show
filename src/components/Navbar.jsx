import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <navbar className={styles.navbar}>
      <Link to="/">
        <p>Logo</p>
      </Link>
      <input
        type="text"
        className={styles.search}
        placeholder="Search movies"
      />
      <select name="location" id="location">
        <option value="mangalore">Mangalore</option>
        <option value="bangalore">Bangalore</option>
        <option value="mysore">Mysore</option>
      </select>
      <Link to="/signin">
        <p>Sign in</p>
      </Link>
      <p>Burger menu</p>
    </navbar>
  );
}
export default Navbar;
