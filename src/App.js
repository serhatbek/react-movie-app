import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import SingleMovie from './components/SingleMovie/SingleMovie';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies/:id' element={<SingleMovie />} />
      </Routes>
    </div>
  );
}

export default App;
