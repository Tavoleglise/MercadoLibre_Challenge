import { useState, useEffect, useContext } from "react";
import styles from "./SearchTags.module.scss";
import { FaGreaterThan } from "react-icons/fa";

export default function SearchTags({ categories }) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(categories);
    console.log(tags);
  }, [categories]);

  useEffect(() => {
    //console.log(tags);
  }, [tags]);

  return tags ? (
    <div className={styles.tagsContainer}>
      {categories.map((categorie, index) => {
        if (categories.length === 1) {
          return (
            <span>
              <strong>{categorie.name}</strong>
            </span>
          );
        } else if (index === categories.length - 1) {
          return (
            <>
              <span className={styles.graterThan}>
                <FaGreaterThan />
              </span>
              <span>
                <strong>{categorie.name}</strong>
              </span>
            </>
          );
        } else if (index > 0) {
          return (
            <>
              <span className={styles.graterThan}>
                <FaGreaterThan />
              </span>
              <span>{categorie.name}</span>
            </>
          );
        } else {
          return <span>{categorie.name}</span>;
        }
      })}
    </div>
  ) : null;
}
