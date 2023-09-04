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
     <button
        type="submit"
        className="w-1/2 mx-auto my-4 bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600"
        onClick={handleClick}
      >
        Logout
      </button>
      <div>
      Main
      <br></br>
      {account ? account : "nothing"}
      
      </div>
    
    
   
    </div>
    
  )
}
