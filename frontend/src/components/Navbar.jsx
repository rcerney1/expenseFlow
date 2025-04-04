import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex gap-4">
      <Link to="/" className="text-blue-600 font-semibold">Home</Link>
      <Link to="/expenses" className="text-blue-600 font-semibold">Expenses</Link>
      <Link to="/subscriptions" className="text-blue-600 font-semibold">Subscriptions</Link>
    </nav>
  );
}
