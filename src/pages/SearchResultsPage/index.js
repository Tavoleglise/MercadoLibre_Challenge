import query from "../../utils/search.json";
import { useState, useEffect, useContext } from "react";
import SearchTags from "../../components/SearchTags";
import SearchList from "../../components/SearchList";
import styles from "./SearchResultsPage.module.scss";

import CategoriesContext from "../../context/categoriesContext";

export default function SearchResult({ params }) {
  const categoriesContext = useContext(CategoriesContext);
  const { searchCategories, setSearchCategories } = categoriesContext;
  //const categories = query.filters[0].values[0].path_from_root;
  const [keyword, setKeyword] = useState([]);
  const [queryResults, setQueryResults] = useState([]);

  const { query } = params;

  useEffect(() => {
    fetch(`http://localhost:3002/api/items?q=${query}`)
      .then((res) => res.json())
      .then((response) => {
        setQueryResults(response);
      });
    //setSearchCategories(categories);
  }, [query]);
  useEffect(() => {
    console.log(queryResults);
  }, [queryResults]);
  return (
    <div className={styles.search_results_page}>
      {/*<SearchTags categories={categories} />*/}
      {queryResults.items ? <SearchList queryResults={queryResults} /> : null}
    </div>
  );
}
