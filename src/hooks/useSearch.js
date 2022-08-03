import { useState, useEffect, useContext } from "react";
import CategoriesContext from "../context/categoriesContext";
import { getProductListByQuery } from "../utils/api.js";

export function useSearch(query) {
  const categoriesContext = useContext(CategoriesContext);
  const [queryResults, setQueryResults] = useState([]);
  const { searchCategories, setSearchCategories } = categoriesContext;
  useEffect(() => {
    getProductListByQuery(query).then((response) => {
      setQueryResults(response);
      if (response.categories[0]) {
        setSearchCategories(response.categories[0].values[0].path_from_root);
      } else {
        setSearchCategories([]);
      }
    });
  }, [query]);
  return { queryResults, searchCategories };
}
