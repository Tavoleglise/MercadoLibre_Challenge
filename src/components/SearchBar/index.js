import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <img src="https://i.imgur.com/W7HEIne.png" alt="" />
      <input type="text" placeholder="Nunca dejes de buscar" />
    </div>
  );
}
