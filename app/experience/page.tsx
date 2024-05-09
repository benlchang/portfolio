import MiniPlanet from '../components/MiniPlanet';
import '../styles/style.css';

export default function Exp() {
    return (
        <>
            <div className='section small'>
                <div className='aboutLogo'>Experience</div>
            </div>
            <MiniPlanet size={80} color="#423232" height= {0.25} orbit={400} />
            <div className='section'>
                <div className='blurb'>
                    Most of my previous experience involves astronomy! I've
                    wanted to figure out the universe since I was a kid, and
                    I continue to be amazed by the power of new technology
                    like the JWST that's making big strides towards doing 
                    just that!
                </div>
            </div>
        </>
    )
}