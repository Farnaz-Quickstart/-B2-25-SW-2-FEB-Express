import './App.css';
import {useState} from 'react'
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudent from './components/AddStudent';
import ListStudents from './components/ListStudents';
import LoginPage from './Pages/LoginPage';
import NavBar from './components/NavBar';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
  return (
    <BrowserRouter>
      {isLoggedIn ? <NavBar /> : null }
      <Routes>
          <Route path="/" element={ 
            isLoggedIn ? (
             <>
             <h1 className="text-center mt-3">Welcome Student</h1>
              <AddStudent />
              <ListStudents />
            </>
            ) : (
              <Navigate to="/login" />
            )


          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h2>Page not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
