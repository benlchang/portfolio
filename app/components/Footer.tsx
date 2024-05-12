import '../styles/colors-and-fonts.scss';
import React from 'react';

export default function Footer() {
    return (
        <div className='footer' style={{
            background: 'transparent',
            display: 'flex',
            width: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '30px 0',
            color: '$primary'
        }}>
            © Copyright Benjamin Chang 2024
        </div>
    )
}