import "./App.css";
import { Route } from "wouter";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <section className="App-content">
        <Route path="/" component={Home} />
        <Route path="/search/:query" component={SearchResultsPage} />
        <Route path="/product/:id" component={ProductPage} />
      </section>
    </div>
  );
}

export default App;
