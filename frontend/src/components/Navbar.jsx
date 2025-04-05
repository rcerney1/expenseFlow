import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600 transition-all duration-200";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">💰</span>
            <h1 className="text-xl font-bold text-blue-600">ExpenseFlow</h1>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 text-lg">
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
            <NavLink to="/expenses" className={linkStyle}>
              Expenses
            </NavLink>
            <NavLink to="/subscriptions" className={linkStyle}>
              Subscriptions
            </NavLink>
          </div>

          {/* Hamburger icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-all"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-4 text-lg">
            <NavLink to="/" className={linkStyle} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/expenses" className={linkStyle} onClick={() => setMenuOpen(false)}>
              Expenses
            </NavLink>
            <NavLink to="/subscriptions" className={linkStyle} onClick={() => setMenuOpen(false)}>
              Subscriptions
            </NavLink>
          </div>
        </div>
      )}

    </nav>
  );
}
