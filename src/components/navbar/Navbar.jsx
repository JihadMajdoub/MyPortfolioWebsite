import React from 'react'
import './navbar.scss'
import { FaHome } from 'react-icons/fa'; //Home icon
import { FaUserAlt } from 'react-icons/fa'; //About icon
import { FaImage } from 'react-icons/fa'; //Portfolio icon
import { FaCogs } from 'react-icons/fa'; //Skills icon
import { FaEnvelope } from 'react-icons/fa'; //Contact icon

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="logo">
                    <a href="#home" className='logo-title'>Jay</a>
                </div>
                <ul> 
                    <li>
                        <a href="#home"><FaHome className='icon'/>Home</a>
                    </li>
                    <li>
                        <a href="#about"><FaUserAlt className='icon'/>About</a>
                    </li>
                    <li>
                        <a href="#projects"><FaImage className='icon'/>Projects</a>
                    </li>
                    <li>
                        <a href="#skills"><FaCogs className='icon'/>Skills</a>
                    </li>
                    <li>
                        <a href="#contact"><FaEnvelope className='icon'/>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
