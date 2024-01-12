import React, { useEffect, useState } from 'react'
import './Header.css'
import BurgerIcon from '../BurgerIcon/BurgerIcon'
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { animateScroll, scroller } from 'react-scroll';


const scrollToSection = (id) => {
  scroller.scrollTo(id, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};

export default function Header() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [iconSrc, setIconSrc] = useState('assets/burger.svg');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

function changeMenu(menu){
  setActiveMenu(menu)
  console.log(menu);
}

  const handleButtonClick = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  function closeBurger(){
    setShowBurgerMenu(false)
  }

useEffect(() => {
  showBurgerMenu === true
  ? setIconSrc('assets/burger-x.svg') : setIconSrc('assets/burger.svg');
})

useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const viewportWidth = document.documentElement.clientWidth;
const scrollTop = viewportWidth > 992 ? 48 : 24; 

const handleScroll = () => {
  if (window.scrollY > scrollTop) {
    setIsScrolled(true);
  } else {
    setIsScrolled(false);
  }
};

const homeClass = activeMenu == 'home' ? "nav-list-item active" : "nav-list-item";
const aboutClass = activeMenu == 'about' ? "nav-list-item active" : "nav-list-item";
const advantagesClass = activeMenu == 'advantages' ? "nav-list-item active" : "nav-list-item";
const tarifClass = activeMenu == 'tarif' ? "nav-list-item active" : "nav-list-item";
const requestClass = activeMenu == 'request' ? "nav-list-item active" : "nav-list-item";

  return (
    <>
      {showBurgerMenu ? <BurgerMenu closeBurger = {closeBurger} className="burger-menu-block menu-opened" /> : <BurgerMenu closeBurger = {closeBurger} className="burger-menu-block menu-closed" />}
      <div id='home' className="top">
        <header className={`header ${isScrolled ? 'scrolled-header' : ''}`}>
          <div className="container">
            <div className="header-wrapper">
              <div className="header-box">
                <p className="logo">Stream <span>Viewers</span></p>
                <ul className='nav-list'>
                  <li className={homeClass}><a onClick={() => {changeMenu('home'); scrollToSection("home")}} href="#home">Home</a></li>
                  {/* <li className="nav-list-item"><a onClick={() => scrollToSection("tarif")} href="#tarif">Service</a></li> */}
                  <li className={aboutClass}><a onClick={() => {changeMenu('about'); scrollToSection("about")}} href="#about">About us</a></li>
                  <li className={advantagesClass}><a onClick={() => {changeMenu('advantages'); scrollToSection("advantages")}} href="#advantages">Advantages</a></li>
                  <li className={tarifClass}><a onClick={() => {changeMenu('tarif'); scrollToSection("tarif")}} href="#tarif">Tariffs</a></li>
                  <li className={requestClass}><a onClick={() => {changeMenu('request'); scrollToSection("request")}} href="#tarif">Request</a></li>
                </ul>
                <div className="header-contacts">
                  <div className="email-text"><div className="email-dot"></div> Contact us by e-mail</div>
                  <div className="email-address">Example@gmail.com <div className="email-dot"></div></div>
                </div>
              </div>
              <BurgerIcon iconSrc={iconSrc} onClick={handleButtonClick} />
            </div>
          </div>
        </header>
        <div className="mt40">
          <h1>A service  for <b style={{ fontWeight: 600 }}>increasing <br /> the number</b> <span>of viewers</span> on Twitch</h1>
        </div>
        <p className="top-text">Increase the number of viewers on your streams</p>
        <div className="top-btns">
          <button className='sign-up-btn'>Sign Up</button>
          <button className='log-in-btn'>Log in</button>
        </div>
        <div className="img-container">
          <img className='macbook' src="assets/macbook.png" alt="macbook and iphone" />
          <img className='macbook-mobile' src="assets/macbook-mobile.svg" alt="macbook" />
          <div className="about-bg"></div>
        </div>
      </div>
    </>
  )
}
