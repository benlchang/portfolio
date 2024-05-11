import MiniPlanet from '../components/MiniPlanet';
import '../styles/style.css';
import Experience from '../components/Experience';
import astrImg1 from '../images/hband.png';
import astrImg2 from '../images/jupyter.png';
import astrImg3 from '../images/jband.png';

export default function Exp() {
    return (
        <>
            <div className='section small'>
                <div className='aboutLogo'>Experience</div>
                <MiniPlanet size={70} color="#756565" height={0.25} orbit={400} />
            </div>
            <Experience 
                title= 'University of Virginia: Exoplanet Research via Angular Differential Imaging'
                desc='Angular Differential Imaging (ADI) is an astronomical image processing technique
                that manipulates the rotation of the telescope to isolate a planetary signal from that
                of its much brighter parent star. Forward modeling is another technique that estimates
                the planet or orbiting bodys astrometry by essentially
                injecting guesses about its orbital radius and brightness and revising until the guess
                matches the observed signal.
                Starting in December of 2023, I worked part-time during the academic year with Dr. Yifan 
                Zhou using python in Jupyter Notebook to perform 
                ADI and forward modeling on image data
                the Keck NIRC2 telescope. The data supports the presence of a brown dwarf orbiting HD47127
                in the Gemini constellation.'
                img1 = {astrImg1}
                img2= {astrImg2}
                img3= {astrImg3}
            />
        </>
    )
}