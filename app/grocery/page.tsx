import React from 'react';
import '../styles/style.css';
import Image from 'next/image';
import system_full from '../images/system_full.png';

export default function Grocery() {
    return (
        <div className='page-div'>
            <div className='section small'>
                <div className='aboutLogo'>Grocery List Optimizer</div>
            </div>
            <div className='section small desc'>  
                <h1>The Inspiration</h1>
                As a stingy college student who wants to get better at cooking, the local grocery 
                stores in Charlottesville are pretty important in my daily life. However, it's 
                not always easy to know where to shop if I want the best deals. I've done my fair
                share of shopping, but not everyone wants to spend so many trips visiting each and every 
                store in the area to derive their own optimal grocery list -- what a waste of time,
                gas, and patience!
            </div>
            <div className='section small desc'>
                <h1>The Project</h1>
                For myself and my friends who had the same concerns, I decided to use this as an
                opportunity to grow as a full-stack developer and build this grocery list optimizing
                service! It works like a miniature search engine that fields user input through text and 
                store filters and returns a list of the lowest prices for any item the user searches for.
                The user may search either one single item and see a list of the five lowest prices in the 
                area, or enter a list of items separated by commas to see a completely optimal shopping trip
                thoroughly planned out and sorted by store!
            </div>
            <Image src={system_full} alt='Full system design for my grocery list optimizer' className='projectIMG' style={{width: '60%'}}/>
            <p style={{textAlign: 'center', width: '100%'}}><i>Full system design for the grocery list optimizer project. Backend technologies like web scraping scripts and Kroger API programs not included.</i></p>
            <div className='section small desc'>
                <h1>The Architecture</h1>
                I designed and built the user interface with React, a framework I've come to love for its 
                straightforward component architecture and state management. At the click of a button, the 
                user's search filters get sent to a REST API I built with an Express.js backend server, which then
                fetches data from a PostgreSQL database that I populated with grocery store data via Kroger's 
                very own products API and some web scraping of a live user-made Trader Joe's inventory site.
            </div>
            <div className='section small desc'>
                During my very first test of the site, an edge case where I misspelled 'chicken' as 'chickne' returned
                no results at all. This made sense, given that my code on the backend only checked for exact string
                matches and didn't account for any kind of similarity. I know that this isn't how users would process that 
                kind of mistake, so I looked for better and found it through the use of Natural Language Processing techniques!
                TensorFlow made it convenient for me to implement cosine similarity to compare vector embeddings of the available
                products and the user's input in JavaScript; with NLP added to the algorithm, the user's desired result shows up
                much more frequently!
            </div>
        </div>
    )
}