import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Registro from "./components/Pages/Registro";
import Login from "./components/Pages/Login";
import Pizza from "./components/Pages/Pizza";
import Profile from "./components/Pages/Profile";
import NotFound from "./components/Pages/NotFound";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/registro"
            element={
              <PublicRoute>
                <Registro />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route path="/Cart" element={<Cart />} />
          <Route path="/pizza/:pizzaId" element={<Pizza />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
