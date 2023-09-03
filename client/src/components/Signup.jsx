import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

export default function Signup() {

  const navigate=useNavigate();

  const [userCredential,setUserCredential]=useState({
    name:'',
    email:'',
    password:''
  })

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post('http://localhost:8000/signup',{
        ...userCredential
      })
    //  console.log(res)
     navigate("/login");

    }
    catch(error)
    {
      console.log(error.message);
    }
  }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
    <form className="bg-white w-1/2  p-8 rounded shadow-md" onSubmit={(e)=>handleSubmit(e)} >
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-2" htmlFor="username">
         Name
        </label>
        <input
          type="text"
          id="username"
          name="name"
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-400"
          onChange={(e)=>setUserCredential({...userCredential,[e.target.name]:e.target.value})}
          value={userCredential.name}
          required
        />
      </div>
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
        Sign Up
      </button>
      <div className='flex justify-center'>
      <p>Already have an account </p>
      <Link className="no-underline border-b border-blue ml-4 text-blue-500" href="../login/">
      Log in
      </Link>
      </div>
    </form>
  </div>
  )
}
