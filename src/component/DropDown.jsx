import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ title, items }) => {
  return (
    <div className="relative group">
      <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
        <span>{title}</span>
        <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
      </button>
      {/* Dropdown Menu */}
      <div
        className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transform scale-95 group-hover:scale-100 transition-all duration-300 origin-top"
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
