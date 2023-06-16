import React, { Component, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Header from "./Extends/Header";
import Footer from "./Extends/Footer";
import reportWebVitals from "./reportWebVitals";
import { Container, Row, Col } from "react-bootstrap";

// IMPORT PAGES
import About from "./Views/About/Index";
import Contactus from "./Views/Contactus/index";
import ScrollToTop from "./Views/ScrollToTop/Index";
import CarDetails from './Views/CarDetails/index'





// NEW
function Main() {
  return (
    <BrowserRouter>
      <header className="pageheader">
        <Header />
      </header>
      <ScrollToTop />
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />} className="ppp" />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/car-details" element={<CarDetails />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}
ReactDOM.render(<Main />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
