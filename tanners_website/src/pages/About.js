import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';


import FloatingNav from '../components/FloatingNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




class About extends React.Component {
    render() {
        return (
            <section id="About" className="panel__About">
                <FloatingNav />
                <div className="about-content">
                    <div className="about-intro-para">
                        <h2>I am a Front-End Developer</h2>
                        <p>. . . Interface Designer, and Full-Stack Developer from Seattle, Washington.</p>
                        <p>Recently I graduated from the University of Colorado-Boulder (c/o 2020) as a 
                            Bachelor of Science in Computer Science. I'm currently looking for employment in the U.S. that creates kick-ass products 
                            that drive compelling and provoking emotions for its end-users.</p>
                        <p>I not only know how to create with a user-driven mindset, but understand how these are functioanlly 
                            entangled with the business value they can drive for a company.</p>
                        </div>
                    <div className="about-intro-para">
                        <h2>I am Passionate</h2>
                        <p>. . . about the technical [froth], minutia, principles, and drivers that 
                            can make learning, navigating, and using a product a natural human experience.
                            As you can imagine, I love to <i>observe</i> people.
                            My daily focus revolves on how Cognition, Visual Communication, and industry design principles
                            can be molded into an interface to create true value.
                        </p>
                    </div>
                    <div className="about-intro-para">
                        <h2>I am Fluent</h2>
                        <p>. . . in a wide variety of design principles, the full-stack development cycle, and numerous languages including React, JavaScript, SQL, and more.
                            I'm an expert with the MERN stack, aspiring JS animator, and am constantly learning new tools
                            that can help drive better and better results.
                        </p>
                    </div>
                </div>
                <div className="about-more-content">
                    <span>
                        <Link to="/me">
                            <h3>Learn more about who I am
                                <span>
                                    &nbsp;&nbsp;&nbsp;
                                    <FontAwesomeIcon icon={ faArrowRight }/>
                                </span>
                            </h3>
                        </Link>
                    </span>
                    <span>
                        &nbsp;
                    </span>
                    <span>
                        <Link to="/skills">
                            <h3>
                                But seriously, what are your technical skills?
                                <span>
                                    &nbsp;&nbsp;&nbsp;
                                    <FontAwesomeIcon icon={ faArrowRight }/>
                                </span>
                            </h3>
                        </Link>
                    </span>               
                </div>
            </section>
        );
    }
}

export default About;