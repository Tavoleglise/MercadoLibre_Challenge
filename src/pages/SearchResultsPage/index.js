import query from "../../utils/search.json";
import { useState, useEffect } from "react";
import SearchTags from "../../components/SearchTags";
import SearchList from "../../components/SearchList";
import styles from "./SearchResultsPage.module.scss";

export default function SearchResult() {
  const categories = query.filters[0].values[0].path_from_root;
  useEffect(() => {}, []);

  return (
    <div className={styles.search_results_page}>
      <SearchTags categories={categories} />
      <SearchList query={query} />
    </div>
  );
}
