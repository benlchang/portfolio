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
    const [a, setA] = useState(0);
    const [b, setB] = useState(0)

    const angle = useMotionValue(0);
    const zIndex = useMotionValue(-1);

    let x = useMotionValue(0);
    let y = useMotionValue(0);

    useEffect(() => {
        let endMotion = Math.PI * 2 + angle.get()
        setA(window.innerWidth * orbit)
        setB(window.innerHeight * height / 4)
        console.log(window.innerWidth);
        animate(angle, endMotion, {
            duration: 4 * orbitSpeed,
            repeat: Infinity,
            ease: 'linear',
            onUpdate: latest => zIndex.set(Math.round(Math.sin(latest + startAng)))
        })

    }, [global.window])

    x = useTransform(angle, (ang: number) => a * Math.cos(ang + startAng));
    y = useTransform(angle, (ang: number) => b * Math.sin(ang + startAng));

    return (
    <motion.div className='mini-planet-container' style={{
        top: '50%',
        left: `calc(${posX} * 100vw)`,
        width: size,
        zIndex: zIndex,
        position: 'absolute' //seems like, on runtime, this position was set to 'static' 
                            //which treats it like a normal div and slots it directly adjacent
                            //to the logo. be careful about setting properties in css vs here
    }}>
        <motion.div  className='mini-planet'
            style={{
            width: `calc(${size}*min(.1vw, 1vh))`,
            height: `calc(${size}*min(.1vw, 1vh))`,
            borderRadius: '50%',
            backgroundColor: color,
            x: x,
            y: y,
            }}
        />
    </motion.div>)
}

export default MiniPlanet;