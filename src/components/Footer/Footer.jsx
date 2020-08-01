import React from "react";
import "./Footer.css"

const Footer = ()=>{
    return (
        <footer id="footer" className="footerWrapper">
    <div className="footerLeftWrapper">
      <h3>Contact</h3>
      <hr></hr>
      <p>Brandon Richter</p>
      <p>1873 Post Oak Rd</p>
      <p>Keithville La 71047</p>
      <p>Phone: (318)347-0914</p>
      <p>Email: Firewlker21@yahoo.com</p>
    </div>
    <div className="footerCenterWrapper">
      <div className="footerSocialLinks"></div>
      <div className="socialLinksWrapper">
        

        <a href="https://www.facebook.com/RichtersCreativeDesign/"><i class="fab fa-facebook-f footer-icon social-links" >  </i></a>
  
        <a href="https://www.instagram.com/richters_creative_design/"><i class="fab fa-instagram footer-icon social-links"></i></a>
  
        <i class="fas fa-envelope footer-icon social-links"></i>
      </div>
      <p class="copywrite">© {new Date().getFullYear()} Richters Web Design</p>
      <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>

    <div className="footerRightWrapper">
      <h3>Links</h3>
      <hr></hr>
      <p>Home</p>
      <p>About</p>
      <p>Gallery</p>
      <p>Products</p>
    </div>
  </footer>
    )
    
}
export default Footer;