// pages/Skills.js
import React from 'react';

function Skills() {
  const skills = [
    { name: 'React', level: '90%' },
    { name: 'WordPress', level: '85%' },
    { name: 'Webflow', level: '80%' },
    { name: 'Tailwind CSS', level: '75%' },
    { name: 'Node.js', level: '70%' },
    { name: 'Python', level: '65%' },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-purple-600 h-4 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="text-gray-700 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
