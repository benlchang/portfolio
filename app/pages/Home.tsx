import '../styles/astro.scss';
import '../styles/style.scss';
import '../styles/colors-and-fonts.scss';
import headshot from '../images/headshot.jpg';
import image_3 from '../images/image_3.jpg'
import Image from 'next/image';
import projOne from '../images/kyrdle.png';
import Planet from '../components/Planet';
import MiniPlanet from '../components/MiniPlanet';
import ProjectCard from '../components/ProjectCard';



export default function Home() {
    return (
        <div className='home-content'>
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
                </div>
            </div>
            <div className='section large'>
                <ProjectCard
                name='kyrdle'
                imgPath={projOne}
                desc='Wordle clone using React'/>
                <ProjectCard
                name='Project Two'
                imgPath={image_3}
                desc='Second project'/>
                <ProjectCard
                name='Project Three'
                imgPath={image_3}
                desc='Third project'/>
            </div>
            <div className='spaceSection'>
                <a href='./pages/About' className='sun'></a>
                <Planet 
                    name= 'mercury'
                    route= 'https://github.com/benlchang'
                    img='../images/github.png'
                    axis={1.1}
                    size='50px'
                    orbit={1.4}
                    offSet={0}/>
                <Planet
                    name= 'venus'
                    route='https://www.linkedin.com/in/ben-chang-240b8024b/'
                    img='../images/linkedin.webp'
                    axis={1.6}
                    size='65px'
                    orbit={3.0}
                    offSet={26}/>
                <Planet
                    name='earth'
                    route='https://www.facebook.com/benjamin.chang.9083477'
                    img='../images/facebook.jpg'
                    axis={2.1}
                    size='66px'
                    orbit={4.5}
                    offSet={165}/>
                <Planet
                    name='mars'
                    route='https://www.instagram.com/benltchang'
                    img='../images/insta.png'
                    axis={2.6}
                    size='58px'
                    orbit={9.0}
                    offSet={265}/>
            </div>
        </div>
    )
}