import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-lg mx-auto mt-7 mb-20 app-navbar">
      <ul className="flex items-center justify-between">
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/" className="px-3 py-2">
            Home
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/about" className="px-3 py-2">
            about
          </NavLink>
        </li>

        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/contact" className="px-3 py-2">
            contact
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/learn" className="px-3 py-2">
            learn
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/contribute" className="px-3 py-2">
            contribute
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/login" className="px-3 py-2">
            login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
