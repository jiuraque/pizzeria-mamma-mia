import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "../src/Context/CartContext.jsx";


createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
);
