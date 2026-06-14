import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import BlogsPage from "./pages/BlogsPage"
import Contact from "./pages/Contact"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden min-h-screen flex flex-col justify-between">
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
