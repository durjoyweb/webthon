import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // FIXED: Added missing import
import Dropdown from "./DropDown"; // Assuming this component exists and works

// FIXED: Import images correctly so the bundler (Vite/CRA) can process them
import myGovLogo from "../image/logo.svg";
import profileIcon from "../image/profile.svg";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const LowerNav = () => {
  // FIXED: All hooks and state must be INSIDE the component function
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Data can be defined inside or outside if it doesn't depend on props/state
  const navItems = [
    {
      title: "Activities",
      dropdown: [
        { label: "Tasks", href: "#" },
        { label: "Discussions", href: "#" },
        { label: "Polls", href: "#" },
        { label: "Blogs", href: "#" },
      ],
    },
    {
      title: "MyGov States",
      dropdown: [
        { label: "Andhra Pradesh", href: "#" },
        { label: "Maharashtra", href: "#" },
        { label: "Uttar Pradesh", href: "#" },
        { label: "View All", href: "#" },
      ],
    },
    {
      title: "Microsites",
      dropdown: [
        { label: "Swachh Bharat", href: "#" },
        { label: "Pariksha Pe Charcha", href: "#" },
        { label: "Self4Society", href: "#" },
      ],
    },
    {
      title: "Get to Know",
      dropdown: [
        { label: "About Us", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Work at MyGov", href: "#" },
      ],
    },
    { title: "Help/Feedback", href: "#" },
  ];

  // Close profile dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  // --- Reusable Profile Dropdown Component ---
  const ProfileDropdown = () => (
    <div className="absolute right-0 top-14 p-5 w-72 bg-pink-100 rounded-md shadow-lg z-50 text-center">
      <h3 className="text-gray-800 pb-4 font-semibold">
        Together, let's Engage In Good Governance
      </h3>
      <div className="flex flex-row gap-3 justify-center items-center">
        <button
          onClick={() => {
            setProfileOpen(false);
            navigate("/login");
          }}
          className="px-4 py-2 rounded-md text-sm text-white bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 transition-all"
        >
          Login
        </button>
        <button
          onClick={() => {
            setProfileOpen(false);
            navigate("/register"); // FIXED: Changed to /register for clarity
          }}
          className="px-4 py-2 rounded-md text-sm text-white bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 transition-all"
        >
          Register
        </button>
      </div>
    </div>
  );

  return (
    <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img className="h-14" src={myGovLogo} alt="MyGov Logo" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <Dropdown
                  key={index}
                  title={item.title}
                  items={item.dropdown}
                />
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </a>
              )
            )}
          </div>

          {/* Right Side Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* FIXED: Search bar in a form, not a button */}
            <form className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-48 focus:w-64 transition-all duration-300 pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
              />
            </form>

            {/* Profile Avatar & Dropdown */}
            <div className="relative" ref={profileRef}>
              <button onClick={() => setProfileOpen((prev) => !prev)}>
                <img
                  className="h-12 w-12 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
                  src={profileIcon}
                  alt="Profile"
                />
              </button>
              {profileOpen && <ProfileDropdown />}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white shadow-lg`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href || "#"}
              className="block py-2 text-gray-700 font-semibold hover:text-blue-600"
            >
              {item.title}
            </a>
          ))}
          <div className="border-t pt-4 flex items-center justify-between">
            <form className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 w-full max-w-[150px] py-2 border rounded-full"
              />
            </form>
            {/* ADDED: Functional profile button for mobile */}
            <div
              className="relative"
              ref={isMobileMenuOpen ? profileRef : null}
            >
              <button onClick={() => setProfileOpen((prev) => !prev)}>
                <img
                  src={profileIcon}
                  alt="Profile Icon"
                  className="h-10 w-10"
                />
              </button>
              {profileOpen && <ProfileDropdown />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LowerNav;
