import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/favicon.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,Setmenu] = useState("Shop")
  return (
    <div className='navbar'>
  <div className='nav_logo'>
    <img src={logo} width={30} alt="Logo"/>
    <p>Shirtfy</p>
  </div>
  <ul className="nav_menu">
  <li onClick={()=>{Setmenu('shop')}}><Link style={{textDecoration:'none'}} to ='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
    <li onClick={()=>{Setmenu('mens')}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==='mens'?<hr/>:<></>}</li>
    <li onClick={()=>{Setmenu('womens')}}><Link style={{textDecoration:'none'}} to=' /womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
    <li onClick={()=>{Setmenu('kids')}}><Link style={{textDecoration:'none'}} to ='/kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
  </ul>
  <div className="nav-login-cart">
    <Link to ='/login'><button>Login</button></Link>
    <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
    <div className="nav_count">0</div>
  </div>
</div>
  )
}

export default Navbar