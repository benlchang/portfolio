import React from 'react';
import '../styles/astro.css';
//import image from `../images/${img}` ???

interface planetProps {
    name: string;
    route: string;
    img: string;
    axis: number;
    size: string;
    orbit: number;
    offSet: number;
}

const Planet: React.FC<planetProps> = ( {name, route, img, axis, size, orbit, offSet=0} ) => {
    return (
        <a href={route} target='_blank' className={`planet ${name}`} style={{
            '--orbit-size' : axis,
            '--planet-size' : size,
            '--orbital-speed' : orbit,
            '--orbital-offSet-i' : `-${offSet}deg`,
            '--orbital-offSet-f' : `${360 - offSet}deg`
        } as React.CSSProperties}>
        </a>
    )
}

export default Planet;