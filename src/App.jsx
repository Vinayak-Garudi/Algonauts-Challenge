import { Header } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home';
import { Game } from './components/Game';
import { AfterBuy } from './components/AfterBuy/AfterBuy';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/game' element={<Game />} />
          <Route path='/afterBuy' element={<AfterBuy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
