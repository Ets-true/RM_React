import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Units/Navbar/Navbar';
import Footer from './components/Units/Footer/Footer';
import Main from './components/main/main.page'
import Company from './components/Company/Company'
import Techno from './components/Techno/Techno';
import Plants from './components/Plants/Plants';
import Plant from './components/Plants/Plant';
import Economic from './components/economic/economic.page';
import Contact from './components/Contact/Contact';
import Form from './components/Units/Form/Form'
import Archive from './components/Archive/Archive';
import NotFound from './components/404/NotFound';


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


  useEffect(()=>{
    if(
      (document.location.href.includes("/company") || document.location.href.includes("/techno") ||
      document.location.href.includes("/economic") || document.location.href.includes("/contact") || document.location.href.includes("/plants")) 
      && 
      document.documentElement.clientWidth < 768
    ){
      document.location.href = "/"
    }
  }, [])

  return (
   
    <div className="App">
        <div className="push">
          <div className="push-wrap">
             Ваше сообщение успешно доставлено
          </div>
        </div>
        <Router>
          <Form closeForm={closeForm}/>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/company" element={<Company/>} />
            <Route path="/techno" element={<Techno/>} />
            <Route path="/economic" element={<Economic/>} />
            <Route path="/archive" element={<Archive/>} />
            <Route path="/contact" element={<Contact showForm={showForm}/>} />

            <Route path="/plants" element={<Plants/>} />
            <Route path="/plants/moim" element={<Plant name='Moim'/>} />
            <Route path="/plants/mepho" element={<Plant name='Mepho'/>} />
            <Route path="/plants/ksor" element={<Plant name='Ksor'/>} />
            <Route path="/plants/murm" element={<Plant name='Murm'/>} />


            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer showForm={showForm}/>
        </Router>
    </div>
  );
}




export default App;
