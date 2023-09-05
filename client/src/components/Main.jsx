import React, { useContext } from 'react'
import { DataContext } from '../Context/ContextProvider';

export default function Main() {

  const {account}=useContext(DataContext);

  const handleClick=()=>{
    localStorage.removeItem('token')
    window.location.reload();
  }
  return (
    <div className='flex flex-col'>
    
      <div className='m-16 border border-2 border-orange-500'>
    <h1 className='font-bold text-3xl max-w-full text-center my-4 text-green-600'>
      Hello , {account ? account : "nothing"}
      </h1>
      <p className='text-xl max-w-full text-center my-4 text-gray-500'>Thankyou for logging in</p>
      </div>

      <button
        type="submit"
        className="w-1/2 mx-auto my-4 bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600"
        onClick={handleClick}
      >
        Logout
      </button>
    
    
   
    </div>
    
  )
}
