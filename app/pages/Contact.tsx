'use client';

import {useState} from 'react';

export default function Contact() {
    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('empty');
    const [body, setBody] = useState('');

    function handleSenderChange(e: any) {
        setSender(e.target.value);
    }

    function handleSubjectChange(e:any) {
        setSubject(e.target.value === '' ? 'empty' : e.target.value);
    }

    function handleInputChange(e: any) {
        setBody(e.target.value);
    }

    const handleSendEmail = () => {
        
    }

    return (
        <div className='page-content'>
            This is the contact page.
            <ul className='socials'>
                <li><a className='icon linkedin'/></li>
                <li><a className='icon github'/></li>
                <li></li>
                <li></li>
            </ul>
            <div className='emailPage'>
                email:<input type='text' id='sender' onChange={handleSenderChange}></input>
                subject:<input type='text' id='subject' onChange={handleSubjectChange}></input>
                message:<textarea id='body' onChange={handleInputChange}></textarea>
                <button type='submit' disabled = {body === '' || sender === ''} onClick={handleSendEmail}>Submit</button>
            </div>
        </div>
    )
}