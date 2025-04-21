import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Home from "./components/home/home";
import Footer from "./components/Footer/Footer";
import Registro from "./components/Registro/Registro";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Home />
      <Routes>
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
