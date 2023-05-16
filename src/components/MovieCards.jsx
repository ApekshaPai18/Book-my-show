import React from "react";
import styles from "./MovieCards.module.css";
import movies from "../Data/data";
import { Link } from "react-router-dom";

function Movie() {
  return <div className={styles.parent}>{movies.map(MovieCard)}</div>;
}

function MovieCard({ name, price, image }) {
  return (
    <div className={styles.showmovie}>
      <Link to={"/" + name}>
        <img src={image} alt="" />
        <h1>Title : {name}</h1>
        <h1>Price : {price}</h1>
      </Link>
    </div>
  );
}

export default Movie;
