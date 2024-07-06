'use client';

import Link from 'next/link';
import '../styles/style.css';
import React from 'react';
import MiniPlanet from './MiniPlanet';

export function Header() {
    //<Link className='link' to='../pages/Contact'>Contact</Link>
    return (
        <nav className='header'>
            <div className='header-logo'>
                <div className='header-name' style={{width: '25vw'}}>
                    Ben Chang
                    <MiniPlanet size={20} color='#9987ff' height={0.1} orbit={.11} posX={0.165} startAng = {0} orbitSpeed = {1}/>
                </div>
            </div>
            <div className='header-links'>
                <Link className='link' href='./'>Home</Link>
                <Link className='link' href='./about'>About</Link>
                {/* <Link className='link' href='./experience'>Extra</Link> */}
            </div>
        </nav>
    )
}