import React, { useState } from 'react';
import './projects.scss';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { myProjects } from './data';

export default function Projects() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (direction) => {
        direction === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 4) : setCurrentSlide(currentSlide < myProjects.length -1 ? currentSlide +1 : 0); 
    }

    return (
        <div className='projects' id='projects'>
            <h2>Projects</h2>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw`}}>
                {myProjects.map(d => (
                <div className="slider-container">
                    <div className="slider-item">
                        <div className="left">
                            <div className="left-container">
                                <p>{d.desc}</p>
                                <div className="icon-container">
                                    {d.lang}
                                </div>
                                <div className="links">
                                    <a href={d.live} target='_blank' className='project-link'>Live</a>
                                    <a href={d.git} target='_blank' className='project-link'>Github</a>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-container">
                                <img className='project-screenshot' src={d.img}/>
                                <h3>{d.title}</h3>
                            </div>
                        </div>
                    </div>  
                </div>))}
            </div>
            <FaAngleLeft className='arrow left' onClick={() => handleClick('left')} />
            <FaAngleRight className='arrow right' onClick={() => handleClick('right')} />
        </div>
    )
}
