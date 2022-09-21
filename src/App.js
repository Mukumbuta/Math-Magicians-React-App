import { Route, Routes } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Home from './Pages/Home';
import Quote from './Pages/Quotes';
import Navbar from './Components/Navbar';

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
