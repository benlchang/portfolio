'use client';

import Link from 'next/link';
import '../styles/style.css';

export function Header() {
    //<Link className='link' to='../pages/Contact'>Contact</Link>
    return (
        <nav className='header'>
            <div className='header-links'>
                <Link className='link' href='./'>Home</Link>
                <Link className='link' href='./about'>About</Link>
                <Link className='link' href='./experience'>Extra</Link>
            </div>
        </nav>
    )
}