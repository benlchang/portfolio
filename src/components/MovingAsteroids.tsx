import Asteroid from './Asteroid';
import '../styles/astro.css';
import React from 'react';

interface movingProps {
    moving: boolean;
}

//need to design this moving asteroid belt first
const MovingAsteroids : React.FC<movingProps> = ({moving}) => {
    return (
        <div className='movers'>
            
        </div>
    )
}

export default MovingAsteroids;