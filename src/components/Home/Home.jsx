import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';


function Home() {
    const emailAddress = 'jordan.badcock51@ed.cna.nl.ca';

    return(
        <motion.div 
            className='intro'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
            <div className='intro-content'>
                <img src='/images/selfie.jpg' id='selfie' alt='intro img'/>
                <div className='intro-text'>
                    <h1>Jordan Badcock</h1>
                    <p>Software Developer</p>
                </div>
            </div>
            <div className='footer'>
                <a href='https://www.linkedin.com/in/jordan-badcock-0022751bb/' target='_blank' rel='noopener noreferrer'>
                    <img src='/images/linkedin.png' id='linkedinImg' class='grayscale' alt='LinkedIn' />
                </a>
                <a  href='https://github.com/JordanBadcock' target='_blank' rel='noopener noreferrer'>
                    <img src='/images/github.png' id='githubImg'/>
                </a>
                <a href={`mailto:${emailAddress}`}>
                    <img src='/images/email.png' id='emailImg' alt='Email' />
                </a>
            </div>
        </motion.div>
    )
}

export default Home;