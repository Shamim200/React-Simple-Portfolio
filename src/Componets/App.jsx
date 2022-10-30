import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./pages/Navigation";
import "./App.css";
import ToTop from "./ToTop";
import Footer from "./pages/Footer";
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
