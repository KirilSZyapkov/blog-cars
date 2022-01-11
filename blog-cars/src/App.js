import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './Components/HomePage/HomPage';
import Create from './Components/Create/Create';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthContext from './contexts/AuthContext';
import BlogPage from './Components/BlogPage/BlogPage';

import UserGuard from './Components/common/Guard/UserGuard';
import RouteGuard from './Components/common/Guard/RouteGuard';
import EditPage from './Components/EditPage/EditPage';

function App() {

  const [user, setUser] = useState({});

  useEffect(()=>{
    
    setUser(fetchToken());

  }, []);

  function authorization() {
    
    const token = fetchToken();
    setUser(old=> Object.assign({}, old, token));
  }

  function logOut() {
    sessionStorage.clear();
    c
    const token = fetchToken();
    setUser(old=> Object.assign({}, old, token));
  }

  async function fetchToken(){
    const id = sessionStorage.getItem('userId');
    const username = sessionStorage.getItem('userName');
    const data = {
      username,
      id
    }

    return data;
  }

  return (
    <AuthContext.Provider value={user}>
      <div className="App">
        <Header user={user} logOut={logOut} />
        <div className="App-body">
          <Sidebar />
          <section className="App-body-content">
            <Routes>

              <Route path="/" element={<HomePage />} />

              <Route element={<RouteGuard />}>
                <Route path="/create" element={<Create />} />
              </Route>

              <Route path='/blog/:id' element={<BlogPage />} />
              <Route path='/blog/edit/:id' element={<EditPage />} />

              <Route element={<UserGuard />}>

                <Route path="/login" element={<Login authorization={authorization} />} />
                <Route path="/register" element={<Register authorization={authorization} />} />

              </Route>


            </Routes>
          </section>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
