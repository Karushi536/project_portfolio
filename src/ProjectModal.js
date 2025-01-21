
const ProjectModal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96 transform transition duration-300 opacity-100 scale-100">
          <h2 className="text-2xl font-semibold text-purple-700">Project Details</h2>
          <p className="text-gray-600 mt-4">More information about this project...</p>
          <button onClick={closeModal} className="mt-6 text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default ProjectModal;
  