import { StaticImageData } from 'next/image';
import '../styles/style.css';
import React from 'react';
import Image from 'next/image';

interface expProps {
    title: string,
    desc: string,
    img1: StaticImageData,
    img2: StaticImageData,
    img3: StaticImageData
}

const Experience: React.FC<expProps> = ({title, desc, img1, img2, img3}) => {
    return (
        <>
            <div className='section small'>
                <h1 className='projTitle'>{title}</h1>
                <p className='projDesc'>{desc}</p>
            </div>
            <div className='section small'>
                <Image src={img1} alt='image 1'/>
                <Image src={img2} alt='image 2'/>
                <Image src={img3} alt='image 3'/>
            </div>
        </>
    )
}

export default Experience;