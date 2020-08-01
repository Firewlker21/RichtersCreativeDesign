import React from "react";
import "./NavItem.css"

const NavItem = (props)=> {
return (
<li className="navItem"><a className= {`navItemText ${props.customCenterStyle}`}  href={props.link}>{props.name}</a></li> ) }

export default NavItem;