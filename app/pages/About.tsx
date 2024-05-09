import '../styles/style.css';
import Image from 'next/image';
import image_3 from '../images/image_3.jpg';
import akatongue from '../images/akatongue.jpg';
import MiniPlanet from '../components/MiniPlanet';

export default function About() {
    return (
        <>
            <div className='section small'>
                <div className='aboutLogo'>About Me!</div>
            </div>
            <MiniPlanet size={40} color='#b8def0' height={0.3} orbit={300}/>
            <div className='section'>
                <div className='blurb first'>
                    <Image src={image_3} className='aboutImg' alt='ben again'/>
                    <p className='right'><b>It's nice to meet you!</b> My name's Ben, 
                        I'm a rising third-year student at the University of Virginia. I'm 
                        working on completing my BA in Computer Science with a focus in 
                        frontend development and UI/UX design. 
                    </p>
                </div>
                <div className='blurb'>
                    <p className= 'left'>When I'm not in class or working on side projects,
                        I'm probably at the gym with my dance crew! AKAdeMiX choreographs
                        and performs open-style dance sets for competitions and showcases 
                        at colleges all around the DM/V area. I served as captain this past
                        year, and will organize social events and foster a motivated and 
                        excited team dynamic and environment as social chair next year!
                    </p>
                    <Image className= 'aboutImg'src={akatongue} alt='ben dancing'/>
                </div>
                <div className='blurb'>
                    <Image className= 'aboutImg'src={image_3} alt='ben at barrio culture showcase'/>
                    <p>blurb about community involvement via culture orgs</p>
                </div>
                <div className='blurb'>
                    <p>After dark, I love stargazing! I've been fascinated by constellations
                        and astronomical anomalies like black holes and dark matter since I 
                        was a kid, which is why much of my prior experience relates to 
                        astronomy research. Here's me with the telescope I got for Christmas 
                        back in 2019!
                    </p>
                    <Image className= 'aboutImg'src={image_3} alt='ben stargazing'/>
                </div>
            </div>
        </>
    )
}