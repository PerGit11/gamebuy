import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './App';
import {ScrollToTop} from "./components/Other/ScrollToTop";
import {FilterProvider} from "./context/FilterContext";
import {CartProvider} from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <CartProvider>
              <FilterProvider>
                  <ScrollToTop/>
                    <ToastContainer closeButton={false} autoClose={2000} position={"bottom-right"} closeOnClick={true} hideProgressBar={true} pauseOnHover={false}/>
                  <App />
              </FilterProvider>
          </CartProvider>
      </Router>
  </React.StrictMode>
);