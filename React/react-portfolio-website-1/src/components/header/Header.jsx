import React from 'react'
import './header.css'
import CTAButton from './CTAButton'
import ME from '../../assets/webdev.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello i'm</h5>
            <h1>Dale-Anthony Hines</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <CTAButton />
            < HeaderSocials/>
            <div className="me">
                <img src={ME} alt="me" />
            </div>
            
              
            
    <a href="#contact" className="scroll__down">Scroll down</a>


        </div>
    </header>
  )
}

export default Header