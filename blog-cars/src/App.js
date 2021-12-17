import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './Components/HomePage/HomPage';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Sidebar />
        <section className="App-body-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
