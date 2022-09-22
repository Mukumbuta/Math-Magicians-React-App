import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quotes';
import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/calculator" element={<Calculator />} />
      <Route exact path="/quotes" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
