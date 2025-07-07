import '../styles/astro.css';
import Planet from './Planet';
import React from 'react';


export default function ContactSystem() {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className='spaceSection'>
                <a href='./about' className='sun'></a>
                <Planet 
                    name= 'mercury'
                    route= 'https://github.com/benlchang'
                    img='./images/github.png'
                    axis={0.8}
                    size='calc(16px + 2.4vw)'
                    orbit={1.4}
                    offSet={70}/>
                <Planet
                    name= 'venus'
                    route='https://www.linkedin.com/in/ben-chang-240b8024b/'
                    img='./images/linkedin.webp'
                    axis={1.3}
                    size='calc(32px + 2vw)'
                    orbit={3.0}
                    offSet={96}/>
                <Planet
                    name='earth'
                    route='https://www.facebook.com/benjamin.chang.9083477'
                    img='./images/facebook.jpg'
                    axis={1.8}
                    size='calc(32px + 2vw)'
                    orbit={4.5}
                    offSet={5}/>
                <Planet
                    name='mars'
                    route='https://www.instagram.com/benltchang'
                    img='./images/insta.png'
                    axis={2.2}
                    size='calc(28px + 2vw)'
                    orbit={9.0}
                    offSet={195}/>
            </div>
        </div>
    )
}