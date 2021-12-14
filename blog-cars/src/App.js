import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Components/HomePage/HomPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
