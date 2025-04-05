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
    imgPath: StaticImageData;
    start: Date;
    end: Date;
}

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ExperienceCard: React.FC<cardProps> = ( {job_title, company, stack, link, imgPath, start, end} ) => {
    return (
        <div className='expcard'>
            <motion.div style={{width: '85%'}} whileHover={{scale: 1.1}}>
                <Image src={imgPath} style={{margin: 0, width: '100%', height: '200px', borderRadius: 28}} alt={company}/>
            </motion.div>
            <h3 className='proj-name'>{job_title}</h3>
            <div>{company}</div>
            <div>{stack}</div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <span>{months[start.getMonth()]} {start.getFullYear()} </span>
                <span>{months[end.getMonth()]} {end.getFullYear()} </span>

            </div>
            {/* <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>{link !== '/' && <Link className='proj-link' href={link}>About the Project →</Link>}</span> 
                <span>{github !== '/' && <Link className='proj-link' target='_blank' href={github}>GitHub →</Link>}</span>
            </div> */}
        </div>
    )
}

export default ExperienceCard;