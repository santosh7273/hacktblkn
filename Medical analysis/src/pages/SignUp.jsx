import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
