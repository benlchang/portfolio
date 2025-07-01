"use client"

import './styles/astro.css';
import './styles/style.css';
import './styles/colors-and-fonts.css';
import React from 'react';
import headshot from './images/ben.jpg';
import Image, {StaticImageData} from 'next/image';
import LFCard from './components/LFCard';
import ProjectCard from './components/ProjectCard';
import ContactSystem from './components/ContactSystem';
import Timeline from './components/Timeline';
import gmail from './images/gmail.webp';
import Link from 'next/link';

import python from './images/python.jpg';
import js from './images/js.jpg';
import ts from './images/ts.png';
import html from './images/html.jpg';
import css from './images/css.jpg';
import java from './images/java.png';
import sql from './images/sql.png';
import react from './images/react.png';
import next from './images/next.png';
import bash from './images/bash.png';
import sass from './images/sass.png';
import tf from './images/tf.png';
import pgsql from './images/pgsql_noname.png';
import git from './images/git.png';
import node from './images/node.webp';
import opencv from './images/opencv.png';
import django from './images/django.png';
import deeplearningai from './images/deeplearningai.png';
import heroku from './images/heroku.png';
import aws from './images/aws.png';
import github from './images/github.svg';
import jupyter from './images/jupyter.png';
import {lfProps, lfPropsList} from './components/LFCard'

let awsLF: lfProps = {name: 'AWS', imgPath: aws}
let djangoLF: lfProps = {name: 'Django', imgPath: django}
let dlaiLF: lfProps = {name: 'DeepLearningAI', imgPath: deeplearningai}
let gitLF: lfProps = {name: 'Git', imgPath: git}
let githubLF: lfProps = {name: 'Github', imgPath: github}
let herokuLF: lfProps = {name: 'Heroku', imgPath: heroku}
let jupyterLF: lfProps = {name: 'Jupyter', imgPath: jupyter}
let nextLF: lfProps = {name: 'Next', imgPath: next}
let nodeLF: lfProps = {name: 'Node.js', imgPath: node}
let opencvLF: lfProps = {name: 'OpenCV', imgPath: opencv}
let pgsqlLF: lfProps = {name: 'PostgreSQL', imgPath: pgsql}
let reactLF: lfProps = {name: 'React', imgPath: react}
let tfLF: lfProps = {name: 'TensorFlow', imgPath: tf}

const langsandframeworks: lfPropsList = {
    items:  [
        {name: 'Python', imgPath: python}, 
        {name: 'Javascript', imgPath: js},
        {name: 'Typescript', imgPath: ts},
        {name: 'HTML', imgPath: html},
        {name: 'CSS', imgPath: css},
        {name: 'Java', imgPath: java},
        // {name: 'SQL', imgPath: sql},
        // {name: 'bash', imgPath: bash},
        awsLF,
        djangoLF,
        dlaiLF,
        gitLF,
        githubLF,
        nextLF,
        nodeLF,
        opencvLF,
        reactLF,
        tfLF,
        {name: 'Sass', imgPath: sass}
    ]
}

export default function Home() {
    return (
        <>
            <div className='section large'>
                <div className='sideThing'>
                    <Image src={headshot}
                    className='imgContainer'
                    alt='picture of ben'/>
                </div>
                <div className='textplusframeworks'>
                    <div className='elevator'>
                        <span style={{color: '#9985ff', fontWeight: 'bold', fontSize: 'calc(18px + 2vw)'}}>Ben</span> is a student and undergraduate researcher at the University of Virginia. He's
                        interested in software engineering, machine learning, image analysis, and astronomy.
                    </div>
                    <div style={{animation: 'fadeIn 1.5s ease forwards', animationDelay: '1s', opacity: '0', paddingTop: '5.25%', maxWidth: '70%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Image className='lfCard' src={gmail} alt='gmail logo'/>
                        <Link href='mailto:benlchang32@gmail.com'><u style={{fontSize: 'calc(4px + 2vw)'}}>benlchang@gmail.com</u></Link>
                    </div>
                    <LFCard 
                        {...langsandframeworks}
                    />
                </div>
            </div>
            <ContactSystem/>
            <div className='section small' style={{height: '0vh', paddingTop: '0', paddingBottom: '0', fontWeight: '700', fontSize: 'calc(30px + 3vw)'}}>
                Experience
            </div>
            <Timeline />
            <div className='section small' style={{paddingTop: '0', paddingBottom: '5vh', fontWeight: '700', fontSize: 'calc(30px + 3vw)'}}>
                Projects
            </div>
            <div className='projects'>
                <ProjectCard
                    id='hiphop'
                    name='Hip Hop Dance Move Identifier'
                    imgPath='hiphopml.png'
                    desc='WORK IN PROGRESS: Trained model that detects and classifies Hip Hop dance moves from video'
                    stack={[tfLF, opencvLF, jupyterLF]}
                    link='/'
                    github='https://github.com/benlchang/hiphopml'
                />
                <ProjectCard
                    id='cla'
                    name='Cataloguing/Lending App'
                    imgPath='c3240.png'
                    desc='Class project allows users to borrow and organize vinyl albums'
                    stack={[djangoLF, pgsqlLF, awsLF, githubLF, herokuLF]}
                    link='/'
                    github='/'
                />
                <ProjectCard
                    id='grocery'
                    name='Grocery List Optimizer'
                    imgPath='grocery.png'
                    desc='Full-stack search engine for Charlottesville grocery shoppers that optimizes your grocery list'
                    stack={[reactLF, nodeLF, pgsqlLF, tfLF]}
                    link='./grocery'
                    github='https://github.com/benlchang/grocery_cville'
                />
                <ProjectCard
                    id='bookie'
                    name='Book Recommendation AI'
                    imgPath='bookie.png'
                    desc='Agentic AI workflow curates book recommendations and summaries based on your favorites'
                    stack={[dlaiLF]}
                    link='/'
                    github='https://github.com/benlchang/bookie'
                />
                <ProjectCard
                    id='site'
                    name='Personal Website'
                    imgPath='logo.png'
                    desc='Custom-designed portfolio to showcase my programming projects / experience. From scratch!'
                    stack={[reactLF, nextLF]}
                    link='./portfolio'
                    github='https://github.com/benlchang/portfolio'
                />
            </div>
            {/* <div className='section small' style={{fontWeight: 700, padding: 0, fontSize: 'calc(8px + 3vw)'}}>
                ↓ Click a planet to learn more about me! ↓
            </div> */}
        </>
    )
}