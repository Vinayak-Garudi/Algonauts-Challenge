import { Header } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home';
import { Game } from './components/Game';
import { AfterBuy } from './components/AfterBuy/AfterBuy';
import { Easy } from './components/Easy';
import { Medium } from './components/Medium';
import { Hard } from './components/Hard';
import { AfterBuyM } from './components/AfterBuyM/AfterBuyM';
import { AfterBuyH } from './components/AfterBuyH/AfterBuyH';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/game' element={<Game />} />
            <Route path='/afterBuy' element={<AfterBuy />} />
            <Route path='/easy' element={<Easy />} />
            <Route path='/medium' element={<Medium />} />
            <Route path='/hard' element={<Hard />} />
            <Route path='/afterBuyM' element={<AfterBuyM />} />
            <Route path='/afterBuyH' element={<AfterBuyH />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
