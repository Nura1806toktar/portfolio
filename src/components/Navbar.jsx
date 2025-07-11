import React from 'react';
import { Link } from 'react-scroll';

function Navbar({ language, setLanguage }) {
  const sections = [

    { id: 'about', kk: 'Мен туралы', en: 'About' },
    { id: 'skills', kk: 'Дағдылар', en: 'Skills' },
    { id: 'projects', kk: '🔥 Жобалар', en: '🔥 Projects' }, // 👈 ерекше болу үшін emoji және bold
    { id: 'contact', kk: 'Байланыс', en: 'Contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <Link
          className="navbar-brand fw-bold fs-4"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          {language === 'kk' ? 'Менің портфолиям' : 'My Portfolio'}
        </Link>

        <ul className="navbar-nav d-flex flex-row align-items-center gap-3">
          {sections.map((section) => (
            <li className="nav-item" key={section.id}>
              <Link
                className={`nav-link px-3 rounded transition ${
                  section.id === 'projects'
                    ? 'fw-bold btn btn-warning text-dark shadow-sm'
                    : 'text-dark fw-medium hover-underline'
                }`}
                activeClass="active"
                to={section.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                {language === 'kk' ? section.kk : section.en}
              </Link>
            </li>
          ))}

          <li className="nav-item">
            <button
              className="btn btn-outline-dark btn-sm ms-2"
              onClick={() => setLanguage(language === 'kk' ? 'en' : 'kk')}
            >
              🌐 {language === 'kk' ? 'EN' : 'KK'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
