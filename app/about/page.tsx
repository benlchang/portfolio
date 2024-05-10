import '../styles/style.css';
import Image from 'next/image';
import image_3 from '../images/image_3.jpg';
import sym from '../images/2ym.jpg';
import sitting from '../images/headshot.jpg';
import akatongue from '../images/akatongue.jpg';
import MiniPlanet from '../components/MiniPlanet';
import ContactSystem from '../components/ContactSystem';

export default function About() {
    return (
        <>
            <div className='section small'>
                <div className='aboutLogo'>About Me!</div>
                <MiniPlanet size={40} color='#b8def0' height={0.29} orbit={300} />
            </div>
            <div className='section'>
                <div className='blurb first'>
                    <Image src={sitting} className='aboutImg' alt='ben again'/>
                    <p className='right'><b>It's nice to meet you!</b> My name's Ben, 
                        I'm a third-year at the University of Virginia. I'm 
                        working on completing my BA in Computer Science focusing on 
                        frontend development and UI/UX design. 
                    </p>
                </div>
                <div className='blurb'>
                    <p className= 'left'>I spend a lot of my free time practicing with my dance crew! 
                        AKAdeMiX <b>designs, choreographs,
                        and performs</b> open-style dance sets for competitions and showcases 
                        at colleges <b>all around the DM/V area</b>. I served as captain this past
                        year, and will keep my dedication to the team as social chair next year. Here's
                        me at our most recent performance at Virginia Tech!
                    </p>
                    <Image className= 'aboutImg'src={akatongue} alt='ben dancing'/>
                </div>
                <div className='blurb'>
                    <Image className= 'aboutImg'src={sym} alt='ben at barrio culture showcase'/>
                    <p>Dancing has helped me connect with so many organizations in the UVa
                        community, particularly through culture shows
                        from the <b>Organization of Young Filipino
                        Americans</b> and the <b>Chinese Student Association</b>. Choreographing 
                        for OYFA (on the left!) this past Spring was so exciting and 
                        rewarding!
                    </p>
                </div>
                <div className='blurb'>
                    <p>After dark, I love stargazing! I've been fascinated by constellations
                        and astronomical anomalies like black holes and dark matter since I 
                        was a kid, which is why much of my prior experience relates to 
                        astronomy research. 
                    </p>
                    <Image className= 'aboutImg'src={image_3} alt='ben stargazing'/>
                </div>
            </div>
            <div className='section small' style={{fontSize: 60}}>
                Wanna get in touch?
            </div>
            <ContactSystem />
        </>
    )
}