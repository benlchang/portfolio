import React from 'react';
import '../styles/style.css';
import Image from 'next/image';
import hband2023raw from '../images/hband2023raw.png';
import hband2023 from '../images/hband2023.png';
import hband2023bestfit from '../images/hband2023bestfit.png';
import hband2023mcmc from '../images/hbandmcmc.png';

export default function HD47127b() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div className='section small'>
                <div className='aboutLogo'>Astronomy Research</div>
            </div>
            <Image src={hband2023raw} alt='raw' style={{width: '25%', height: 'auto', marginTop: '80px', borderRadius: '20px'}}/>
            <p><i>Raw image of HD47127 in the H band -- a coronagraph is used to block most of the light from the star</i></p>
            <div className='section small' style={{width: '60vw', textIndent: '100px', textAlign: 'left', fontSize: '32px'}}>
                For many objects within astronomy, we don't have enough accurate data points to completely
                and definitively understand how they work. As a result, the best way we can understand and 
                predict certain characteristics about a body in space is by building and fine-tuning 
                models using the observational data we do have. For example, the Hertzsprung-Russel 
                diagram maps a star's life cycle by plotting mass and luminosity against one another and 
                defining a path along which the star ages. 
            </div>
            <div className='section small' style={{width: '60vw', textIndent: '100px', textAlign: 'left', fontSize: '32px'}}>
                Benchmark brown dwarf stars are smaller, cooler stars for which at least two significant 
                measurements are known (from the set of mass, luminosity, and age). To fine-tune the present
                model, I've been working with the University of Virginia Department of Astronomy to 
                measure certain characteristics with the ultimate goal of determining whether the known companion
                orbiting a star called HD47127 fits or deviates from our model.
            </div>
            <Image src={hband2023} alt='KLIPped' style={{width: '25%', height: 'auto', marginTop: '80px', borderRadius: '20px'}}/>
            <p><i>After KLIP processing and Angular Differential Imaging, the companion is visible!</i></p>
            <div className='section small' style={{width: '60vw', textIndent: '100px', textAlign: 'left', fontSize: '32px'}}>
                Using python in Jupyter Notebook, I was able to analyze nearly 600 total images across multiple different 
                wavelengths and three separate epochs taken by the Keck NIRC2 telescope on Mauna Kea in Hawaii. First, I performed angular
                differential imaging to eliminate enough starlight to see a faint signal from the star's companion. 
                Once that step was complete, I then forward-modeled each set of images and ran Markov-Chain Monte 
                Carlo simulations to determine the best-fitting astrometric radial coordinates of the companion. 
            </div>
            <Image src={hband2023bestfit} alt='best fit data' style={{width: '45%', height: 'auto', marginTop: '80px', borderRadius: '20px'}}/>
            <Image src={hband2023mcmc} alt='markov chain monte carlo' style={{width: '45%', height: 'auto', marginTop: '80px', borderRadius: '20px'}}/>
            <p><i>Top: best fit model for the companion's signal, using a 2D Gaussian</i></p>
            <p style={{marginTop: 0}}><i>Bottom: Markov chain monte carlo simulation to find astrometric results</i></p>
            <div className='section small' style={{width: '60vw', textIndent: '100px', textAlign: 'left', fontSize: '32px'}}>
                With astrometric data from three different points in time, I was able to run an orbit-fitting program from the 
                command line. By fitting the orbital path of this companion, the gravitational interaction between that and the host
                star leads directly to an estimate of the companion's mass. 
            </div>
        </div>
    )
}