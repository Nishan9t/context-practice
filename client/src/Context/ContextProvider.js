
import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const DataContext=createContext();

const ContextProvider=({children})=>{
    const [account,setAccount]=useState();
    const navigate=useNavigate();


    const signinUser=async(userCredential)=>{
        try{
            const res=await axios.post('http://localhost:8000/signup',{
              ...userCredential
            })
            if(res)
            {
              if(!res.errors)
              {
                console.log(res);
                navigate("/login")
              }
            }
           
      
          }
          catch(error)
          {
            console.log(error);
          }
    }

    const loginUser=async(userCredential)=>{
       
        try{
          const res= await axios.post('http://localhost:8000/login',{
            ...userCredential
          });
          
          if(res.data)
          {
            if(!res.errors)
              {
                console.log(res);
                await setAccount(res.data.user.name)
                await localStorage.setItem("token",res.data.data)
              
               navigate("/")
                

              }
          
          }
          
    
        }
        catch(error)
        {
          console.log(error);
        }
      }

      
      

    return(
        <DataContext.Provider value={{
            account,
            setAccount,
            signinUser,
            loginUser
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default ContextProvider;