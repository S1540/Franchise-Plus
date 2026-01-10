import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    {
      name: "Franchise",
      href: "#franchise",
      dropdown: [
        { name: "Become a Franchisee", link: "#become-franchisee" },
        { name: "Success Stories", link: "#success-stories" },
        { name: "Investment Details", link: "#investment" },
        { name: "Support & Training", link: "#support" },
      ],
    },
    { name: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md shadow-lg border-b border-amber-500/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-col shrink-0">
            <Link
              to={"/"}
              className="text-2xl font-bold text-white uppercase cursor-pointer hover:text-amber-400 transition-colors duration-300"
            >
              Franchise-Plus
            </Link>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
              Get Better | Set Better
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.dropdown ? (
                  <div className="relative group">
                    <button
                      className="flex items-center space-x-1 text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium cursor-pointer"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className="absolute left-0 mt-2 w-56 bg-gray-950 border border-amber-500/30 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 cursor-pointer"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <div className="py-2">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-amber-700/20 hover:text-amber-400 transition-colors duration-150 rounded-md mx-2"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.link}
                    key={index}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-300 hover:text-amber-400 font-medium transition-colors duration-200 cursor-pointer">
              Sign In
            </button>
            <button className="px-6 py-2 bg-linear-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-lg hover:shadow-amber-900/80 cursor-pointer font-medium hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6 transition-all duration-300 ease-in-out active:rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-all duration-300 ease-in-out active:rotate-60" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-amber-500/20 transition-all duration-300 ease-in-out bg-gray-950/50">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:bg-amber-700/20 hover:text-amber-400 transition-colors duration-150 rounded-lg"
                    >
                      <span className="font-medium">{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="bg-gray-900/70 py-2 rounded-lg mt-2">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.href}
                            className="block px-8 py-2 text-sm text-gray-400 hover:text-amber-400 transition-colors duration-150"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.link}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:bg-amber-700/20 hover:text-amber-400 transition-colors duration-150 font-medium rounded-lg"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="px-4 mt-4 space-y-2">
              <button className="w-full px-4 py-2 text-amber-400 border border-amber-700 rounded-lg hover:bg-amber-700/20 transition-colors duration-200 font-medium">
                Sign In
              </button>
              <button className="w-full px-6 py-2 bg-linear-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-colors duration-200 shadow-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
