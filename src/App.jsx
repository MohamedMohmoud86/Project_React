
import React, { useEffect, useState } from "react";
import TopHeader from "./component/header/TopHeader";
import BtmHeader from "./component/header/BtmHeader";
import Home from "./paga/home/Home";
import { Route, Routes } from "react-router";
import ProductDetails from "./paga/home/ProductDetails/ProductDetails";
import Cart from "./paga/home/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./component/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./paga/categoryPage/CategoryPage";
import SearchResult from "./paga/SearchResult";
import About from "./paga/aboutPage/About";
import Contact from "./paga/contactPage/Contact";
import Favorites from "./paga/favorites/Favorites";
import Accessories from "./paga/Accessories/Accessories";
import Blog from "./paga/blog/Blog";





function App() {

 const [data, setData] = useState([]); 

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(res => setData(res.products));
  }, []);


  return (

    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Toaster  position="bottom-right" toastOptions={{
        style:{
          background: '#e9e9e9',
          borderRadius: '5px',
          padding: '14px',
        }
      }}/>

      <ScrollToTop />

      <AnimatePresence mode="wait" />


      <Routes>
       

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/accessories" element={<Accessories data={data} />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>


    </>



  )




}

export default App;