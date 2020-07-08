import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
        
        render() {
                return (
                        <div id="About">
                                <nav className="sidenav">
                                        <ul>
                                                <li><a href="#Bio">Bio</a></li>
                                                <li><a href="#History">My History</a></li>
                                                <li><a href="#Colleagues">Colleagues</a></li>
                                                <li><a href="#Personal">Personal</a></li>
                                        </ul>
                                </nav>
                               

                                <article className="about-contents">
                                        <section id="Bio">
                                                <h2>I am an aspiring Designer & Developer</h2>
                                                <p>Lets talk stuff...</p>
                                        </section>
                                        <section id="History">
                                                <h2>History</h2>
                                                <p>Lets talk stuff...</p>
                                        </section>
                                        <section id="Colleagues">
                                                <h2>Who I've Worked With</h2>
                                                <p>Lets talk stuff...</p>
                                        </section>
                                        <section id="Personal">
                                                <h2>Personal Life</h2>
                                                <p>Lets talk stuff...</p>
                                        </section>
                                </article>
                               

                        </div>
                )
        }
}

export default AboutMe;

