'use client'

import React, {useState, useEffect} from 'react';
import Image, {StaticImageData} from 'next/image';
import '../styles/style.scss';
import {ItemId, ScrollMenu} from 'react-horizontal-scrolling-menu';
import exchange from '../images/exchange.png';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { publicApiType } from 'react-horizontal-scrolling-menu';
import ExperienceCard from './ExperienceCard';
import lspace from '../images/lspace.png';
import gmu from '../images/gmu.webp';
import uvacs from '../images/uvacs.png';
import uvaastro from '../images/uvaastro.png';
import powershell from '../images/powershelll.webp';
import django from '../images/django.png';
import postgres from '../images/pgsql_noname.png';
import jupyter from '../images/jupyter.png';
import c from '../images/c.png';
import pyklip from '../images/pyklip.jpg';
import aws from '../images/aws.png';
import github from '../images/github.svg';
import react from '../images/react.png';
import spring from '../images/spring.png';
import jira from '../images/jira.webp';
import bti from '../images/bti360.jpg';
import { maxHeaderSize } from 'http';

let now = new Date();
let startMonth = 0;
let startYear = 2021;

const experiences = [
    {job_title: 'Astronomy Research Intern', company: "GMU ASSIP", stack: [powershell], link: '/', imgPath: gmu, start: new Date(2021, 5-1), end: new Date(2021, 7-1)},
    {job_title: 'Project Development Fellow', company: "NASA L'SPACE", stack: [], link: '/', imgPath: lspace, start: new Date(2022, 9-1), end: new Date(2023, 5-1)},
    {job_title: 'Software Developer Intern', company: "Exchange IT", stack: [django, postgres], link: '/', imgPath: exchange, start: new Date(2024, 8-1), end: new Date(2024, 10-1)},
    {job_title: 'Undergraduate Researcher', company: "UVA Astronomy", stack: [jupyter, powershell, pyklip, github], link: '/', imgPath: uvaastro, start: new Date(2023, 12-1), end: now},
    {job_title: 'Teaching Assistant', company: "UVA Computer Systems & Organization II", stack: [c], link: '/', imgPath: uvacs, start: new Date(2025, 1-1), end: now},
    {job_title: 'Software Engineer Intern', company: "BTI360", stack: [react, spring, aws, jira], link: '/', imgPath: bti, start: new Date(2025, 5-1), end: now}
]

const times = Array.from({ length: 55 }, (_, i) => 54 - i);

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

export default function Timeline() {
    
    let width = 800;
    if(typeof window !== "undefined") {
        width = window.innerWidth / 2;
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleDateScroll);
        return () => window.removeEventListener('scroll', handleDateScroll);
    }, []);

    const [activeExperiences, setActiveExperiences] = useState([experiences[3], experiences[4], experiences[5]])


    const handleDateScroll = () => {
        let allDates: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('[data-item]');
        
        let visibleIds: string[] = [];
        if (allDates !== null){
            visibleIds = Array.from(allDates)
                .filter(item => {
                    let rect = item.getBoundingClientRect();
                    return rect.left >= .7 * width && rect.right <= 1.3 * width;
                })
                .map(item => item.id);
        }
        
        
        let currentExperiences = experiences.filter((event) => dateContains(event, visibleIds));

        // for some reason, on page load, it scrolls twice and no items are loaded, so the field is empty on the page
        if(visibleIds.length == 0){
            currentExperiences = [experiences[3], experiences[4], experiences[5]];
        }
        setActiveExperiences(currentExperiences);
    }

    function Card({itemId}: {itemId: number}) {

        let date = new Date(startYear + itemId / 12, startMonth + itemId % 12);
    
        let ctr = width;
    
        if (typeof document !== 'undefined') {
            let container = document.getElementById(`${itemId}`);
            let rect = container?.getBoundingClientRect();
    
            if(rect != null){
                ctr = (rect.left + rect.right) / 2;
            }
        }
    
        return (
            <div style={{width: '160px'}}>
                <span style={{display: 'flex', justifyContent: 'center', textAlign: 'center', fontSize: `calc(28px * (1 - (${1.4/width * Math.abs(ctr - width)}))`}}>{months[date.getMonth()]} {date.getFullYear()}</span>
            </div>
        )
    }
    
    return (
        <div>
            <div className='section small display'>
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
                <div className='borderdiv'>
                    <ScrollMenu 
                        onInit={() => handleDateScroll()}
                        onUpdate={() => handleDateScroll()}
                    >
                        {times.map((num) => (
                            <div data-item={`id_${num}`} id={`${num}`} key={num}>
                                <Card 
                                    itemId={num}
                                />
                            </div>
                        ))}
                    </ScrollMenu>
                </div>

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