import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AdsBar from "./components/AdsBar/AdsBar";
import SubTopBar from "./components/SubTopBar/SubTopBar";
import { AppBar } from "./components/AppBar/AppBar";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import { useState } from "react";
import Category from "./components/SmallWidthCategory/Category";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetailsPage/ProductDetails";
import SignIn from "./components/Account/Login/SignIn";
import Account from "./components/Account/Account";

function App() {
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <BrowserRouter>
      <AdsBar />
      <SubTopBar />
      <AppBar />
     <Category categoryOpen={categoryOpen}/>
      <BottomNavbar
        categoryOpen={categoryOpen}
        setCategoryOpen={setCategoryOpen}
      />
      <Routes>
        <Route path="/account/sign-in" element={<SignIn  />} />
        <Route path="/" element={<Home categoryOpen={categoryOpen} />} />
        <Route path="/cart" element={<Cart  />} />
        <Route path="/product-name/:id" element={<ProductDetails  />} />
        <Route path="/customer/account" element={<Account  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
