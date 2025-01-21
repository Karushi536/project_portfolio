function Navbar() {
    return (
      <div className="bg-purple-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Karushi Abigael</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/home" className="hover:text-purple-300">Home</a></li>
              <li><a href="/skills" className="hover:text-purple-300">Skills</a></li>
              <li><a href="/contact" className="hover:text-purple-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  