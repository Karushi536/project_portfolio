import { useState } from 'react';
import ProjectModal from './ProjectModal';

function ProjectCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div onClick={() => setIsModalOpen(true)} className="bg-white p-6 rounded-lg shadow-lg w-72 cursor-pointer">
      <h3 className="text-lg font-semibold">Project Title</h3>
      <p className="text-gray-600">Project description...</p>

      <ProjectModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </div>
  );
}

export default ProjectCard;
