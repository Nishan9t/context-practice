
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import ContextProvider, { DataContext } from './Context/ContextProvider';
import Main from './components/Main';
import { useContext } from 'react';

function App() {
 
  return (
    <ContextProvider>
       <BrowserRouter>

          <Routes>
           
              <Route path='/login' element={<Login/>} />

              <Route path='/signup' element={<Signup/>} />
              <Route path='/' strict element={<Navigate replace to="/login" />} />
          </Routes>
        </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
