import React, {useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/index.js';
import { Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect (() => {
    const hideMenu = () => {
     if(window.innerWidth > 768 && isOpen){
       setIsOpen(false)
       console.log('i resized here')
     } 
    }
  window.addEventListener('resize', hideMenu)
  return () => {
    window.removeEventListener('resize', hideMenu);
  }
  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
     <Routes>
     <Route path='/'  element={<Home />} />
     <Route path='/about' element={<About /> } />
     <Route path='/contact' element={<Contact /> } />
     <Route path='/menu' element={<Menu /> } />
     </Routes> 
     <Footer />
    </>
  );
}

export default App;
