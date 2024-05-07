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
            <img src={imgPath} style={{margin: '7% 0 4% 0', width: '86%', height: '60%', borderRadius: 28}}></img>
            <div className='card-text' style={{width: '100%'}}>
                <div className='card-title' style={{textAlign: 'left', margin: '0 7%', fontSize: 30}}>
                    {name}
                </div>
                <div className='card-desc' style={{margin: '0 7%'}}>
                    {desc}
                </div>
            </div>
        </motion.a>
    )
}

export default ProjectCard;