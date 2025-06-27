import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div className="app-grid">
            <Navbar className="header" />
            <About className="main-content" />
            <Projects />
            <Footer className="footer" />
        </div>
    );
}

export default HomePage;