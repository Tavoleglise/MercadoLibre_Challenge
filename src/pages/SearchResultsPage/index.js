import SearchTags from "../../components/SearchTags";
import SearchList from "../../components/SearchList";
import styles from "./SearchResultsPage.module.scss";
import { useSearch } from "../../hooks/useSearch";
import LoadingComp from "../../components/LoadingComp";

export default function SearchResult({ params }) {
  const { query } = params;
  const { queryResults, searchCategories } = useSearch(query);

  return (
    <div className={styles.search_results_page}>
      <SearchTags categories={searchCategories} />
      {queryResults.items ? (
        <SearchList queryResults={queryResults} />
      ) : (
        <LoadingComp />
      )}
    </div>
  );
}
