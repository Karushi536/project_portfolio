// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Abigael's Portfolio</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
          <li><Link to="/skills" className="hover:underline">Skills</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">Hi, I'm Abigael! A passionate developer ready to bring your ideas to life.</p>
        <a href="/projects" className="bg-white text-purple-600 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-purple-100">View My Projects</a>
      </div>
    </div>
  );
}

export default Home;

// pages/Projects.js
import React from 'react';

function Projects() {
  const projectList = [
    { name: 'Blockchain E-voting System', description: 'A secure e-voting platform built with blockchain.', link: '#' },
    { name: 'BabyCheck App', description: 'A React app for tracking baby milestones.', link: '#' },
    { name: 'Hackathon Project', description: 'An innovative project built during a hackathon.', link: '#' }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="bg-purple-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-purple-600 hover:underline">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
