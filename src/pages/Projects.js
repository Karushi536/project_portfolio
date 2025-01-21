// Projects.js
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="p-8 mt-16">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-purple-400">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-purple-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-purple-300">Joka votting</h3>
          <p className="text-gray-300">Its a school voting app that uses blockchhain to store data</p>
        </div>
        <div className="bg-purple-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-purple-300">Pregnancy Tracker</h3>
          <p className="text-gray-300">Its an app that helps in selling houses and helps customers find out about a </p>
          </div>
          <div className="bg-purple-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-300">LeAgric</h3>
            <p className="text-gray-300">ggg</p>
          </div>
        </div>
    </section>
  );
};

export default Projects;
