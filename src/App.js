import React from "react";
import profilePhoto from "./assets/your-photo.jpg";

const PortfolioHeader = () => {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-purple-500 to-blue-500 p-6">
      {/* profilePhoto */}
      <div className="flex items-center">
        <img
          src={profilePhoto}
          alt="Abigael Karushi"
          className="w-16 h-16 rounded-full border-4 border-blue-300 shadow-lg"
        />
        <div className="ml-4">
          <h1 className="text-white text-2xl font-bold">Abigael Karushi</h1>
          <p className="text-blue-200 text-sm">Web Developer | Blockchain Enthusiast</p>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-white hover:underline">About</a></li>
          <li><a href="#skills" className="text-white hover:underline">Skills</a></li>
          <li><a href="#projects" className="text-white hover:underline">Projects</a></li>
          <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center bg-gray-900 text-white py-12 px-6">
      {/* Photo */}
      <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
        <img
          src={profilePhoto}
          alt="Abigael Karushi"
          className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg"
        />
      </div>

      {/* Bio */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Hello! I'm Abigael Karushi, a passionate web developer specializing in WordPress, Webflow, and React. I have a keen interest in blockchain technology and enjoy working on innovative projects that make an impact. Welcome to my portfolio!
        </p>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-gray-800 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">WordPress</h3>
          <p className="text-gray-300">Building and managing websites with ease.</p>
        </div>
        <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Webflow</h3>
          <p className="text-gray-300">Creating responsive and visually stunning designs.</p>
        </div>
        <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">React</h3>
          <p className="text-gray-300">Developing dynamic and interactive web applications.</p>
        </div>
        <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Tailwind CSS</h3>
          <p className="text-gray-300">Designing sleek and modern user interfaces.</p>
        </div>
        <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">JavaScript</h3>
          <p className="text-gray-300">Bringing web pages to life with interactive features.</p>
        </div>
        <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Blockchain</h3>
          <p className="text-gray-300">Exploring decentralized technologies and solutions.</p>
        </div>
        <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Python</h3>
          <p className="text-gray-300">Scripting and data analysis with Python programming.</p>
        </div>
        <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">C</h3>
          <p className="text-gray-300">Programming with C for system-level development.</p>
        </div>
        <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">C++</h3>
          <p className="text-gray-300">Object-oriented programming with C++.</p>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <PortfolioHeader />
      <AboutSection />
      <SkillsSection />
      {/* Additional sections like Projects can go here */}
      <section id="projects" className="p-8 mt-16">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-purple-400">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-purple-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-purple-300">Joka votting</h3>
          <p className="text-gray-300">A secure and transparent e-voting platform developed for school elections, leveraging blockchain technology to ensure tamper-proof voting processes and verifiable results. This project was aimed at enhancing trust and efficiency in the voting process.</p>

<p>Technologies Used: Python, Solidity, Web3.js, React, Ethereum blockchain, Metamask, and Ganache.</p>
        </div>
        <div className="bg-purple-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-purple-300">Babycheck App</h3>
          <p className="text-gray-300">A sleek and user-friendly web app designed to help parents monitor their baby’s health and development milestones. Features include growth tracking, symptom checklists, and recommendations for when to consult a doctor.</p>

<p>Technologies Used: React, Tailwind CSS, Express.js, Node.js, and MongoDB.</p>
          </div>
          <div className="bg-purple-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-300">LeAgric</h3>
            <p className="text-gray-300">An innovative platform that leverages blockchain technology to simplify payment processes and ensure transparency in the agricultural supply chain. The platform stores data on plant and animal development, enabling consumers to track the journey of their food from farm to table. This promotes accountability and builds trust in the food industry.</p>

<p>Target Audience: Everyone, including consumers, farmers, and supply chain stakeholders.</p>
<p>Technologies Used: Node.js, React, Ether.js, Express.js, MongoDB, and Ethereum blockchain.</p>
          </div>
        </div>
    </section>
      <ContactSection />
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-6 mt-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <div className="text-center">
        <p className="text-gray-300 mb-4">I'd love to hear from you! Feel free to reach out using the following methods:</p>
        <p className="text-blue-300 font-bold">Email: karushiabigael@gmail.com</p>
        <p className="text-blue-300 font-bold">Phone: +254 769 505 963</p>
        <p className="text-blue-300 font-bold">LinkedIn: <a href="https://linkedin.com/in/abigaelkarushi" className="underline">linkedin.com/in/abigaelkarushi</a></p>
        <p className="text-blue-300 font-bold">Git Hub: <a href="https://github.com/Karushi536" className="underline">github.com/Karushi536</a></p>
      </div>
    </section>
  );
};

export default App;
