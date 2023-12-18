import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section id="projects">
                <div className="projects-div">
                    <h1>My Projects</h1>
                    <div className='projects-container'>
                        <div className="rating">
                            <p>
                            <strong>Rating Application</strong>
                            </p>
                            <p>
                            A Front-End React application that allows the user to leave a rating. Meant to be added to a website for feedback purposes.
                            </p>
                        </div>
                        <div className="library">
                            <p>
                                <strong>Local Library</strong>
                            </p>
                            <p>
                                A Full-Stack library application that stores a list of books, genres, authors, and book instances, also allowing you to create, update and delete them as well. Built using Express.js along with MongoDB.
                            </p>
                        </div>
                        <div className="insurance">
                            <p>
                                <strong>Insurance Application</strong>
                            </p>
                            <p>
                                A Full-Stack Insurance Calculation application that allows you to make home and auto quotes at the click of a mouse. Built using Spring Boot in Java in the backend, as well as Thymeleaf for the front-end.
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Projects;