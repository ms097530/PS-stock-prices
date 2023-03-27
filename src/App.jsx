
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Stock from './components/Stock';
import Dashboard from './components/Dashboard';
import data from './data/stock-data'

function App()
{
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/stocks/:symbol' element={<Stock stocks={data} />} />
        <Route path='/stocks' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
