import { NavLink } from "react-router-dom";

const LearnSide = () => {
  return (
    <aside>
      <ul className="space-y-3">
        <li className="py-4">
          <NavLink
            to="/learn"
            end
            className="flex items-center p-3 text-gray-900 rounded-r-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#283541] hover:text-[#149eca] duration-300"
          >
            quick start
          </NavLink>
        </li>

        <li className="py-4">
          <NavLink
            to="/learn/think-in-react"
            className="flex items-center p-3 text-gray-900 rounded-r-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#283541] hover:text-[#149eca] duration-300"
          >
            think-in-react
          </NavLink>
        </li>
        <li className="py-4">
          <NavLink
            to="/learn/installation"
            className="flex items-center p-3 text-gray-900 rounded-r-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#283541] hover:text-[#149eca] duration-300"
          >
            installation
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default LearnSide;
