import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import Projects from "./pages/Projects";
import SmoothScroll from "./SmoothScroll";
import Navbar from "./Navbar";
import Introduction from "./Introduction";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-500 to-purple-700">
      <SmoothScroll/>

      <nav className="flex justify-center space-x-6 py-4">
        <a href="#about" className="text-white font-semibold hover:text-purple-200 transition duration-300">About</a>
        <a href="#projects" className="text-white font-semibold hover:text-purple-200 transition duration-300">Projects</a>
        <a href="#contact" className="text-white font-semibold hover:text-purple-200 transition duration-300">Contact</a>
      </nav>

      <Navbar/>
      <Introduction/>
      
      <Projects/>
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
    </div>
  );
}

export default App;
