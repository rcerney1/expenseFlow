import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "text-gray-700 hover:text-blue-600 transition-colors duration-200";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          💰 ExpenseFlow
        </h1>
        <div className="flex gap-6 text-lg">
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
      </div>
    </nav>
  );
}
