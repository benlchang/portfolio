import MiniPlanet from '../components/MiniPlanet';
import '../styles/style.css';
import Experience from '../components/Experience';
import astrImg1 from '../images/hband.png';
import astrImg2 from '../images/fm.png';
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
                desc="Angular Differential Imaging (ADI) is an astronomical image processing technique
                that manipulates the rotation of the telescope to isolate a planetary signal from that
                of its much brighter parent star. Forward modeling (FM) is another technique that estimates
                the planet or orbiting body's astrometry by essentially
                injecting guesses about its orbital radius and brightness and revising until the guess
                matches the observed signal.
                Starting in December of 2023, I worked part-time during the academic year and full-time in the Summer of 2024
                with Dr. Yifan 
                Zhou to develop a python script in Jupyter Notebook capable of performing ADI and FM on data
                retrieved from the Keck NIRC2 telescope. The analysis suggests the presence of a brown dwarf orbiting HD47127
                in the Gemini constellation. Below, in order, are the processed H-band, forward modeling, and J-band
                images. You can read more about this in our paper [TO BE PUBLISHED]!"
                img1 = {astrImg1}
                img2= {astrImg2}
                img3= {astrImg3}
            />
        </>
    )
}