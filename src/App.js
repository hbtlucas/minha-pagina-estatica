import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <div className="center">
            <div className="menu">
              <div className="logo">
                <h3><Link to="/" className="home-link">Home</Link></h3>
              </div>
              <div className="item-menu">
                <Link to="/about">About me</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
              </div>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
