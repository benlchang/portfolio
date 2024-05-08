'use client';

import React, {useEffect} from 'react';
import {useMotionValue, useTransform, animate, motion} from 'framer-motion';

interface miniProps {
    size: number,
    color: string,
    height: number,
    orbit: number
}

const MiniPlanet: React.FC<miniProps> = ({size, color, height, orbit}) => {
    const angle = useMotionValue(0);
    const a = orbit * ((10 * window.innerHeight + 7 * window.innerWidth) / 17000), b = 60;

    useEffect(() => {
        animate(angle, Math.PI * 2, {
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
        })
    })

    const x = useTransform(angle, (ang: number) => a * Math.cos(ang));
    const y = useTransform(angle, (ang: number) => b * Math.sin(ang));
    const zIndex = useTransform(angle, (ang: number) => Math.ceil(Math.sin(ang)) * 2 + 1)
    
    const endHeight = height * window.innerHeight;
    return (
    <div className='mini-planet-container' style={{
        top: endHeight
    }}>
        <motion.div  className='mini-planet'
            style={{
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: color,
            x: x,
            y: y,
            zIndex: zIndex
            }}
            transition={{
            ease: 'linear',
            repeat: Infinity,//repeat-type: reverse,
            duration: 7
            }}
        />
    </div>)
}

export default MiniPlanet;