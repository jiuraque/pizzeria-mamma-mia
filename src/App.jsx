import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Home from "./components/home/home";
import Footer from './components/Footer/Footer';
import Registro from "./components/Registro/Registro";


function App() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
     {/*  <Home /> */}
     <Registro />
      <Footer />
    </>
  );
};

export default App;
