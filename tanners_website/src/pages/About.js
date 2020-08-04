import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <section id="About" className="panel__About">
                <div className="about-content">
                    <div className="about-intro-para">
                        <h2>I am</h2>
                        <p>a Full-Stack Developer from Seattle, Washington with a keen eye for Design from
                            Seattle, Washington. </p>
                        <p>I graduated from the University od Colorado-Boulder in the Class of 2020 with a Bachelor's 
                            in Computer Science.</p>
                        <p>My informal focus and passion is in designing products.</p>
                    </div>
                    <div className="about-intro-para">
                        <h2>Passionate</h2>
                        <p>about</p>
                    </div>
                    <div className="about-intro-para">
                        <h2>Fluent</h2>
                        <p>in a wide variety of design principles, the full-stack development cycle, and much more</p>
                    </div>
                </div>
                <div className="about-more-content">
                    <span>
                        <Link to="/about">
                            <h3>Learn more about this guy</h3>
                        </Link>
                    </span>
                    <span>
                        &nbsp;
                    </span>
                    <span>
                        <Link to="/skills">
                            <h3>But seriously, what are your technical skills?</h3>
                        </Link>
                    </span>               
                </div>
            </section>
        );
    }
}

export default About;