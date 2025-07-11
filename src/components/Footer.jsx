import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">
          &copy; {year} Тоқтар Нұрасыл Тұрсынұлы. Барлық құқықтар қорғалған.
        </p>
        <a href="#HeroSection" className="text-light text-decoration-none small">
          🔝 Жоғарыға оралу
        </a>
      </div>
    </footer>
  );
}

export default Footer;
