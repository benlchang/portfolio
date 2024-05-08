import '../styles/astro.css';
import React from 'react';

interface asteroidProps {
    name: string;
    size: string;
    num: string;
    angle: number;
    route: string;
}

const Asteroid: React.FC<asteroidProps> = ( {name, size, num, angle, route} ) => {
    if(route !== 'n/a'){
        let curHref = route;
        return (
            <a href={curHref} className={`asteroid ${size} ${num}`} style={{
                '--angle' : angle} as React.CSSProperties}>
                <p className='asteroid-content'>{name}</p>
            </a>
        )
    }
    return (
        <div className={`asteroid ${size} ${num}`} style={{
            '--angle' : angle} as React.CSSProperties}>
            <p className='asteroid-content'>{name}</p>
        </div>
    )
}

export default Asteroid;