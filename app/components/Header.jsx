import React from 'react';
import { Link } from '@remix-run/react';
import ThemeToggle from './ThemeToggle';

function Header() {
  // Placeholder for user login status and profile
  const userLoggedIn = true; // Set to true for now to show profile icon

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors p-4 flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo (Placeholder) */}
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
          FB
        </div>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">
          Form Builder
        </h1>
      </div>

      <div className="flex items-center">
        {/* Search Bar Placeholder (Optional, can be added later) */}
        {/* <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
        /> */}

        {userLoggedIn ? (
          // User Profile Icon
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold cursor-pointer">
            U
          </div>
        ) : (
          // Login Button (Placeholder)
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
            Log In
          </button>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Link
          to="/form-builder"
          className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg 
                     hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          Create Form
        </Link>
      </div>
    </header>
  );
}

export default Header;