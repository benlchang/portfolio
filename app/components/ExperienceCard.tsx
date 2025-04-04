'use client'

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import {motion} from 'framer-motion';
import '../styles/style.css';
import Link from 'next/link';

interface cardProps {
    job_title: string;
    company: string;
    stack: string,
    link: string;
    imgPath: string;
    start: Date;
    end: Date;
}

const ExperienceCard: React.FC<cardProps> = ( {job_title, company, stack, link, imgPath, start, end} ) => {
    return (
        <div className='expcard'>
            {/* <motion.div style={{width: '100%'}} whileHover={{scale: 1.1}}>
                <Image src={imgPath} style={{margin: 0, width: '100%', height: '280px', borderRadius: 28}} alt={company}/>
            </motion.div> */}
            <h3 className='proj-name'>{job_title}</h3>
            <div>{company}</div>
            <div>{stack}</div>
            {/* <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>{link !== '/' && <Link className='proj-link' href={link}>About the Project →</Link>}</span> 
                <span>{github !== '/' && <Link className='proj-link' target='_blank' href={github}>GitHub →</Link>}</span>
            </div> */}
        </div>
    )
}

export default ExperienceCard;