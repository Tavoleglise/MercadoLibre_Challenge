import { useEffect, useState } from "react";
import product from "../../utils/product.json";
import SearchTags from "../../components/SearchTags";
import styles from "./ProductPage.module.scss";

export default function ProductPage() {
  useEffect(() => {
    console.log(product.pictures[0].url);
  }, []);
  return (
    <div className={styles.product}>
      <div className={styles.picture_data_section}>
        <img
          className={styles.picture_section}
          src={product.pictures[0].url}
          alt=""
        />
        <div className={styles.data_section}>
          <div className={styles.features}>{}</div>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}></div>
          <div className={styles.button}></div>
        </div>
      </div>
      <div className={styles.description}></div>
    </div>
  );
}
