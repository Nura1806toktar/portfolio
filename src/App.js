import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('kk'); // 🌐 kk немесе en

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Hero бөлімі */}
      <HeroSection language={language} />

      {/* Қалған бөлімдер контейнер ішінде */}
      <div className="container mt-5 pt-5">
        <section id="about"><About language={language} /></section>
        <section id="skills"><Skills language={language} /></section>
        <section id="projects"><Projects language={language} /></section>
        <section id="contact"><Contact language={language} /></section>
      </div>

      <Footer language={language} />
    </>
  );
}

export default App;
