import { Route, Routes } from 'react-router-dom';
import './App.css';
import Favorite from './components/Favorite/Favorite';
import Home from "./components/Home";
import Trash from './components/Trash/Trash';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Favorite' element={<Favorite/>}></Route>
      <Route path='Trash' element={<Trash/>}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
