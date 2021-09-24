import React from 'react'
import './skills.scss'
import { FaReact, FaJs, FaSass, FaNode, FaPhp, FaJava, FaPython } from 'react-icons/fa';
import { SiMysql, SiCsharp, SiJquery } from 'react-icons/si';
import { TiHtml5, TiCss3 } from 'react-icons/ti';
export default function Skills() {
    return (
        <div className='skills' id='skills'>
            <h2>Skills</h2>
            <div className="langs">
                <div className="lang">
                    <TiHtml5 className='lang-icon html5'/>
                </div>
                <div className="lang">
                    <TiCss3 className='lang-icon css3'/>
                </div>
                <div className='lang'>
                    <FaJs className='lang-icon js'/>
                </div>
                <div className="lang">
                    <FaSass className='lang-icon sass'/>
                </div>
                <div className="lang">
                    <FaReact className='lang-icon react'/>
                </div>
                <div className="lang">
                    <SiJquery className='lang-icon jquery'/>
                </div>
                <div className="lang">
                    <FaNode className='lang-icon node'/>
                </div>
                <div className="lang">
                    <FaPhp className='lang-icon php'/>
                </div>
                <div className="lang">
                    <SiMysql className='lang-icon sql'/>
                </div>
                <div className="lang">
                    <FaJava className='lang-icon java'/>
                </div>
                <div className="lang">
                    <SiCsharp className='lang-icon csharp'/>
                </div>
                <div className="lang">
                    <FaPython className='lang-icon python'/>
                </div>
            </div>
        </div>
    )
}
