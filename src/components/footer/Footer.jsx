import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className="socials">
                <div className="social">
                    <a href="https://www.linkedin.com" target='_blank'><FaLinkedin className='social-icon linkedin'/></a>
                </div>
                <div className="social">
                    <a href="https://www.github.com" target='_blank'><FaGithub className='social-icon github'/></a>
                </div>
                <div className='social'>
                    <a href="https://www.twitter.com" target='_blank'><FaTwitter className='social-icon twitter'/></a>
                </div>
            </div>
            <div className="contact-message">
                <p>Please visit my LinkedIn, Github and Twitter pages!</p>
            </div>
        </div>
    )
}
