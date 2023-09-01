import React from 'react'

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
    <form className="bg-white w-1/2  p-8 rounded shadow-md" >
      <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-400"
        //   onChange={handleChange}
        //   value={formData.email}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-400"
        //   onChange={handleChange}
        //   value={formData.password}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  </div>
  )
}
