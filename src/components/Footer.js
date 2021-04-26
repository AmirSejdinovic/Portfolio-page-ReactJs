import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer(){
  return(
    <div className="footer-container">
       <section className="footer-subscription">
         <p className="footer-subscription-heading">
           Join the ADVANTURE newsletter to recive our best vacation deals
         </p>
         <p className="footer-subscription-text">You can unsubscribe at any time</p>
        <div className="input-areas">
          <form >
            <input type="email" name="email"  placeholder="Your Email" className="footer-input"/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
        
       </section>
       <div className="footer-links">
           <div className="footer-link-wrapper">
              <div className="footer-link.items">
                <h2>About us</h2>
                 <Link to="/sign-up">How it works</Link>
                 <Link to="/sign-up">Testimonials</Link>
                 <Link to="/sign-up">Careers</Link>
                 <Link to="/sign-up">Investors</Link>
                 <Link to="/sign-up">Terms of Service</Link>
              </div>

              <div className="footer-link.items">
                <h2>Contact us</h2>
                 <Link to="/sign-up">How it works</Link>
                 <Link to="/sign-up">Testimonials</Link>
                 <Link to="/sign-up">Careers</Link>
                 <Link to="/sign-up">Investors</Link>
                 <Link to="/sign-up">Terms of Service</Link>
              </div>

             

             
           </div>

           <div className="footer-link-wrapper">
              <div className="footer-link.items">
                <h2>About us</h2>
                 <Link to="/sign-up">How it works</Link>
                 <Link to="/sign-up">Testimonials</Link>
                 <Link to="/sign-up">Careers</Link>
                 <Link to="/sign-up">Investors</Link>
                 <Link to="/sign-up">Terms of Service</Link>
              </div>

              <div className="footer-link.items">
                <h2>Contact us</h2>
                 <Link to="/sign-up">How it works</Link>
                 <Link to="/sign-up">Testimonials</Link>
                 <Link to="/sign-up">Careers</Link>
                 <Link to="/sign-up">Investors</Link>
                 <Link to="/sign-up">Terms of Service</Link>
              </div>

             

             
           </div>
       </div>
       <section className="social-media">
         <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to='/' className="social-logo">
                LINKS <i className="fab fa-typo3"></i>
              </Link>
            </div>

         </div>
       </section>
    </div>
  )
}

export default Footer;