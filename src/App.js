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
        <Route path="/" element={<Home categoryOpen={categoryOpen} />} />
        <Route path="/cart" element={<Cart  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
