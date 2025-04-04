'use client'

import React, {useState} from 'react';
import Image, {StaticImageData} from 'next/image';
import '../styles/style.scss';
import {ItemId, ScrollMenu} from 'react-horizontal-scrolling-menu';
import exchange from '../images/exchange.png';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { publicApiType } from 'react-horizontal-scrolling-menu';
import ExperienceCard from './ExperienceCard';

let now = new Date();
let curMonth = now.getMonth();
let curYear = now.getFullYear();

let startMonth = 0;
let startYear = 2021;

const experiences = [
    {job_title: 'Astronomy Research Intern', company: "GMU ASSIP", stack: 'Powershell', link: '/', imgPath: '/', start: new Date(2021, 5), end: new Date(2021, 7)},
    {job_title: 'Project Development Intern', company: "NASA L'SPACE", stack: '', link: '/', imgPath: '/', start: new Date(2022, 9), end: new Date(2023, 5)},
    {job_title: 'Software Developer Intern', company: "Exchange IT", stack: 'Django, PostgreSQL', link: '/', imgPath: '/', start: new Date(2024, 8), end: new Date(2024, 10)},
    {job_title: 'Undergraduate Researcher', company: "UVA Astronomy", stack: 'Jupyter, Powershell, pyKLIP & species', link: '/', imgPath: '/', start: new Date(2023, 12), end: now},
    {job_title: 'Teaching Assistant - Computer Architecture', company: "UVA Computer Science", stack: 'C', link: '/', imgPath: '/', start: new Date(2025, 1), end: now},
    // {
    //     name: 'Exchange IT Solutions',
    //     position: 'Backend Software Developer Intern',
    //     imgPath: {exchange},
    //     desc: 
    // },
    // {

    // }
]

const times = Array.from({ length: 53 }, (_, i) => 52 - i);

const dateContains = (event: {start: Date, end: Date}, nums: string[]) => {

    for(let i = 0; i < nums.length; i++){
        let num = parseInt(nums[i]);
        const curDate = new Date(startYear + num / 12, startMonth + num % 12);
        
        if(curDate >= event.start && curDate <= event.end) {
            return true;
        }
    }

    return false;
}

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function Card({itemId}: {itemId: number}) {

    let date = new Date(startYear + itemId / 12, startMonth + itemId % 12);
    return (
        <div style={{width: '160px'}}>
            {months[date.getMonth()]} {date.getFullYear()}
        </div>
    )
}

export default function Timeline() {

    const [activeExperiences, setActiveExperiences] = useState([experiences[0]])


    const handleDateScroll = (publicAPI: publicApiType) => {
        let visibleIds = publicAPI.items.filter(item => {   // issues here
            let rect = item[1].entry.boundingClientRect;
            console.log(rect.left, rect.right);
            return rect.left >= 150 && rect.right <= 1400;
        }).map(item => item[0]);
        console.log(visibleIds);
        const currentExperiences = experiences.filter((event) => dateContains(event, visibleIds));
        setActiveExperiences(currentExperiences);
    }
    
    return (
        <div>
            <div className='section small'>
                {activeExperiences.map((experience) => (
                    <ExperienceCard 
                        job_title={experience.job_title}
                        company={experience.company}
                        stack={experience.stack}
                        link={experience.link}
                        imgPath={experience.imgPath}
                        start={experience.start}
                        end={experience.end}
                    />
                ))}
            </div>
            <div className='section small scroll'> 
                <ScrollMenu 
                    onUpdate={(publicAPI) => handleDateScroll(publicAPI)}
                >
                    {times.map((num) => (
                        <div key={num}>
                            <Card 
                                itemId={num}
                            />
                        </div>
                    ))}
                </ScrollMenu>

            </div>
        </div>
    )
}



// <ProjectCard
//     name='Exchange IT Solutions'
//     imgPath={exchange}
//     desc=''
//     stack='Backend Software Developer Intern . . . . Aug 2024 - Pres'
//     link='/'
//     github='/'
// />
// <ProjectCard
//     name='University of Virginia'
//     imgPath={uva}
//     desc='Benchmark brown dwarf astrometry and composition analysis with Jupyter Notebook'
//     stack="Undergraduate Researcher . . . . . . . . . . .  . Dec 2023 - Pres"
//     link='./hd47127b'
//     github='/'
// />
// <ProjectCard
//     name="NASA L'SPACE"
//     imgPath={lspace}
//     desc='Collaborative NASA project and proposal simulation experience'
//     stack="Project Developer Intern . . . . . . . . . . Sep 2022 - Apr 2023"
//     link='/'
//     github='/'
// />
// <ProjectCard
//     name='George Mason University'
//     imgPath={gmu}
//     desc='Astronomical image reduction pipeline and telescope operation'
//     stack='Research Intern . . . . . . . . . . . . . . . . . May 2021 - Jul 2021'
//     link='/'
//     github='/'
// />