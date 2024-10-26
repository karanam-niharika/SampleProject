import logo from './logo.svg';
// import './App.css';
import Home from './Home';
import Login from './Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbarpage from './Navbarpage';
import Contactpage from './Contactpage';
import ServicesPage from './ServicesPage';
import Productspage from './Productspage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to='/'></Link>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='Home' element={<Home />}></Route>
          <Route path='Navbarpage' element={<Navbarpage />}></Route>
          <Route path='Contactpage' element={<Contactpage />}></Route>
          <Route path='Productspage' element={<Productspage />}></Route>
          <Route path='ServicesPage' element={<ServicesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
