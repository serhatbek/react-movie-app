import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import SingleMovie from './components/SingleMovie/SingleMovie';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies/:imdbID' element={<SingleMovie />} />
      </Routes>
    </div>
  );
}

export default App;
