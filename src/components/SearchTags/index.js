import { useState, useEffect, useContext } from "react";
import styles from "./SearchTags.module.scss";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "wouter";

export default function SearchTags({ categories }) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(categories);
  }, [categories]);

  return tags ? (
    <div className={styles.tagsContainer}>
      {categories.map((categorie, index) => {
        if (categories.length === 1) {
          return (
            <Link to={`/search/${categorie.name}`}>
              <span className={styles.tags}>
                <strong>{categorie.name}</strong>
              </span>
            </Link>
          );
        } else if (index === categories.length - 1) {
          return (
            <>
              <span className={styles.graterThan}>
                <FaGreaterThan />
              </span>

              <Link to={`/search/${categorie.name}`}>
                <span className={styles.tags}>
                  <strong>{categorie.name}</strong>
                </span>
              </Link>
            </>
          );
        } else if (index > 0) {
          return (
            <>
              <span className={styles.graterThan}>
                <FaGreaterThan />
              </span>
              <Link to={`/search/${categorie.name}`}>
                <span className={styles.tags}>{categorie.name}</span>
              </Link>
            </>
          );
        } else {
          return (
            <Link to={`/search/${categorie.name}`}>
              <span className={styles.tags}>{categorie.name}</span>
            </Link>
          );
        }
      })}
    </div>
  ) : null;
}
