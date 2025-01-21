import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/home" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/skills" className="text-white hover:underline">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
