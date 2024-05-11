import '../styles/astro.css';
import Planet from './Planet';


export default function ContactSystem() {
    return (
        <div className='spaceSection'>
            <a href='./pages/About' className='sun'></a>
            <Planet 
                name= 'mercury'
                route= 'https://github.com/benlchang'
                img='./images/github.png'
                axis={1.1}
                size='37px'
                orbit={1.4}
                offSet={0}/>
            <Planet
                name= 'venus'
                route='https://www.linkedin.com/in/ben-chang-240b8024b/'
                img='./images/linkedin.webp'
                axis={1.6}
                size='50px'
                orbit={3.0}
                offSet={26}/>
            <Planet
                name='earth'
                route='https://www.facebook.com/benjamin.chang.9083477'
                img='./images/facebook.jpg'
                axis={2.1}
                size='50px'
                orbit={4.5}
                offSet={165}/>
            <Planet
                name='mars'
                route='https://www.instagram.com/benltchang'
                img='./images/insta.png'
                axis={2.6}
                size='46px'
                orbit={9.0}
                offSet={265}/>
        </div>)
}