import React from "react";
import "../App.css";
import WebLogo from '../assets/mang-games-logo.png'

const Header = () => {

  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const headerContainer = document.querySelector('.header-container')
    header.classList.toggle("sticky", window.scrollY > 0)
    headerContainer.classList.toggle("sticky", window.scrollY > 0)
  })

  return (
    <div className="header-container">
      <header id="header" className="flex py-5 mx-10 px-6 items-center">
        <div className="cursor-pointer">
          <img className="h-16" src={WebLogo} alt="Mang Games Logo" />
        </div>
        <nav className="ml-auto">
          <ul className="flex gap-4 text-brand-color nav-item-list font-semibold">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#category">Categories</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
