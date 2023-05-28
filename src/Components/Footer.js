import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-wrapper'>
            <div className='logo'>
            <h2>YELLOW BRICK</h2>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <span></span>
            <p>3891 Ranchview Dr. Richardson, California 62639</p>
            <p>3891 (217) 555-0113</p>
            <p>tranthuy.nute@gmail.com</p>
        </div>
                  <article className='footer-content'>
                         <h3>Company</h3>
                         <p>Career</p>
                    </article>
                    <article className='footer-content'>
                            <h3>About Us</h3>
                            <Link><p>Project</p></Link>
                        <Link><p>Track record</p></Link>
                        <Link><p>Pricing</p></Link>
                        <Link><p>Services</p></Link>
                        <Link><p>Professional Workers</p></Link>
                    </article>
                    <article className='footer-content'>
                                <h3>Pricing</h3>
                        <Link><p>About Product</p></Link>
                        <Link><p>Management</p></Link> 
                    </article>
                    <article className='footer-content'>
                                <h3>Media</h3>
                        <Link><p>Privacy Policy</p></Link>
                        <Link><p>Development</p></Link> 
                        <Link><p>Term and Services</p></Link> 
                    </article>
            </div>
             <div className='footer-copyright'>
               <small>2023 TofunmiOlaniyan &copy; All rights reserved</small>
             </div>
        </div>
        
        
        
    </footer>
  )
}

export default Footer
