import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './nav.css';





function Nav() {
  const [navState, setNavState] = useState(false);
  const handleClick = () =>{setNavState(!navState)}
  return (
    <div>
      <div className= "hamburger" onClick={handleClick}>
     <div className="line"></div>
		<div className="line"></div>
		<div className="line"></div>
     </div>

    <nav className={`navBar ${navState ? 'open' : ""}`}>
     <ul className="navItemWrapper">
     <Link to="/">
     <li className="navItem" onClick={handleClick}>Home</li>
     </Link>
     <Link to="/about">
     <li className="navItem" onClick={handleClick}>About</li>
     </Link>
     <Link to="/gallery">
     <li className="navItem navItemCenter" onClick={handleClick}>Gallery</li>
     </Link>
     <Link to="/products">
     <li className="navItem" onClick={handleClick}>Products</li>
     </Link>
     <Link to="/contact">
     <li className="navItem" onClick={handleClick} >Contact</li>
     </Link>
       
       {/* <li className="navItem navItemCenter"><a className="navItemText" href="">Gallery</a></li> */}
       
     </ul>
     
	
    </nav>
     
    </div>
   
  
	
  );
}

export default Nav;