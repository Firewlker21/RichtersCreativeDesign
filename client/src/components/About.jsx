import React from "react";
import Footer from "./Footer/Footer"

function About() {
   return (
       <div>
       <div className= "aboutWrapper">
      
       <div className="aboutInnerWrapper"> 
       <h1 className= "pageHeading">Meet the Richters</h1>
       <div className="aboutContentWrapper">
     
       <img src="/images/familyLSUgame.jpg" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
       </div>
       
       
      
       <Footer />
       </div>
            
       </div>
    
   )
};

export default About;