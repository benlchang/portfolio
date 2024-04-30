import '../styles/astro.scss';
import Planet from '../components/Planet';
import ProjectCard from '../components/ProjectCard';
import Asteroid from '../components/Asteroid';

export default function Home() {
    return (
        <div className='home-content'>
            <div className='section'>
                <div className='name-logo'>Ben Chang</div>
            </div>
            <div className='section'>
                <ProjectCard
                name='kyrdle'
                imgPath='./'
                desc='Wordle clone using React'/>
                <ProjectCard
                name='Project Two'
                imgPath='./'
                desc='Second project'/>
                <ProjectCard
                name='Project Three'
                imgPath='./'
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