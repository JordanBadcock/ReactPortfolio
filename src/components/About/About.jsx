import React from 'react';
import './About.css'; // Import your styling
import {motion} from 'framer-motion';

function About() {
    return (
        <section id="about">
            <motion.div className="about-me"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <h1>About Me</h1>
                <p>
                I am a recent graduate of the Software Development program from the College of the North Atlantic. I am 23 years old and I'm from St. John's, NL, Canada. I have a passion for Software Development, Gaming, and Sports.
                </p>
                <p>
                During my 3-year program, I completed four separate work-terms, each lasting around four months, where I picked up traits and skills essential to be successful in the Tech field.
                </p>
                <p>
                Feel free to Connect or Follow me on my <a href='https://www.linkedin.com/in/jordan-badcock-0022751bb/' target='_blank'>LinkedIn</a>. If you have an opportunity that matches my skillset and experience then don't hesitate to contact me!
                </p>
                <h2>My Toolkit</h2>
                <div className="skills-container">
                    <br />
                    <div className="skills">
                        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'>
                            <img id='htmlImg' src='/images/html.png' alt="HTML" />
                        </a>
                    </div>
                    <div className='skills'>
                        <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'>
                            <img id='cssImg' src='/images/css.png' alt='CSS' />
                        </a>
                    </div>
                    <div className="skills">
                        <a href='https://dev.java/learn/' target='_blank'>
                            <img id='javaImg' src='/images/java.png' alt="Java" />
                        </a>
                    </div>
                    <div className="skills">
                        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>
                            <img id='jsImg' src='/images/js.png' alt="JavaScript" />
                        </a>
                    </div>
                    <div className="skills">
                        <a href='https://legacy.reactjs.org/docs/getting-started.html' target='_blank'>
                            <img id='reactImg' src='/images/react.png' alt="React" />
                        </a>
                    </div>
                    <div className="skills">
                        <a href='https://nodejs.org/docs/latest/api/' target='_blank'>
                            <img id='nodeImg' src='/images/node.png' alt="Node.js" />
                        </a>
                    </div>
                    <div className="skills">
                        <a href='https://www.mongodb.com/docs/' target='_blank'>
                            <img id='mongodbImg' src='/images/mongodb.png' alt="MongoDB" />
                        </a>
                    </div>
                    <div className="skills">
                        <a href='https://getbootstrap.com/docs/4.1/getting-started/introduction/' target='_blank'>
                            <img id='bootstrapImg' src='/images/bootstrap.png' alt="Bootstrap" />
                        </a>
                    </div>
                    <div className="skills">
                        <a href='https://docs.github.com/en' target='_blank'>
                            <img id='githubImg' src='/images/github.png' alt="GitHub" />
                        </a>
                    </div>
                    {/*  <div className="skills">
                        <img id='mysqlImg' src='/images/mysql.png' alt="MySQL" />
                    </div>*/}
                </div>
            </motion.div>
        </section>
    );
}

export default About;