import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./pages/HomePage/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}
