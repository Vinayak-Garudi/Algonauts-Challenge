import { Header } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home';
import { Game } from './components/Game';
import { AfterBuy } from './components/AfterBuy/AfterBuy';
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
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
