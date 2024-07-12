import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h2>Hari Prasad</h2>
                    <p>Front End Developer</p>
                </div>
                <div className="footer-top-right">
                    <input type="text" placeholder='Email' />
                    <div>Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>© 2024 Hari Dhaker. All rights reserved.</p>
                </div>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p> Connect with me</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
