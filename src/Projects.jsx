function Projects() {
    return (
        <div className="bg-gray-100 min-h-screen">
        {/* Projects Section */}
        <section className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-purple-600">Joka Voting</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600">Project Title</h3>
              <p className="text-gray-600">Project description goes here...</p>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">View Details</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600">Another Project</h3>
              <p className="text-gray-600">Details about this project...</p>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">View Details</button>
            </div>
          </div>
        </section>
      
        {/* Introduction Section */}
        <section className="mt-16 p-8 bg-blue-500 text-white text-center">
          <h1 className="text-3xl font-bold mb-4">Annyeonghaseyo</h1>
          <p className="text-lg">
            Hello, welcome to my project portfolio. Get to know more about my projects and skills. 
            Short introduction: I am a proud lady.
          </p>
        </section>
      
        {/* Footer Links */}
        <footer className="mt-8 bg-blue-700 text-white py-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </footer>
      </div>);      
  }
  
  export default Projects;
  