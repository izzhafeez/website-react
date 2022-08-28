import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useEffect } from 'react';
import { BrowserRouter, useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes("note")) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);