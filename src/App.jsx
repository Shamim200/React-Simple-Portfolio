import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Componets/Navigation";
import "./App.css";
import "aos/dist/aos.css";
import ToTop from "./Componets/ToTop";
import Footer from "./Componets/Footer";
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
