
import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import {  useNavigate } from 'react-router-dom';

export const DataContext=createContext();

const ContextProvider=({children})=>{
    const [account,setAccount]=useState();
    const navigate=useNavigate();
  


    const signUpUser=async(userCredential)=>{
        try{
            const res=await axios.post('http://localhost:8000/signup',{
              ...userCredential
            })
            if(res)
            {
              if(!res.errors)
              {
                console.log(res);
               navigate("/login");
                
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
                 setAccount(res.data.user.name)
                 localStorage.setItem("token",res.data.data)

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
            signUpUser,
            loginUser
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default ContextProvider;