import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import ReactPage from "./components/Portfolio/ReactPage";
import PhpLaravelPage from "./components/Portfolio/PhpLaravelPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/php-laravel" element={<PhpLaravelPage />} />
        <Route path="*" element={<Error />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;
