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
                        <span style={{fontWeight: 'bold', fontSize: '84px'}}>Ben</span> is a student and undergraduate researcher at the University of Virginia. He's
                        interested in UI/UX development, software engineering, and astronomy.
                    </div>
                    <LFCard />
                </div>
            </div>
            <div className='section large'>
                <ProjectCard
                name='Grocery List Assistant'
                imgPath={image_3}
                desc='AI model equipped with NLP to help you decide the best store to visit'/>
                <ProjectCard
                name='Exoplanet Research'
                imgPath={jband}
                desc='Stellar differential imaging and forward modeling with Jupyter and pyklip'/>
                <ProjectCard
                name='Kyrdle'
                imgPath={projOne}
                desc='Wordle clone using React'/>
            </div>
            <div className='section small' style={{fontSize: 60}}>
                Click a planet to learn more about me!
            </div>
            <ContactSystem/>
        </>
    )
}