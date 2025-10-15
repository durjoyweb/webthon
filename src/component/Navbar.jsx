// import React from "react";
// import { IoAccessibility } from "react-icons/io5";
// import { IoIosArrowDropdownCircle } from "react-icons/io";
// import { SlUserFollow } from "react-icons/sl";
// export default function Navbar() {
//   return (
//     <div className=" px-3  flex items-center text-white justify-between bg-linear-to-r from-orange-400 to-pink-500">
//       {/* logo */}
//       <div className="flex flex-row gap-2 py-2">
//         <img
//           src="src/image/uperlogo.png"
//           alt="uperlogo"
//           className="h-5 shrink-0"
//         />
//         <p>GOVERNMENT OF INDIA</p>
//       </div>
//       {/* language and accessibility */}
//       <div className="flex flex-row gap-2 items-center ">
//         <div className="hidden md:flex border-x-2 hover:border-none px-2 hover:bg-white hover:text-black cursor-pointer">
//           skip to main content
//         </div>
//         <div className="flex flex-row gap-2 items-center border px-2 py-1 rounded-4xl border-white">
//           English <IoIosArrowDropdownCircle className=" text-white" />
//         </div>
//         <div className="border-x-2 px-2">
//           <IoAccessibility />
//         </div>
//         <div className="border-x-2 px-2">
//           <SlUserFollow />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { IoAccessibility } from "react-icons/io5";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { SlUserFollow } from "react-icons/sl";

export default function Navbar() {
  // State to manage the open/closed status of each dropdown
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);
  const [isAccessMenuOpen, setAccessMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  // useRef to get a reference to the dropdown DOM elements
  const langMenuRef = useRef(null);
  const accessMenuRef = useRef(null);
  const userMenuRef = useRef(null);

  // This effect adds a global click listener to close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
      if (
        accessMenuRef.current &&
        !accessMenuRef.current.contains(event.target)
      ) {
        setAccessMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langMenuRef, accessMenuRef, userMenuRef]);

  return (
    <div className="px-3 flex items-center text-white justify-between bg-gradient-to-r from-orange-400 to-pink-500 text-sm md:text-base">
      {/* logo */}
      <a href="/" className="flex flex-row gap-2 py-2 items-center">
        <img
          src="src/image/uperlogo.png" // Make sure this path is correct
          alt="uperlogo"
          className="h-5 shrink-0"
        />
        <p className="font-semibold">GOVERNMENT OF INDIA</p>
      </a>

      {/* language and accessibility */}
      <div className="flex flex-row gap-2 items-center">
        {/* Skip to Main Content Link */}
        <a
          href="#main-content"
          className="hidden md:block border-x-2 border-transparent hover:border-white px-2 hover:bg-white/20 cursor-pointer"
        >
          Skip to Main Content
        </a>

        {/* Language Dropdown */}
        <div className="relative" ref={langMenuRef}>
          <button
            onClick={() => setLangMenuOpen(!isLangMenuOpen)}
            className="flex flex-row gap-2 items-center border px-2 py-1 rounded-full border-white hover:bg-white/20"
          >
            English <IoIosArrowDropdownCircle className="text-white" />
          </button>
          {isLangMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-60 text-black ">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Hindi
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Bengali
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Tamil
              </a>
            </div>
          )}
        </div>

        {/* Accessibility Dropdown */}
        <div className="relative" ref={accessMenuRef}>
          <button
            onClick={() => setAccessMenuOpen(!isAccessMenuOpen)}
            className="border-x-2 border-transparent hover:border-white p-2 hover:bg-white/20 cursor-pointer"
          >
            <IoAccessibility size={20} />
          </button>
          {isAccessMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-60 text-black">
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Increase Font Size
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Decrease Font Size
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                High Contrast Mode
              </button>
            </div>
          )}
        </div>

        {/* User/Login Dropdown */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setUserMenuOpen(!isUserMenuOpen)}
            className="border-l-2 border-transparent hover:border-white p-2 hover:bg-white/20 cursor-pointer"
          >
            <SlUserFollow size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
