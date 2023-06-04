import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import cartlogo from '../AppPages/Assets/cartlogo.png';
import proflogo from '../AppPages/Assets/proflogo.jpg';

const Navbar = () => {
  return (
    <nav>
      <h1 class= "shop-name">BShop</h1>
        
        <Link to="/cart">     
        <Link to= "/Shop-Home"> <button>Shop</button></Link> 
        <Link to= "/Signup"><button>Register</button></Link>
        <Link to= "/Login"><button>Login</button></Link> 
 
    </Link>  
    <Link to='/Report'>  
    <div className='cart-logo'>  
        <img src={cartlogo} alt='No img'/>
        <span className='cart-logo-css'></span>   
    </div>
    </Link> 
  
    <Link to="/"> 
        <img src= {proflogo} className='pofile-icon' />
    
    </Link>
 
    </nav> 
    
)
}
 
export default Navbar;  