import React from 'react';
import {motion} from 'framer-motion';
import '../styles/style.css';

interface cardProps {
    name: string;
    imgPath: string;
    desc: string;
}

const ProjectCard: React.FC<cardProps> = ( {name, imgPath, desc} ) => {
    return (
        <motion.a className='card' href='./'
            whileHover={{
                scale: 1.1,
                transition: {duration: 0.5}
            }}
            whileTap={{
                scale: 1
            }}>
            <img src={imgPath} style={{margin: '5% 0', width: '90%', height: 'auto', borderRadius: 20}}></img>
            <div className='card-text'>
                <div className='card-title'>
                    {name}
                </div>
                <div className='card-desc'>
                    {desc}
                </div>
            </div>
        </motion.a>
    )
}

export default ProjectCard;