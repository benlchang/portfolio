import './styles/astro.css';
import './styles/style.css';
import './styles/colors-and-fonts.css';
import React from 'react';
import headshot from './images/ben.jpg';
import image_3 from './images/image_3.jpg';
import Image from 'next/image';
import grocery from './images/forager.png';
import LFCard from './components/LFCard';
import ProjectCard from './components/ProjectCard';
import ContactSystem from './components/ContactSystem';
import logo from './images/logo_1.png';
import gmail from './images/gmail.webp';
import Link from 'next/link';
import uva from './images/uva.png';
import lspace from './images/lspace.png';
import gmu from './images/gmu.webp';
import hiphopml from './images/hiphopml.png';
import bookie from './images/bookie.png';



export default function Home() {
    return (
        <>
            <div className="section small" style={{marginBottom: '55px'}}/>
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
                    <div style={{paddingTop: '5.25%', maxWidth: '70%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Image className='lfCard' src={gmail} alt='gmail logo'/>
                        <Link href='mailto:benlchang32@gmail.com'><u style={{fontSize: 'calc(4px + 2vw)'}}>benlchang@gmail.com</u></Link>
                    </div>
                    <LFCard />
                </div>
            </div>
            <div className='section small' style={{paddingTop: '0', paddingBottom: '5vh', fontWeight: '700', fontSize: 'calc(30px + 3vw)'}}>
                Experience
            </div>
            <div className='projects'>
                <ProjectCard
                    name='University of Virginia'
                    imgPath={uva}
                    desc='Benchmark brown dwarf astrometry and composition analysis with Jupyter Notebook'
                    stack='Undergraduate Researcher'
                    link='hd47127b'
                />
                <ProjectCard
                    name="NASA L'SPACE"
                    imgPath={lspace}
                    desc='Collaborative NASA project and proposal simulation experience'
                    stack="Project Developer Intern"
                    link='/'
                />
                <ProjectCard
                    name='George Mason University'
                    imgPath={gmu}
                    desc='Astronomical image reduction pipeline and telescope operation'
                    stack='Research Intern'
                    link='/'
                />
            </div>
            <div className='section small' style={{paddingTop: '0', paddingBottom: '5vh', fontWeight: '700', fontSize: 'calc(30px + 3vw)'}}>
                Projects
            </div>
            <div className='projects'>
                <ProjectCard
                    name='Hip Hop Dance Move Identifier'
                    imgPath={hiphopml}
                    desc='WORK IN PROGRESS: Trained model that detects and classifies Hip Hop dance moves from video'
                    stack='OpenCV, MediaPipe, Tensorflow / Keras'
                    link='/'
                />
                <ProjectCard
                    name='Grocery List Optimizer'
                    imgPath={grocery}
                    desc='Full-stack search engine for Charlottesville grocery shoppers that optimizes your grocery list'
                    stack='React, Express, PostgreSQL, Tensorflow'
                    link='grocery'
                />
                <ProjectCard
                    name='Book Recommendation Bot'
                    imgPath={bookie}
                    desc='Agentic AI workflow found a job as your own personal librarian!'
                    stack='LangGraph, OpenAI, Tavily'
                    link='/'
                />
                <ProjectCard
                    name='Personal Website'
                    imgPath={logo}
                    desc='Custom-designed portfolio to showcase my programming projects / experience. From scratch!'
                    stack='React (Typescript), Next.js, SASS'
                    link='portfolio'
                />
            </div>
            <div className='section small' style={{fontWeight: 700, padding: 0, fontSize: 'calc(8px + 3vw)'}}>
                ↓ Click a planet to learn more about me! ↓
            </div>
            <ContactSystem/>
        </>
    )
}