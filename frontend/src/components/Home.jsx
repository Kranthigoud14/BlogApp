import React from "react";
import { Link } from "react-router-dom";

function Home() {
  // Check if user is logged in
  // Change "token" if you use a different key in localStorage
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Read, Write, and Share Blogs
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Read blogs, share your thoughts through comments, and publish your
            own stories.
          </p>

          <div className="flex flex-col items-center sm:flex-row justify-center gap-4">
            {/* Explore Blogs Button */}
            <Link
              to={isLoggedIn ? "/blogs" : "/login"}
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Explore Blogs
            </Link>

            {/* Register Button */}
            {!isLoggedIn && (
              <Link
                to="/register"
                className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Login Message */}
          {!isLoggedIn && (
            <p className="text-sm text-gray-200 mt-4">
              Please login first to explore blogs.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;