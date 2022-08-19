import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useEffect } from 'react';
import { HashRouter, useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>,
  document.getElementById("root")
);