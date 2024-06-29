import React from 'react';
import '../styles/style.css';
import Image from 'next/image';
import image_3 from '../images/image_3.jpg'
import sym from '../images/2ym.jpg';
import sitting from '../images/headshot.jpg';
import akatongue from '../images/akatongue.jpg';
import snrproj from '../images/snrproj.png';
import MiniPlanet from '../components/MiniPlanet';

export default function About() {
    return (
        <>
            <div className='section small'>
                <div className='aboutLogo'>About Me!</div>
                <MiniPlanet size={40} color='#b8def0' height={0.23} orbit={.18} posX={.5} startAng = {30} orbitSpeed = {1.2}/>
            </div>
            <div className='section'>
                <div className='blurb first'>
                    <Image src={sitting} className='aboutImg' alt='ben again'/>
                    <p className='right'><b>It's nice to meet you!</b> My name's Ben, 
                        I'm a third-year at the University of Virginia. I'm 
                        working on completing my BA in Computer Science focusing on 
                        full-stack software development. 
                    </p>
                </div>
                <div className='blurb'>
                    <p className= 'left'>I spend a lot of my free time practicing with my dance crew! 
                        AKAdeMiX <b>designs, choreographs,
                        and performs</b> open-style dance sets for competitions and showcases 
                        at colleges <b>all around the DM/V area</b>. I served as captain this past
                        year, and will keep my dedication to the team as social chair next year.
                    </p>
                    <div style={{marginLeft: '44px', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                        <Image className= 'aboutImg'src={akatongue} alt='ben dancing'/>
                        <article style={{textAlign: 'center', marginTop: '12px', fontSize: '16px'}}>Center stage at our performance at Momentum Showcase at Virginia Tech!</article>
                    </div>
                </div>
                <div className='blurb'>
                    <Image className= 'aboutImg two'src={sym} alt='ben at barrio culture showcase'/>
                    <p>Dancing has helped me connect with so many organizations in the UVa
                        community, particularly through culture shows
                        from the <b>Organization of Young Filipino
                        Americans</b> and the <b>Chinese Student Association</b>. Choreographing 
                        for OYFA (on the left!) this past Spring was so exciting and 
                        rewarding!
                    </p>
                </div>
                <div className='blurb'>
                    <p>Besides software engineering, I love studying astronomy! I've been fascinated by constellations
                        and astronomical anomalies like black holes and dark matter since I 
                        was a kid, which is why much of my prior experience relates to 
                        astronomy research.
                    </p>
                    <div style={{marginLeft: '44px', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                        <Image className= 'aboutImg two'src={snrproj} alt='ben stargazing'/>
                        <article style={{fontSize: '16px', textAlign: 'center', marginTop: '12px'}}>Me presenting the project I 
                        worked on for my senior year of high school -- we tried to estimate the 
                        chances a given planet could support life!</article>
                    </div>
                </div>
            </div>
        </>
    )
}