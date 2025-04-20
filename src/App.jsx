import "./App.css";
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
      {/* <Header /> */}
      {/*  <Home /> */}
      {/* <Registro /> */}
      <Login />
      <Footer />
    </>
  );
}

export default App;
