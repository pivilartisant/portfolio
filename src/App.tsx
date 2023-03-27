import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import About from "./pages/AboutPage/About";
import Home from "./pages/HomePage/Home";
import { Gallery } from "./pages/GalleryPage/Gallery";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </Router>
    </div>
  );
}
