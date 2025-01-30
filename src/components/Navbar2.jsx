import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, Calendar, UserCircle } from "lucide-react";
import Logo from "./logo";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="p-4 flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 font-medium">
        {[
          { to: "/", label: "Home" },
          { to: "/doctors", label: "Doctors" },
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" },
        ].map((item) => (
          <li key={item.to} className="relative group py-1">
            <NavLink to={item.to} className="hover:text-blue-500">
              {item.label}
            </NavLink>
            <hr className="h-0.5 bg-blue-500 w-3/5 m-auto hidden group-hover:block" />
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      {showMenu && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden">
          {[
            { to: "/", label: "Home" },
            { to: "/doctors", label: "Doctors" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.to} className="py-2 w-full text-center">
              <NavLink to={item.to} className="block w-full py-2 hover:text-blue-500">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* User Profile / Login */}
      {token ? (
        <div className="relative flex items-center cursor-pointer">
          <UserCircle size={32} onClick={() => setShowDropdown(!showDropdown)} />
          {showDropdown && (
            <div className="absolute right-0 top-12 bg-white shadow-md rounded-md w-40 p-2 z-20">
              <p
                onClick={() => navigate("/profile")}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <User size={18} /> My Profile
              </p>
              <p
                onClick={() => navigate("/myappointment")}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <Calendar size={18} /> Appointments
              </p>
              <p
                onClick={() => setToken(false)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <LogOut size={18} /> Logout
              </p>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Create Account
        </button>
      )}
    </div>
  );
};

export default Navbar;
