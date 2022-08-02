import { useEffect, useState, useContext } from "react";
import product from "../../utils/product.json";
import SearchTags from "../../components/SearchTags";
import styles from "./ProductPage.module.scss";

import CategoriesContext from "../../context/categoriesContext";

export default function ProductPage() {
  const [description, setDescription] = useState("");
  const categoriesContext = useContext(CategoriesContext);
  const { searchCategories, setSearchCategories } = categoriesContext;
  const getDescription = () => {
    fetch(`https://api.mercadolibre.com/items/${product.id}/description`)
      .then((res) => res.json())
      .then((res) => {
        setDescription(res.plain_text);
      });
  };
  useEffect(() => {
    getDescription();
  }, []);

  function formatMoney(n) {
    return (Math.round(n * 100) / 100).toLocaleString();
  }
  return (
    <>
      <SearchTags categories={searchCategories} />
      <div className={styles.product}>
        <div className={styles.picture_data_section}>
          <img
            className={styles.picture_section}
            src={product.pictures[0].url}
            alt=""
          />
          <div className={styles.data_section}>
            <div className={styles.features}>
              <span>{product.condition === "new" ? "Nuevo" : "Usado"}</span>
              <span> - </span>
              <span>{product.sold_quantity} vendidos</span>
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{formatMoney(product.price)}</div>
            <button className={styles.button}>Comprar</button>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.description_title}>
            Descripción del producto
          </div>
          <div className={styles.description_body}>{description}</div>
        </div>
      </div>
    </>
  );
}
