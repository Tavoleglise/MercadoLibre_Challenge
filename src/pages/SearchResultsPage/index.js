import query from "../../utils/search.json";
import { useState, useEffect, useContext } from "react";
import SearchTags from "../../components/SearchTags";
import SearchList from "../../components/SearchList";
import styles from "./SearchResultsPage.module.scss";

import CategoriesContext from "../../context/categoriesContext";

export default function SearchResult() {
  const categoriesContext = useContext(CategoriesContext);
  const { searchCategories, setSearchCategories } = categoriesContext;
  const categories = query.filters[0].values[0].path_from_root;
  useEffect(() => {
    setSearchCategories(categories);
  }, []);
  useEffect(() => {
    console.log(searchCategories);
  }, [searchCategories]);
  return (
    <div className={styles.search_results_page}>
      <SearchTags categories={categories} />
      <SearchList query={query} />
    </div>
  );
}
