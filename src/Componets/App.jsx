import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import "./App.css";
import "aos/dist/aos.css";
import ToTop from "./ToTop";
import Footer from "./Footer";
const App = () => {
  return (
    <div>
      <Navigation />
      <ToTop />
      <Footer />
    </div>
  );
};

export default App;
