import React from 'react';
import './Projects.css';
import {motion} from 'framer-motion';

function Projects() {
    return (
        <section id="projects">
            <motion.div className="projects-div"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <h1>My Projects</h1>
                <div className='projects-container'>
                    <div className="row">
                        <div className="rating">
                            <p>
                                <strong>Rating Application</strong>
                            </p>
                            <p>
                                A Front-End React application that allows the user to leave a rating. Meant to be added to a website for feedback purposes.
                            </p>
                            <a href='https://github.com/JordanBadcock/interactive-rating' target='_blank'>
                                <img src='/images/github.png' />
                            </a>
                            <p>View Code</p>
                        </div>
                        <div className="library">
                            <p>
                                <strong>Local Library</strong>
                            </p>
                            <p>
                                A Full-Stack library application that stores a list of books, genres, authors, and book instances, also allowing you to create, update and delete them as well. Built using Express.js along with MongoDB.
                            </p>
                            <a href='https://github.com/JordanBadcock/Express-Local-Library/' target='_blank'>
                                <img src='/images/github.png' />
                            </a>
                            <p>View Code</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="insurance">
                            <p>
                                <strong>Insurance Application</strong>
                            </p>
                            <p>
                                A Full-Stack Insurance Calculation application that allows you to make home and auto quotes at the click of a mouse. Built using Spring Boot in Java in the backend, as well as Thymeleaf for the front-end.
                            </p>
                            <a href='https://github.com/JordanBadcock/Insurance-Application' target='_blank' >
                                <img src='/images/github.png' />
                            </a>
                            <p>View Code</p>
                        </div>
                        <div className="messageBoard">
                            <p>
                                <strong>Mini Message Board</strong>
                            </p>
                            <p>
                                A Full-Stack Message Board application that allows you to connect to the application and send messages back and forth with another user.
                            </p>
                            <a href='https://github.com/JordanBadcock/mini-message-board' target='_blank'>
                                <img src='/images/github.png' />
                            </a>
                            <p>View Code</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <img src='/public/images/coding.png'/>
        </section>
    );
}

export default Projects;