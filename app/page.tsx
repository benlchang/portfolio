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
import Timeline from './components/Timeline';
import logo from './images/logo_1.png';
import gmail from './images/gmail.webp';
import Link from 'next/link';
import uva from './images/uva.png';
import lspace from './images/lspace.png';
import gmu from './images/gmu.webp';
import hiphopml from './images/hiphopml.png';
import bookie from './images/bookie.png';
import exchange from './images/exchange.png';
import cs3240 from './images/cs3240.png';



export default function Home() {
    return (
        <>
            <div className="section small" style={{height: '12vh', marginBottom: '30px'}}/>
            <div className='section large'>
                <div className='sideThing'>
                    <Image src={headshot}
                    className='imgContainer'
                    alt='picture of ben'/>
                </div>
                <div className='textplusframeworks'>
                    <div className='elevator'>
                        <span style={{color: '#9985ff', fontWeight: 'bold', fontSize: 'calc(3.0vw)'}}>Ben</span> is a student and undergraduate researcher at the University of Virginia. He's
                        interested in software engineering, machine learning, image analysis, and astronomy.
                    </div>
                    <div style={{animation: 'fadeIn 1.5s ease forwards', animationDelay: '1s', opacity: '0', paddingTop: '5.25%', maxWidth: '70%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Image className='lfCard' src={gmail} alt='gmail logo'/>
                        <Link href='mailto:benlchang32@gmail.com'><u style={{fontSize: 'calc(4px + 2vw)'}}>benlchang@gmail.com</u></Link>
                    </div>
                    <LFCard />
                </div>
            </div>
            <div className='section small' style={{height: '0vh', paddingTop: '0', paddingBottom: '0', fontWeight: '700', fontSize: 'calc(30px + 3vw)'}}>
                Experience
            </div>
            <Timeline />
            {/* <div className='projects'>
                <ProjectCard
                    name='Exchange IT Solutions'
                    imgPath={exchange}
                    desc=''
                    stack='Backend Software Developer Intern . . . . Aug 2024 - Pres'
                    link='/'
                    github='/'
                />
                <ProjectCard
                    name='University of Virginia'
                    imgPath={uva}
                    desc='Benchmark brown dwarf astrometry and composition analysis with Jupyter Notebook'
                    stack="Undergraduate Researcher . . . . . . . . . . .  . Dec 2023 - Pres"
                    link='./hd47127b'
                    github='/'
                />
                <ProjectCard
                    name="NASA L'SPACE"
                    imgPath={lspace}
                    desc='Collaborative NASA project and proposal simulation experience'
                    stack="Project Developer Intern . . . . . . . . . . Sep 2022 - Apr 2023"
                    link='/'
                    github='/'
                />
                <ProjectCard
                    name='George Mason University'
                    imgPath={gmu}
                    desc='Astronomical image reduction pipeline and telescope operation'
                    stack='Research Intern . . . . . . . . . . . . . . . . . May 2021 - Jul 2021'
                    link='/'
                    github='/'
                />
            </div> */}
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
                    github='https://github.com/benlchang/hiphopml'
                />
                <ProjectCard
                    name='Cataloging/Lending App'
                    imgPath={cs3240}
                    desc='Class project allows users to borrow and organize vinyl albums'
                    stack='Django, Amazon S3, GitHub CI, Heroku'
                    link='/'
                    github='/'
                />
                <ProjectCard
                    name='Grocery List Optimizer'
                    imgPath={grocery}
                    desc='Full-stack search engine for Charlottesville grocery shoppers that optimizes your grocery list'
                    stack='React, Express, PostgreSQL, Tensorflow'
                    link='./grocery'
                    github='https://github.com/benlchang/grocery_cville'
                />
                <ProjectCard
                    name='Book Recommendation AI'
                    imgPath={bookie}
                    desc='Agentic AI workflow curates book recommendations and summaries based on your favorites'
                    stack='LangGraph, OpenAI, Tavily'
                    link='/'
                    github='https://github.com/benlchang/bookie'
                />
                <ProjectCard
                    name='Personal Website'
                    imgPath={logo}
                    desc='Custom-designed portfolio to showcase my programming projects / experience. From scratch!'
                    stack='React (Typescript), Next.js, SASS'
                    link='./portfolio'
                    github='https://github.com/benlchang/portfolio'
                />
            </div>
            <div className='section small' style={{fontWeight: 700, padding: 0, fontSize: 'calc(8px + 3vw)'}}>
                ↓ Click a planet to learn more about me! ↓
            </div>
            <ContactSystem/>
        </>
    )
}