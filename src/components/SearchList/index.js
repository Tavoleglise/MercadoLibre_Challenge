import { useState, useEffect } from "react";
import SearchTags from "../SearchTags";
import ProductCard from "../ProductCard";
import styles from "./SearchList.module.scss";

export default function SearchList({ query }) {
  useEffect(() => {}, []);
  return (
    <div className={styles.list}>
      {query.results.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}
