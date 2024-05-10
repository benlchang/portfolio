import './styles/astro.scss';
import './styles/style.scss';
import './styles/colors-and-fonts.scss';
import headshot from './images/headshot.jpg';
import image_3 from './images/image_3.jpg';
import jband from './images/jband.png';
import Image from 'next/image';
import projOne from './images/kyrdle.png';
import Planet from './components/Planet';
import MiniPlanet from './components/MiniPlanet';
import LFCard from './components/LFCard';
import ProjectCard from './components/ProjectCard';
import ContactSystem from './components/ContactSystem';



export default function Home() {
    return (
        <>
            <div className='section large'>
                <div className='name-logo'>Ben Chang</div>
                <MiniPlanet size={50} color='#9987ff' height={0.5} orbit={500}/>
            </div>
            
            <div className='section large'>
                <div className='sideThing'>
                    <Image src={headshot}
                    className='imgContainer'
                    alt='picture of ben'/>
                </div>
                <div className='textplusframeworks'>
                    <div className='elevator'>
                        Ben is a student and undergraduate researcher at the University of Virginia. He's
                        interested in UI/UX development, software engineering, and astronomy.
                    </div>
                    <LFCard />
                </div>
            </div>
            <div className='section large'>
                <ProjectCard
                name='kyrdle'
                imgPath={projOne}
                desc='Wordle clone using React'/>
                <ProjectCard
                name='Exoplanet Research'
                imgPath={jband}
                desc='Stellar differential imaging and forward modeling with Jupyter and pyklip'/>
                <ProjectCard
                name='Project Three'
                imgPath={image_3}
                desc='Third project'/>
            </div>
            <div className='section small' style={{fontSize: 60}}>
                Wanna get in touch?
            </div>
            <ContactSystem/>
        </>
    )
}