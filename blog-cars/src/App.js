import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './Components/HomePage/HomePage';
import Create from './Components/Create/Create';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthContext from './contexts/AuthContext';
import BlogPage from './Components/BlogPage/BlogPage';

import UserGuard from './Components/common/Guard/UserGuard';
import RouteGuard from './Components/common/Guard/RouteGuard';
import EditPage from './Components/EditPage/EditPage';
import MyBlogs from './Components/MyBlogs/MyBlogs';
import Groups from './Components/Groups/Groups';
import Profile from './Components/Profile/Profile';
import UserPage from './Components/UserPage/UserPage';


function App() {

  const [user, setUser] = useState(sessionStorage.getItem('userName'));
  const [query, setQuery] = useState('');
  const userId = sessionStorage.getItem('userId');

  function authorization() {

    setUser(sessionStorage.getItem('userName'));

  }

  function logOut() {
    sessionStorage.clear();

    setUser(sessionStorage.getItem('userName'));
  }

  async function search(event) {
    const t = event.target;    
    setQuery(t.value);
    
  }

  return (
    <AuthContext.Provider value={{ user, userId, query }}>
      <div className="App">
        <Header search={search} user={user} logOut={logOut} />
        <div className="App-body">
          <Sidebar />
          <section className="App-body-content">
            <Routes>

              <Route exact path="/" element={<HomePage />} />

              <Route element={<RouteGuard />}>
                <Route path="/create" element={<Create />} />
                <Route path='/blog/:id' element={<BlogPage />} />
                <Route path='/blog/edit/:id' element={<EditPage />} />
                <Route path='/my-blogs' element={<MyBlogs />} />
                <Route path='/groups' element={<Groups />} />
                <Route exact path='/profile/:id' element={<Profile />} />
                <Route path='/user/:id' element={<UserPage />} />

              </Route>


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
