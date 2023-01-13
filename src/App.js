// import logo from './logo.svg';
import './App.css';
import Quizapp from './components/quizapp';
import Quizapp2 from './components/quizapp2';
import Qquizzapp3 from './components/qquizzapp3';
import data from './components/resources/resource';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Quizapp/>}/ >
        <Route path='/app' element={<Quizapp2 anmol={data}/>}/>
        <Route path='/result' element={<Qquizzapp3/>} />
      </Routes>
   
  );
}

export default App;