import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/favicon.png'
import cart_icon from '../assets/cart_icon.png'
const Navbar = () => {
    const [menu,Setmenu] = useState("Shop")
  return (
    <div className='navbar'>
  <div className='nav_logo'>
    <img src={logo} width={30} alt="Logo"/>
    <p>Shirtfy</p>
  </div>
  <ul className="nav_menu">
  <li onClick={()=>{Setmenu('shop')}}>Shop <hr/></li>
    <li onClick={()=>{Setmenu('mens')}}>Men</li>
    <li onClick={()=>{Setmenu('womens')}}>Women</li>
    <li onClick={()=>{Setmenu('kids')}}>Kids</li>
  </ul>
  <div className="nav-login-cart">
    <button>Login</button>
    <img src={cart_icon} alt="Cart" />
    <div className="nav_count">0</div>
  </div>
</div>
  )
}

export default Navbar