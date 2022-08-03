import { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import { Link, useLocation } from "wouter";

export default function SearchBar() {
  const [path, pushLocation] = useLocation();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <Link to="/">
        <img
          className={styles.logo}
          src="https://i.imgur.com/W7HEIne.png"
          alt=""
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={keyword}
          type="text"
          placeholder="Nunca dejes de buscar"
        />
        <button type="submit">
          <img src="https://i.imgur.com/koi1cht.png" alt="" />
        </button>
      </form>
    </div>
  );
}
