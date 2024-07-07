import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_img from '../assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
           <h2>New Arrivals Only</h2>
      <div className="hand-hand-icon">
    <p>New</p>
    <img src={hand_icon} alt="" srcset="" />
       </div>
       <p>Collection</p>
       <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" srcset="" />
        </div>
<div className="hero-right">
    <img src={hero_img} alt="" srcset="" />

</div>
    </div>
  )
}

export default Hero