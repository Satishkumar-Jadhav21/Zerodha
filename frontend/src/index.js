import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing-page/home/HomePage';
import SignUp from './landing-page/sign_up/Signup';
import AboutPage from './landing-page/about/AboutPage';
import ProductsPage from './landing-page/products/ProductsPage';
import PricingPage from './landing-page/pricing/PricingPage';
import SupportPage from './landing-page/support/SupportPage';

import NotFound from "./landing-page/NotFound";
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/products" element={<ProductsPage />} />
  <Route path="/pricing" element={<PricingPage />} />
  <Route path="/support" element={<SupportPage />} />
  <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
);

