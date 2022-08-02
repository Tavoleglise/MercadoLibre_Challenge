import { useState, useEffect, useContext } from "react";
import styles from "./SearchTags.module.scss";
import { FaGreaterThan } from "react-icons/fa";

export default function SearchTags({ categories }) {
  useEffect(() => {}, []);

  return (
    <div className={styles.tagsContainer}>
      {categories.map((categorie, index) => {
        if (index === categories.length - 1) {
          return (
            <>
              <span className={styles.graterThan}>
                <FaGreaterThan />
              </span>
              <span>{categorie.name}</span>
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
  );
}
