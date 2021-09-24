import React from 'react';
import './about.scss';
import myPic from '../aboutme/picofme.jpg';

export default function About() {
    return (
        <div className='about' id='about'>
            <h2>About Me</h2>
            <div className="all-about-me">
                <div className="headshot-container">
                    <img className='headshot' src={myPic} />
                    <a className='CV' target='_blank' href="http://www.google.co.uk" alt='My CV'>CV</a>
                </div>
                <div className="information">
                    <p>Learning how to code has been a long journey full of difficulties, but a journey I'm happy to embark on.
                    <br/>
                    <br/>
                    I'm an aspiring full stack developer with extensive experience in other fields that I feel will aid me in this goal.
                    <br/>
                    <br/>
                    Prior to embarking on this tech journey, I have worked in the education industry as a school teacher & ESL teacher, and I've worked in the security industry as a SOC Analyst.
                    <br/>
                    <br/>
                    Alongside learning software development and honing my coding skills, I am a Masters of Education student at the University of Exeter.</p>
                </div>
            </div>
        </div>
    )
}
