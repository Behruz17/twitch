import React from 'react'
import './BurgerMenu.css'
import { animateScroll, scroller } from 'react-scroll';

export default function BurgerMenu({className, closeBurger}) {

  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  

  return (
    <div className={className}>
        <div className="burger-nav">
            <ul className="burger-list">
                <li className="burger-list-item"><a onClick={() => {closeBurger(); scrollToSection("home")}} href="#" className="burger-link">Home</a></li>
                <li className="burger-list-item"><a onClick={() => {closeBurger(); scrollToSection("about")}} href="#about" className="burger-link">About us</a></li>
                <li className="burger-list-item"><a onClick={() => {closeBurger(); scrollToSection("advantages")}} href="#advantages" className="burger-link">Advantages</a></li>
                <li className="burger-list-item"><a onClick={() => {closeBurger(); scrollToSection("tarif")}} href="#" className="burger-link">Tariffs</a></li>
                <li className="burger-list-item"><a onClick={() => {closeBurger(); scrollToSection("request")}} href="#" className="burger-link">Request</a></li>
            </ul>
        </div>
    </div>
  )
}
