import './App.css';
import {useState} from 'react'
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudent from './components/AddStudent';
import ListStudents from './components/ListStudents';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage'
import NavBar from './components/NavBar';
import RegisterPage from './Pages/RegisterPage';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
  return (
    <BrowserRouter>   
      {isLoggedIn && <NavBar />}  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
