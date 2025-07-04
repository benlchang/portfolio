import React from 'react';
import Image, { StaticImageData } from 'next/image';
import {motion} from 'framer-motion';
import '../styles/style.css';
import Link from 'next/link';
import LFCard, {lfProps, lfPropsList} from './LFCard';

interface cardProps {
    id: string,
    name: string;
    imgPath: string;
    desc: string;
    stack: lfProps[];
    link: string;
    github: string;
}

const ProjectCard: React.FC<cardProps> = ( {id, name, imgPath, desc, stack, link, github} ) => {
    return (
        <div className='projcard'>
            <div className={`proj-wrapper ${id}`}>
                <div className='proj-fade-wrapper'></div>
                <div className='proj-entry'>
                    <h3 className='proj-name'>{name}</h3>
                    <div> </div>
                    <div className='proj-desc'>{desc}</div>
                    <div>
                        {stack.map(item => 
                            <Image src={item.imgPath} className='lfCard small' alt={item.name}/>
                        )}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>{link !== '/' && <Link className='proj-link' href={link}>About the Project →</Link>}</span> 
                        <span>{github !== '/' && <Link className='proj-link' target='_blank' href={github}>GitHub →</Link>}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;