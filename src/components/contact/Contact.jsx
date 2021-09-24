import React from 'react'
import './contact.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

export default function Contact() {

    const lottieImage2 = useRef(null);

    useEffect(() => {
        Lottie.loadAnimation({
            container: lottieImage2.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./contactme.json')
        });

        return () => {
            Lottie.destroy();
          };
    }, []);

    return (
        <div className='contact' id='contact'>
            <h2>Let's talk!</h2>
            <div className="contact-info">
                <div className="contact-container">
                    <div className="box">
                        <div className="contact-icons"><FaMapMarkerAlt className='contact-icon'/></div>
                        <div className="contact-text">
                            <h3>Location</h3>
                            <p>London & Slough, UK</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="contact-icons"><FaPhoneAlt className='contact-icon'/></div>
                        <div className="contact-text">
                            <h3>Phone</h3>
                            <p>+447737891507</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="contact-icons"><FaEnvelope className='contact-icon'/></div>
                        <div className="contact-text">
                            <h3>Email</h3>
                            <p>me@jihad-majdoub.co.uk</p>
                        </div>
                    </div>
                </div>
                <div className="lottieImage2" ref={lottieImage2}></div>
            </div>
        </div>
    )
}
