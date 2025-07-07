import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategorySection from "./components/CategorySection";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./components/Features";
import Checkout from "./components/Checkout";
import { CartProvider } from "./context/CartContext";
import SearchResults from "./pages/SearchResults";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/categories" element={<CategorySection />} />
          <Route path="/category/:id" element={<Shop />} />
          <Route path="/category/:id/:subId" element={<Shop />} />
          <Route path="/category/:id/:subId/:subSubId" element={<Shop />} />
          <Route path="/category/:id/:subId/:subSubId/:subSubSubId" element={<Shop />} />
          <Route path="/category/:id/:subId/:subSubId/:subSubSubId/:subSubSubSubId" element={<Shop />} />
          <Route path="/category/:id/:subId/:subSubId/:subSubSubId/:subSubSubSubId/:subSubSubSubSubId" element={<Shop />} />
          <Route path="/category/:id/:subId/:subSubId/:subSubSubId/:subSubSubSubId/:subSubSubSubSubId/:subSubSubSubSubSubId" element={<Shop />} />
          <Route path="/category/:id/:subId/:subSubId/:subSubSubId/:subSubSubSubId/:subSubSubSubSubId/:subSubSubSubSubSubId" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Features />
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </SearchProvider>
  );
}

export default App;
