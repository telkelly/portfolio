import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import React from "react";

function App() {
  return (
    <div className='app-grid'>
      <Navbar className="header" />
      <About className="main-content" />
      <Projects className="projects"/>
      <Footer className="footer"/>
    </div>
  );
}


export default App;
