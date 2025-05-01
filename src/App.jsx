import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Pizza from "./components/Pizzas/Pizza";
/* import Header from "./components/header/Header"; */
/* import Home from "./components/home/home"; */
import Footer from "./components/Footer/Footer";
/* import Cart from "./components/Cart/Cart"; */
/* import Registro from "./components/Registro/Registro"; */
/* import Login from "./components/Login/Login"; */

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Cart /> */}
      <Pizza />
      <Routes>
        {/* <Route path="/Registro" element={<Registro />} /> */}
        {/* <Route path="/Login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
