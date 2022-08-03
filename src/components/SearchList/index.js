import { useState, useEffect } from "react";
import SearchTags from "../SearchTags";
import ProductCard from "../ProductCard";
import styles from "./SearchList.module.scss";

export default function SearchList({ queryResults }) {
  useEffect(() => {}, []);
  return (
    <div className={styles.list}>
      {queryResults.items.slice(0, 4).map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}
