import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Gallery from "./pages/Gallery";
import Testimonial from "./pages/Testimonial";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
