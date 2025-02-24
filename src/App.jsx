import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import Footer from "./components/Footer";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";
import AllProducts from "./views/AllProducts";
import NavbarResponsive from "./components/NavbarResponsive";
import ProductDetails from "./views/ProductDetails";
import TermsAndConditions from "./views/TermsAndConditions";
import SafeData from "./views/SafeData";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <NavbarResponsive />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/productos/:categoria?" element={<AllProducts />} />
          <Route path="/producto/:id" element={<ProductDetails />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/politica-de-privacidad" element={<SafeData />} />
          <Route
            path="/terminos-y-condiciones"
            element={<TermsAndConditions />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
