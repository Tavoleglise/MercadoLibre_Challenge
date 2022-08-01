import { useState, useEffect } from "react";
import styles from "./ProductCard.module.scss";

export default function ProductCard({ product }) {
  const [description, setDescription] = useState("");
  const getDescription = () => {
    fetch(`https://api.mercadolibre.com/items/${product.id}/description`)
      .then((res) => res.json())
      .then((res) => {
        setDescription(res.plain_text);
      });
  };

  useEffect(() => {
    console.log(product);
  }, [product]);
  function formatMoney(n) {
    return (Math.round(n * 100) / 100).toLocaleString();
  }
  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.thumbnail} alt="" />

      <div className={styles.info}>
        <div className={styles.mainInfo}>
          <div className={styles.price_container}>
            <span className={styles.price}>{formatMoney(product.price)}</span>
            {product.shipping.free_shipping ? (
              <img
                className={styles.freeShippingImg}
                src="https://i.imgur.com/Wqq5Qkj.png"
                alt=""
              />
            ) : null}
          </div>

          <div className={styles.description}>
            {product.attributes.map((attribute) => {
              return <span>{attribute.value_name} </span>;
            })}
          </div>
        </div>
        <div className={styles.place}>{product.address.state_name}</div>
      </div>
    </div>
  );
}
