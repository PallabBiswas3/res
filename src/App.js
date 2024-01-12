import React from "react";
import "./assests/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Review />
      <Footer />
    </>
  );
};

export default App;

