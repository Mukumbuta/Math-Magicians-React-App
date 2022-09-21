import { Route, Routes } from 'react-router-dom';
import Calc from './Components/Calculator.js';
import Home from './Pages/Home.js';
import Quote from './Pages/Quotes.js';
import Nav from './Components/Navbar.js';

const App = () => (
  <div className="App">
    <Nav />
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/calculator" element={<Calc />} />
      <Route exact path="/quotes" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
