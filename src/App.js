import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Allcharacters from './Pages/Allcharacters';
import CharacterDetails from './Pages/CharacterDetails';
import Exhibitions from './Pages/Exhibitions';
import Episodes from './Pages/Episodes';
import ErrorPage from './Pages/ErrorPage';
import Spinner from './Pages/Spinner';
import NodataFound from './Pages/NodataFound';
import SearchedCharacter from './Pages/SearchedCharacter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/displayPage' element={<Allcharacters />} />
        <Route path='/characterDetail/:id' element ={<CharacterDetails/>}/>
        <Route path='/searchedPage/:name' element={<SearchedCharacter/>}/>
        <Route path='/exhibitions' element={<Exhibitions/>} />
        <Route path='/Episodes' element={<Episodes/>} />
        <Route path="/errorPage" element={<ErrorPage/>} />
        <Route path='/spinner' element={<Spinner/>} />
        <Route path='NoData' element={<NodataFound/>} />
      </Routes>
    </div>
  );
}

export default App
