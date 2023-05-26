import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}></Route>
      </Routes>
      <Footer/>
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
