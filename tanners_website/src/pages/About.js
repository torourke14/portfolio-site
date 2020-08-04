import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <section id="About" className="panel__About">
                <div className="about-content">
                        <div className="about-qIntro">
                            <h2>Who..?</h2>
                            <p>I am a Full-Stack Developer from Seattle, Washington with a keen eye for Design from
                                Seattle, Washington. </p>
                            <p>I graduated from the University od Colorado-Boulder in the Class of 2020 with a Bachelor's 
                                in Computer Science.</p>
                            <p>My informal focus and passion is in designing products.</p>
                        </div>
                </div>
            </section>
        );
    }
}

export default About;