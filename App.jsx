import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Leaderboard from "./pages/Leaderboard";
import Map from "./pages/Map";
import ImageSlider from "./components/ImageSlider";
import ErrorBoundary from "./components/ErrorBoundary";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ImageSlider" element={<ImageSlider />} />
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
    </div>
  );
}

export default App;
