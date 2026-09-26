// Skill Swap Platform – Odoo Hackathon 2025 Final Submission
// Author: Nikhil, Tejas, Kush Arora, Rahul Goyal

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FiHome, FiRefreshCcw, FiUser } from 'react-icons/fi';
import { BiLogOut } from 'react-icons/bi';
import Profile from './profile';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-blue-50 text-black">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 flex flex-col justify-between border-r shadow">
          <div>
            <h1 className="text-xl font-bold text-blue-600 mb-10">SkillSwap</h1>
            <nav className="space-y-4">
              <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <FiHome /> Browse
              </Link>
              <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <FiRefreshCcw /> Swaps
              </a>
              <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <FiUser /> My Profile
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                N
              </div>
              <span className="absolute top-0 right-0 block w-3 h-3 bg-white rounded-full ring-2 ring-red-500" />
            </div>
            <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-red-600">
              <BiLogOut /> Logout
            </button>
          </div>
        </aside>

        {/* Main Content with Routing */}
        <main className="flex-1 p-10 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Default Home page content
function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Find Your Skill Swap Partner</h1>
      <p className="text-gray-500 mb-6">
        Search for developers, designers, marketers, and more.
      </p>

      <div className="max-w-xl mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name, location, or skill (e.g., Photoshop, Python)..."
            className="w-full p-3 pl-10 rounded border border-gray-300 shadow-sm"
          />
          <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
        </div>
      </div>

      <div className="text-center mt-20">
        <h2 className="text-lg font-semibold">No users found</h2>
        <p className="text-gray-500">
          Try adjusting your search term or check back later.
        </p>
      </div>
    </>
  );
}
