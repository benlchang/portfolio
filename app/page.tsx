import './styles/astro.css';
import './styles/style.css';
import './styles/colors-and-fonts.css';
import React from 'react';
import headshot from './images/headshot.jpg';
import image_3 from './images/image_3.jpg';
import jband from './images/jband.png';
import Image from 'next/image';
import projOne from './images/kyrdle.png';
import LFCard from './components/LFCard';
import ProjectCard from './components/ProjectCard';
import ContactSystem from './components/ContactSystem';
import logo from './images/logo_1.png';



export default function Home() {
    return (
        <>
            <div className="section small"/>
            <div className='section large'>
                <div className='sideThing'>
                    <Image src={headshot}
                    className='imgContainer'
                    alt='picture of ben'/>
                </div>
                <div className='textplusframeworks'>
                    <div className='elevator'>
                        <span style={{color: '#9985ff', fontWeight: 'bold', fontSize: 'calc(3.5vw)'}}>Ben</span> is a student and undergraduate researcher at the University of Virginia. He's
                        interested in full-stack development, software engineering, and astronomy.
                    </div>
                    <LFCard />
                </div>
            </div>
            <div className='section small' style={{paddingBottom: '5vh', fontWeight: '700', fontSize: 'calc(30px + 3vw)'}}>
                Projects
            </div>
            <div className='projects'>
                <ProjectCard
                    name='Grocery List Optimizer'
                    imgPath={image_3}
                    desc='Full-stack search engine for Charlottesville grocery shoppers that optimizes your grocery list'
                    stack='React, Express, PostgreSQL, Tensorflow'
                    link='grocery'
                />
                <ProjectCard
                    name='Exoplanet Research'
                    imgPath={jband}
                    desc='Stellar differential imaging and forward modeling with Jupyter and pyklip'
                    stack='Jupyter, pyKLIP'
                    link='hd47127b'
                />
                <ProjectCard
                    name='Personal Website'
                    imgPath={logo}
                    desc='Custom-designed portfolio to showcase my programming projects / experience. From scratch!'
                    stack='React (Typescript), Next.js, SASS'
                    link='portfolio'
                />
            </div>
            <div className='section small' style={{fontWeight: 700, fontSize: 'calc(8px + 4vw)'}}>
                    Click a planet to learn more about me!
                </div>
            <ContactSystem/>
        </>
    )
}