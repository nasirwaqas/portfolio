import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = (id) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">Nasir Waqas</div>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="hamburger" />
          </button>

          <nav className={`nav-menu ${navOpen ? 'open' : ''}`}>
            <button onClick={() => handleNavClick('home')}>Home</button>
            <button onClick={() => handleNavClick('about')}>About</button>
            <button onClick={() => handleNavClick('skills')}>Skills</button>
            <button onClick={() => handleNavClick('projects')}>Projects</button>
            <button onClick={() => handleNavClick('contact')}>Contact</button>
            <button onClick={() => handleNavClick('contact')}>GitHub</button>

          </nav>
        </div>
      </header>

      <main className="main-content">
        <section id="home" className="section full-width">
          <Hero />
        </section>

        <section id="about" className="section full-width">
          <About />
        </section>

        <section id="skills" className="section full-width">
          <Skills />
        </section>

        <section id="projects" className="section full-width">
          <Projects />
        </section>

        <section id="contact" className="section full-width">
          <Contact />
        </section>
         <section id="github" className="section full-width">
           <a
             href="https://github.com/nasirwaqas"
             className="github-link"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Open GitHub profile in a new tab"
             style={{ display: 'block', textAlign: 'center', padding: '2rem 1rem', color: 'inherit', textDecoration: 'none' }}
           >
             <div className="github-content">
               <h2>GitHub</h2>
               <p>View my projects and repositories</p>
             </div>
           </a>
         </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
}
