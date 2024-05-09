'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import {motion} from 'framer-motion';
import '../styles/style.css';

interface cardProps {
    name: string;
    imgPath: StaticImageData;
    desc: string;
}

const ProjectCard: React.FC<cardProps> = ( {name, imgPath, desc} ) => {
    return (
        <motion.a className='projCard' href='./'
            whileHover={{
                scale: 1.1,
                transition: {duration: 0.5}
            }}
            whileTap={{
                scale: 1
            }}>
            <Image src={imgPath} style={{margin: '7% 0 4% 0', width: '86%', height: '60%', borderRadius: 28}} alt={name}/>
            <div className='card-text' style={{width: '100%'}}>
                <div className='card-title' style={{textAlign: 'left', margin: '0 7%', fontSize: 30}}>
                    <b><u>{name}</u></b>
                </div>
                <div className='card-desc' style={{margin: '0 7%'}}>
                    {desc}
                </div>
            </div>
        </motion.a>
    )
}

export default ProjectCard;