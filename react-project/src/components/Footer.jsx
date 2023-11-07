import React from "react";
import {Link} from 'react-router-dom'
import {CiTwitter} from  'react-icons/ci'
import {AiOutlineFacebook ,AiOutlineInstagram ,AiOutlineLinkedin} from 'react-icons/ai'
export default function Footer(){
    return(
       <footer>
         <div className="container footer_container">
                <article>
                    <Link to='/' className="logo">
                        <img  src={'./images/logo.png'} alt="footer logo"/>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Maecenas porttitor congue massa. Fusce posuere,
                    </p>
                    <div className="footer_socials">
                        <a href="https://linkedin.com/" target="_blank" rel="noreffer noopener"><AiOutlineLinkedin /></a>
                        <a href="https://facebook.com/" target="_blank" rel="noreffer noopener"><AiOutlineFacebook /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreffer noopener"><CiTwitter /></a>
                        <a href="https://instagram.com/" target="_blank" rel="noreffer noopener"><AiOutlineInstagram /></a>
                    </div> 
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Studies</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Communities</Link>
                <Link to='/s'>FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/s'>Support</Link>
            </article>
          
         </div>
        <div className="foote_copyright">
            <small>2023 EGATOP TUTORIALA  &copy; All Rights Reserved</small>
        </div>
       </footer>
    )
}