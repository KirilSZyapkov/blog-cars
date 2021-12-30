import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './Components/HomePage/HomPage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';


function App() {

  const [user, setUser] = useState(sessionStorage.getItem('userName'));

  function authorization() {
    setUser(sessionStorage.getItem('userName'));
  }

  function logout() {
    setUser(sessionStorage.getItem('userName'));
  }

  return (
    <div className="App">
      <Header user={user} />
      <div className="App-body">
        <Sidebar />
        <section className="App-body-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login authorization={authorization}/>} />
            <Route path="/register" element={<Register authorization={authorization} user={user}/>} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
