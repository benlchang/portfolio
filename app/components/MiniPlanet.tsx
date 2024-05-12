'use client';

import React, {useEffect, useState} from 'react';
import {useMotionValue, useTransform, animate, motion} from 'framer-motion';

interface miniProps {
    size: number,
    color: string,
    height: number,
    orbit: number,
    posX: number,
    startAng: number,
    orbitSpeed: number
}

const MiniPlanet: React.FC<miniProps> = ({size, color, height, orbit, posX=.5, startAng = 0, orbitSpeed = 1}) => {
    const a = orbit;
    const [b, setB] = useState(0)
    const [endHeight, setEH] = useState(0)
    const [left, setLeft] = useState(0)

    const angle = useMotionValue(0);
    const zIndex = useMotionValue(-1);

    useEffect(() => {
        setB(window.innerHeight * height / 4)
        setEH(window.innerHeight * height)
        setLeft(window.innerWidth * posX)
        animate(angle, Math.PI * 2, {
            duration: 4 * orbitSpeed,
            repeat: Infinity,
            ease: 'linear',
            onUpdate: latest => zIndex.set(Math.round(Math.sin(latest + startAng)))
        })
    })

    const x = useTransform(angle, (ang: number) => a * Math.cos(ang + startAng));
    const y = useTransform(angle, (ang: number) => b * Math.sin(ang + startAng));
    return (
    <motion.div className='mini-planet-container' style={{
        top: endHeight,
        left: left,
        width: size,
        zIndex: zIndex,
        position: 'absolute' //seems like, on runtime, this position was set to 'static' 
                            //which treats it like a normal div and slots it directly adjacent
                            //to the logo. be careful about setting properties in css vs here
    }}>
        <motion.div  className='mini-planet'
            style={{
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: color,
            x: x,
            y: y,
            }}
        />
    </motion.div>)
}

export default MiniPlanet;