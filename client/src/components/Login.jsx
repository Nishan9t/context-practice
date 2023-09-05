import React, { useContext, useState } from 'react'

import { DataContext } from '../Context/ContextProvider';
import { Link } from 'react-router-dom';

export default function Login() {



  const {loginUser}=useContext(DataContext);

  const [userCredential,setUserCredential]=useState({
    email:"", 
    password:''
  })

 
const handleSubmit=(e)=>{
  e.preventDefault();
  loginUser(userCredential)
}
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
    <form className="bg-white w-1/2  p-8 rounded shadow-md" onSubmit={(e)=>handleSubmit(e)}>
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
          onChange={(e)=>setUserCredential({...userCredential,[e.target.name]:e.target.value})}
          value={userCredential.email}
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
          onChange={(e)=>setUserCredential({...userCredential,[e.target.name]:e.target.value})}
          value={userCredential.password}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
      <div className='flex justify-center'>
      <p>Don't have an account </p>
      <Link className="no-underline border-b border-blue ml-4 text-blue-500" to="/signup">
      Signup
      </Link>
      </div>
    </form>
  </div>
  )
}
