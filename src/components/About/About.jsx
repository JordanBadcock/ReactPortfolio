import React from 'react';
import './About.css'; // Import your styling

function About() {
    return (
        <section id="about">
            <div className="about-me">
                <h1>About Me</h1>
                <p>
                I am a recent graduate of the Software Development program from the College of the North Atlantic. I am 23 years old and I'm from St. John's, NL, Canada. I have a passion for Web Development, Gaming, and Sports.
                </p>
                <p>
                During my 3-year program, I completed four separate work-terms, each lasting around four months, where I picked up traits and skills essential to be successful in the Tech field.
                </p>
                <p>
                Feel free to Connect or Follow me on my <a href='https://www.linkedin.com/in/jordan-badcock-0022751bb/'>LinkedIn</a>. I'm open to job opportunities where I can contribute, learn and grow. If you have an opportunity that matches my skillset and experience then don't hesitate to contact me!
                </p>
                <h2>My Toolkit</h2>
                <div className="skills-container">
                    <br />
                    <div className="skills">
                        <img id='html-cssImg' src='/images/html-css.png' alt="HTML/CSS" />
                    </div>
                    <div className="skills">
                        <img id='javaImg' src='/images/java.png' alt="Java" />
                    </div>
                    <div className="skills">
                        <img id='jsImg' src='/images/js.png' alt="JavaScript" />
                    </div>
                    <div className="skills">
                        <img id='reactImg' src='/images/react.png' alt="React" />
                    </div>
                    <div className="skills">
                        <img id='nodeImg' src='/images/node.png' alt="Node.js" />
                    </div>
                    <div className="skills">
                        <img id='mongodbImg' src='/images/mongodb.png' alt="MongoDB" />
                    </div>
                    <div className="skills">
                        <img id='bootstrapImg' src='/images/bootstrap.png' alt="Bootstrap" />
                    </div>
                    <div className="skills">
                        <img id='githubImg' src='/images/github.png' alt="GitHub" />
                    </div>
                    {/*  <div className="skills">
                        <img id='mysqlImg' src='/images/mysql.png' alt="MySQL" />
                    </div>*/}
                </div>
            </div>
        </section>
    );
}

export default About;