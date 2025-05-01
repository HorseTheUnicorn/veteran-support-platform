import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/profile" className="hover:underline">Profile</Link></li>
        <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
      </ul>
    </nav>
  );
}
