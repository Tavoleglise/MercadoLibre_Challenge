import styles from "./SearchBar.module.scss";
import { Link } from "wouter";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <Link to="/">
        <img src="https://i.imgur.com/W7HEIne.png" alt="" />
      </Link>
      <input type="text" placeholder="Nunca dejes de buscar" />
    </div>
  );
}
