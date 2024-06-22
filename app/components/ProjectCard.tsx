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
}

const ProjectCard: React.FC<cardProps> = ( {name, imgPath, desc, stack, link} ) => {
    return (
        <div className='projcard'>
            <Image src={imgPath} style={{width: '100%', height: '300px', borderRadius: 28, border: 'solid 2px black'}} alt={name}/>
            <div className='proj-entry'>
                <h3 className='proj-name'>{name}</h3>
                <div className='proj-stack'>{stack}</div>
                <div className='proj-desc'>{desc}</div>
                <Link className='proj-link' href={`./${link}`}>LEARN MORE <span>→</span></Link>
            </div>
        </div>
    )
}

export default ProjectCard;