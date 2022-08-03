import { useEffect, useState, useContext } from "react";
import product from "../../utils/product.json";
import SearchTags from "../../components/SearchTags";
import styles from "./ProductPage.module.scss";
import { useSingleProduct } from "../../hooks/useSingleProduct";

import CategoriesContext from "../../context/categoriesContext";

export default function ProductPage({ params }) {
  const { id } = params;
  const categoriesContext = useContext(CategoriesContext);
  const { searchCategories, setSearchCategories } = categoriesContext;
  const { product } = useSingleProduct(id);

  function formatMoney(n) {
    return (Math.round(n * 100) / 100).toLocaleString();
  }
  return (
    <>
      <SearchTags categories={searchCategories} />
      {product.item ? (
        <div className={styles.product}>
          <div className={styles.picture_data_section}>
            <img
              className={styles.picture_section}
              src={product.item.picture.url}
              alt=""
            />
            <div className={styles.data_section}>
              <div className={styles.features}>
                <span>
                  {product.item.condition === "new" ? "Nuevo" : "Usado"}
                </span>
                <span> - </span>
                <span>
                  {product.item.sold_quantity}
                  {product.item.sold_quantity === 1 ? " vendido" : " vendidos"}
                </span>
              </div>
              <div className={styles.title}>{product.item.title}</div>
              <div className={styles.price}>
                {formatMoney(product.item.price.price)}
              </div>
              <button className={styles.button}>Comprar</button>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.description_title}>
              Descripción del producto
            </div>
            <div className={styles.description_body}>
              {product.item.description}
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
}
