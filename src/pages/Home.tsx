import '../styles/astro.scss';
import Planet from '../components/Planet';
import ProjectCard from '../components/ProjectCard';
import React from 'react';
import {useState, useEffect} from 'react';
import {motion, animate, useMotionValue, useAnimation, useTransform, easeInOut} from 'framer-motion';
import { reverse } from 'dns';



export default function Home() {
    const angle = useMotionValue(0);
    const inputRange = [0, 2 * Math.PI]
    const a = 600, b = 80;

    useEffect(() => {
        animate(angle, Math.PI * 2, {
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
        })
    })

    const zIndex = angle.get() >= 0 && angle.get() < Math.PI ? 3 : 1;

    const x = useTransform(angle, (ang) => a * Math.cos(angle.get()));
    const y = useTransform(angle, (ang) => b * Math.sin(angle.get()));

    /*              <motion.div className='mini-planet'
                    style={{
                        transform: `translate(${x}, ${y})` ,
                        zIndex: zindex 
                    } as React.CSSProperties}>
                    </motion.div>*/
    return (
        <div className='home-content'>
            <div className='section'>
                <div className='name-logo'>Ben Chang</div>
                <motion.div className='mini-planet-container'>
                    <motion.div  className='mini-planet'
                       style={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: '#7765e3',
                        x: x,
                        y: y,
                        zIndex: zIndex
                       }}
                       transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 7
                       }}
                    />
                </motion.div>
            </div>
            <div className='section'>
                <ProjectCard
                name='kyrdle'
                imgPath='./'
                desc='Wordle clone using React'/>
                <ProjectCard
                name='Project Two'
                imgPath='./'
                desc='Second project'/>
                <ProjectCard
                name='Project Three'
                imgPath='./'
                desc='Third project'/>
            </div>
            <div className='spaceSection'>
                <a href='./pages/About' className='sun'></a>
                <Planet 
                    name= 'mercury'
                    route= 'https://github.com/benlchang'
                    img='../images/github.png'
                    axis={1.1}
                    size='50px'
                    orbit={1.4}
                    offSet={0}/>
                <Planet
                    name= 'venus'
                    route='https://www.linkedin.com/in/ben-chang-240b8024b/'
                    img='../images/linkedin.webp'
                    axis={1.6}
                    size='65px'
                    orbit={3.0}
                    offSet={26}/>
                <Planet
                    name='earth'
                    route='https://www.facebook.com/benjamin.chang.9083477'
                    img='../images/facebook.jpg'
                    axis={2.1}
                    size='66px'
                    orbit={4.5}
                    offSet={165}/>
                <Planet
                    name='mars'
                    route='https://www.instagram.com/benltchang'
                    img='../images/insta.png'
                    axis={2.6}
                    size='58px'
                    orbit={9.0}
                    offSet={265}/>
            </div>
        </div>
    )
}