import { useEffect } from 'react';
import { getAllVideogames } from './actions';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Details from './components/Details/Details'
import CreateForm from './components/CreateForm/CreateForm'
import Landing from './components/Landing/Landing';

function App() {
  
  
  useEffect(() => {
    getAllVideogames()
  }, [])
  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/videogames/:id" element={<Details/>} />
        <Route path="/create" element={<CreateForm/>} />
      </Routes>
      
    </div>
  );
}

export default App;
