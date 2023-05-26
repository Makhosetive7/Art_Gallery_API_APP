import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Allcharacters from './Pages/Allcharacters';
import Exhibitions from './Pages/Exhibitions';
import ErrorPage from './Pages/ErrorPage';
import Spinner from './Pages/Spinner';
import NodataFound from './Pages/NodataFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/displayPage' element={<Allcharacters />} />
        <Route path='/exhibitions' element={<Exhibitions/>} />
        <Route path="/errorPage" element={<ErrorPage/>} />
        <Route path='/spinner' element={<Spinner/>} />
        <Route path='NoData' element={<NodataFound/>} />
      </Routes>
    </div>
  );
}

export default App
