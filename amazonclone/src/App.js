import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  HomePage,
  SearchResults,
  Checkout,
  ProductPage,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
