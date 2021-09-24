import React from 'react'
import './hero.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';




export default function Hero() {

    const lottieImage1 = useRef(null);

    useEffect(() => {
        Lottie.loadAnimation({
            container: lottieImage1.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./coding-animation.json')
        });
        return () => {
            Lottie.destroy();
          };
    }, []);

    const textRef = useRef();
    
    useEffect(() => {

        init(textRef.current, {
            startDelay: 300,
            typeSpeed: 100,
            showCursor: true,
            cursorChar: '.', 
            backDelay: 300,
            backSpeed: 100,
            loop: false,
            strings: ['teacher', 'student', 'Full Stack Developer'],
        });

    }, []);

    return (
        <div className='hero' id='home'>
            <div className="hero-text">
                <h1 className='intro-text'>Hello, my name is <span>Jihad</span></h1>
                <p className='intro-sent'>and I am a <span ref={textRef}></span></p>
            </div>
            <div className="lottie-image" ref={lottieImage1}></div>
        </div>
    )
}
