import "./App.css";
import { Route } from "wouter";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SearchBar from "./components/SearchBar";
import SearchTags from "./components/SearchTags";

import { CategoriesContextProvider } from "./context/categoriesContext";

function App() {
  return (
    <div className="App">
      <CategoriesContextProvider>
        <SearchBar />

        <section className="App-content">
          <Route path="/" component={Home} />
          <Route path="/search/:query" component={SearchResultsPage} />
          <Route path="/product/:id" component={ProductPage} />
        </section>
      </CategoriesContextProvider>
    </div>
  );
}

export default App;
