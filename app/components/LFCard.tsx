import '../styles/style.scss';
import Image from 'next/image';
import React from 'react';
import python from '../images/python.jpg';
import js from '../images/js.jpg';
import ts from '../images/ts.png';
import html from '../images/html.jpg';
import css from '../images/css.jpg';
import java from '../images/java.png';
import sql from '../images/sql.png';
import react from '../images/react.png';
import next from '../images/next.png';

const langsandframeworks = [
    {name: 'Python', imgPath: python}, 
    {name: 'Javascript', imgPath: js},
    {name: 'Typescript', imgPath: ts},
    {name: 'HTML', imgPath: html},
    {name: 'CSS', imgPath: css},
    {name: 'Java', imgPath: java},
    {name: 'SQL', imgPath: sql},
    {name: 'React', imgPath: react},
    {name: 'Next.js', imgPath: next}
]

const LFCard = () => {
    const listItems = langsandframeworks.map(item => 
        <Image key={item.name} src={item.imgPath} className = 'lfCard' alt={item.name}/>);
    return (
        <div className='langsandframeworks'>
            {listItems}
        </div>
    )
}

export default LFCard;