import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div className={`App ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="container">
          <h1 className='a'>Interactive Navigation Menu</h1>
          <ul>
            <li><a href="#section1">Blue Gradient Square</a></li>
            <li><a href="#section2">Circle with Gradient</a></li>
            <li><a href="#section3">Gradient Square</a></li>
            <li><a href="#section4">Circled Gradient</a></li>
            <li><a href="#section5">Conic Gradient</a></li>
          </ul>
        </div>
      </nav>

      <section id="section1" className="section blue-gradient-square">
        <h2>Blue Gradient Square</h2>
      </section>

      <section id="section2" className="section circle-gradient">
        <h2>Circle with Gradient</h2>
      </section>

      <section id="section3" className="section blue-gradient">
        <h2>Gradient Square</h2>
      </section>

      <section id="section4" className="section circle">
        <h2>Circled Gradient</h2>
      </section>

      <section id="section5" className="section gradient">
        <h2>Conic Gradient</h2>
      </section>
    </div>
  );
}

export default App;
