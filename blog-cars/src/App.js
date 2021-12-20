import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './Components/HomePage/HomPage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';


function App() {

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Sidebar />
        <section className="App-body-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
