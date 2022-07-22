import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx'
import Company from './components/Company.jsx'
import Techno from './components/Techno.jsx';
import Economic from './components/Economic.jsx';
import Contact from './components/Contact.jsx';
import Form from './components/Form.jsx'

function App() {
  
  function closeForm() {
    document.querySelector('.form').style.display =  "none"
    document.querySelector('body').style.overflowY =  "scroll"
    document.querySelector('body').style.paddingRight =  "0px"

  }
  function showForm() {
    document.querySelector('.form').style.display =  "block"
    document.querySelector('body').style.overflowY =  "hidden"
    document.querySelector('body').style.paddingRight =  "7px"

  }

  return (
   
    <div className="App">
      
        <Router>
          <Form closeForm={closeForm}/>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/company" element={<Company/>} />
            <Route path="/techno" element={<Techno/>} />
            <Route path="/economic" element={<Economic/>} />
            <Route path="/contact" element={<Contact showForm={showForm}/>} />
          </Routes>
          <Footer showForm={showForm}/>
        </Router>
    </div>
  );
}




export default App;
