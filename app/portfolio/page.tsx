import React from 'react';
import '../styles/style.css';
import Image from 'next/image';
import figma from '../images/figma_2.png'

export default function Portfolio() {
    return (
        <div className='page-div'>
            <div className='aboutLogo margined'>Personal Website</div>
            <div className='section small desc'>
                <h1>The Inspiration</h1>
                As a software engineer, it's as important to know how to present your products as it is to actually build them. 
                With this in mind, I wanted to make an interface through which people could view my information, projects, and personality, 
                while learning how to use state-of-the-art web development tools at the same time.
            </div>
            <Image style={{marginTop: '80px', borderRadius: '20px', border: 'solid 2px black'}} src={figma} alt='Preliminary design for the website'/>
            <p style={{textAlign: 'center', width: '100%'}}><i>Preliminary Figma designs for the landing page. Elements from both early versions made it into my finished product!</i></p>
            <div className='section small desc'>
                <h1>The Architecture</h1>
                I built this portfolio using React with TypeScript, implemented some server-side optimization features with Next.js, 
                and deployed it using Vercel. React made it easy for me to reuse a bunch of my visual components and manage the state 
                of some animated planets. Next.js implements lazy image loading automatically, which speeds up my site a bit. That service 
                also makes deploying my site with Vercel much easier. Feel free to explore this site!
            </div>
        </div>
    )
}