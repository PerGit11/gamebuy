import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import {ScrollToTop} from "./components/Other/ScrollToTop";
import {FilterProvider} from "./context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <FilterProvider>
              <ScrollToTop/>
              <App />
          </FilterProvider>
      </Router>
  </React.StrictMode>
);