
import './App.css';
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import ContextProvider, { DataContext } from './Context/ContextProvider';
import Main from './components/Main';
import { useContext, useEffect } from 'react';

function App() {

  const user = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true }); // Redirect to login if no user token
    }
  }, [user]);

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
