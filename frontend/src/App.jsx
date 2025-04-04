import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Subscriptions from "./pages/Subscriptions";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
      <h1 className="text-2xl text-red-500">App Loaded</h1>

    </div>
  );
}

export default App;
