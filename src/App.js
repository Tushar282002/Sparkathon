import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import OrderPage from './pages/OrderPage';
import OrderDetailsPage from './pages/OrderDetailsPage'; 
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/order/:orderId" element={<OrderDetailsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
