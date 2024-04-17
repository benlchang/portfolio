import React from 'react';
import Switch, {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export function Header() {
    return (
        <nav className='header'>
            <div className='logo'>
                <h1>Benjamin Chang</h1>
            </div>
            <ul className='header-links'>
                <li><Link to='./pages/Home'>Home</Link></li>
                <li><Link to='./pages/About'>About</Link></li>
                <li><Link to='./pages/Contact'>Contact</Link></li>
                <li><Link to='./pages/Exp'>Other Experience</Link></li>
            </ul>
        </nav>
    )
}