import '../styles/style.css';

export default function About() {
    return (
        <div className='page-content'>
            <div className='blurb'>
                <img className='left' src='/images/headshot.png'/>
                <p className='right'>I'm <b>Ben</b>. I'm a rising third-year undergraduate student at the 
                    University of Virginia in Charlottesville, Virginia. I'm working
                    on completing my BA in Computer Science with a focus in frontend 
                    development and UI/UX design, but I <b>never</b> try to limit myself 
                    when it comes to building my skillset!
                </p>
            </div>
            <div className='blurb'>
                <p>blurb about dance, extracurriculars that take up most of my time</p>
                <img src='/images/dance.png'/>
            </div>
            <div className='blurb'>
                <img/>
                <p>blurb about community involvement via culture orgs</p>
            </div>
            <div className='blurb'>
                <p>blurb about something else! astronomy?</p>
                <img/>
            </div>
        </div>
    )
}