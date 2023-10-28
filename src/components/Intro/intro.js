import React from 'react';
import './intro.css';
import character from '../../assets/character.png';
import btnImg from '../../assets/btnImg.png';
import {Link} from 'react-scroll';

const intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>My name is <span className='introName'>Anthony</span> <br />Welcome to my Portfolio!</span>
        <p className='introPara'>I'm a junior in Hunter College! I love CS!</p>
        <Link><button className='btn'><img src={btnImg} alt="Hire Me!" className='btnImg'/>Hire Me!</button></Link>
      </div>
      <img src={character} alt='Profile' className='bg'/>
    </section>
  )
}

export default intro;