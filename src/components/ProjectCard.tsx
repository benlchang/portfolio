import React from 'react';
import '../styles/style.css';

interface cardProps {
    name: string;
    imgPath: string;
    desc: string;
}

const ProjectCard: React.FC<cardProps> = ( {name, imgPath, desc} ) => {
    return (
        <div className='card'>
            <img src={imgPath}></img>
            <div className='card-text'>
                <div className='card-title'>
                    {name}
                </div>
                <div className='card-desc'>
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;