'use client';

import {Link} from 'react-router-dom';
import '../styles/style.css';

export function Header() {
    //<Link className='link' to='../pages/Contact'>Contact</Link>
    return (
        <nav className='header'>
            <div className='header-links'>
                <Link className='link' to='../'>Home</Link>
                <Link className='link' to='../pages/About'>About</Link>
                <Link className='link' to='../pages/Exp'>Extra</Link>
            </div>
        </nav>
    )
}