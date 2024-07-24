'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import {motion} from 'framer-motion';
import '../styles/style.css';
import Link from 'next/link';

interface cardProps {
    name: string;
    imgPath: StaticImageData;
    desc: string;
    stack: string;
    link: string;
    github: string;
}

const ProjectCard: React.FC<cardProps> = ( {name, imgPath, desc, stack, link, github} ) => {
    return (
        <div className='projcard'>
            <motion.div style={{width: '100%'}} whileHover={{scale: 1.1}}>
                <Image src={imgPath} style={{margin: 0, width: '100%', height: '280px', borderRadius: 28}} alt={name}/>
            </motion.div>
            <div className='proj-entry'>
                <h3 className='proj-name'>{name}</h3>
                <div className='proj-stack'>{stack}</div>
                <div className='proj-desc'>{desc}</div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>{link !== '/' && <Link className='proj-link' href={link}>About the Project →</Link>}</span> 
                    <span>{github !== '/' && <Link className='proj-link' target='_blank' href={github}>GitHub →</Link>}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;