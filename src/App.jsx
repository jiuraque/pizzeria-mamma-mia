import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Registro from "./components/Pages/Registro";
import Login from "./components/Pages/Login";
import Pizza from "./components/Pages/Pizza";
import Profile from "./components/Pages/Profile"
import NotFound from "./components/Pages/NotFound"


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registro" element={<Registro />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
