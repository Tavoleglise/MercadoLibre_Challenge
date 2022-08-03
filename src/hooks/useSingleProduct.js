import { useEffect, useState, useContext } from "react";
import { getProductById } from "../utils/api.js";

export function useSingleProduct(id) {
  const [product, setProduct] = useState({});
  const getProduct = () => {
    getProductById(id).then((res) => {
      setProduct(res);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    console.log(product);
  }, [product]);
  return { product };
}
