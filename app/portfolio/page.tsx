import React from 'react';
import '../styles/style.css';
import Image from 'next/image';
import figma from '../images/figma_2.png'

export default function Portfolio() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div className='section small'>
                <div className='aboutLogo'>Personal Website</div>
            </div>
            <div className='section small' style={{width: '60vw', textIndent: '100px', textAlign: 'left', fontSize: '32px'}}>

            </div>
            <Image style={{border: 'solid 2px black'}} src={figma} alt='Preliminary design for the website'/>
            <p style={{textAlign: 'center', width: '100%'}}><i>Preliminary Figma designs for the landing page. Elements from both early versions made it into my finished product!</i></p>
            <div className='section small' style={{width: '60vw', textIndent: '100px', textAlign: 'left', fontSize: '32px'}}>
            </div>
        </div>
    )
}