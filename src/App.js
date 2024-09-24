import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ProductView from './components/ProductView';
import ProductEdit from './components/ProductEdit';
import Products from './components/Header/Products';
import About from './components/Header/AboutUs';
import Contact from './components/Header/ContactUs';
import Logo from './components/Header/Logo';
import AppName from './components/Header/AppName';
import './App.css';

const App = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const handleEditProduct = (id, updatedProduct) => {
    const newProducts = [...products];
    newProducts[id] = updatedProduct;
    setProducts(newProducts);
  };

  const handleDeleteProduct = (id) => {
    const newProducts = products.filter((_, index) => index !== parseInt(id, 10));
    setProducts(newProducts);
  };

  return (
    <Router>
      <div className="container">
       <header>
        <nav>
        <Logo />
        <AppName />
          <div className="header-items">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
          </div>
        </nav>
       </header>
      <Routes>
        <Route path="/" element={<AddProduct onAdd={handleAddProduct} />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/view/:id" element={<ProductView products={products} />} />
        <Route path="/edit/:id" element={<ProductEdit products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;