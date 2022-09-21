import { Route, Routes } from 'react-router-dom';
import Calc from './Components/Calculator';
import Home from './Pages/Home';
import Quote from './Pages/Quotes';
import Nav from './Components/Navbar';

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
