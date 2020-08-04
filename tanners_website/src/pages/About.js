import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <section id="About" className="panel__About">
                <div className="about-content">
                        <div className="about-qIntro">
                            <h2>About</h2>
                            <p>I am a Full-Stack Developer with a keen eye for Design from
                                Seattle, Washington. </p>
                        </div>
                        <div className="portfolio-header">
                            My Work.
                        </div>
                </div>
            </section>
        );
    }
}

export default About;