
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import ContextProvider, { DataContext } from './Context/ContextProvider';
import Main from './components/Main';
import { useContext } from 'react';

function App() {

  const user = localStorage.getItem("token")
 
  return (
    <ContextProvider>
      

          <Routes>
            {user && <Route path='/' exact element={<Main/>}/>}
              <Route path='/login' element={<Login/>} />

              <Route path='/signup' element={<Signup/>} />
              <Route path='/' strict element={<Navigate replace to="/login" />} />
          </Routes>
      
    </ContextProvider>
  );
}

export default App;
