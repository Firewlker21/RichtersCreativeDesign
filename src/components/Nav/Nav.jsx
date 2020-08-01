import React, {useState} from 'react';
import './nav.css';
import NavItem from "../NavItem/NavItem";




function Nav() {
  const [navState, setNavState] = useState(false);

  return (
    <div>
      <div className= "hamburger" onClick={() =>{setNavState(!navState)}}>
     <div className="line"></div>
		<div className="line"></div>
		<div className="line"></div>
     </div>

    <nav className={`navBar ${navState ? 'open' : ""}`}>
     <ul className="navItemWrapper">
       <NavItem 
       name= "Home"
       link= "./index.html"
       customStyle= "navItemText"
       />
       <NavItem 
       name= "About"
       link= "./index.html"
       customStyle= "navItemText"
       />
       <NavItem 
       
       name= "Gallery"
       link= "./index.html"
       customStyle= "navItemText"
       customCenterStyle= "navItemCenter"
       />
       <NavItem 
       name= "Products"
       link= "./index.html"
       customStyle= "navItemText"
       />
       <NavItem 
       name= "Contacts"
       link= "./index.html"
       customStyle= "navItemText"
       />
       
       
       {/* <li className="navItem navItemCenter"><a className="navItemText" href="">Gallery</a></li> */}
       
     </ul>
     
	
    </nav>
     
    </div>
   
  
	
  );
}

export default Nav;