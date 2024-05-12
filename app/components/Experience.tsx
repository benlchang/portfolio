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
                <div className='card-title' style={{textAlign: 'left', fontSize: '6.8vh'}}>
                    <b><u>{title}</u></b>
                </div>
                <div className='card-desc' style={{margin: '3% 7% 0 7%', fontSize: 24}}>
                    {desc}
                </div>  
            </div>
            <div className='section small'>
                <Image src={img1} className='expImage' alt='image 1'/>
                <Image src={img2} className='expImage' alt='image 2'/>
                <Image src={img3} className='expImage' alt='image 3'/>
            </div>
        </>
    )
}

export default Experience;