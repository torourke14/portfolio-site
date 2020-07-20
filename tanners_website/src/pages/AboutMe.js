import React from 'react';
import './AboutMe.css';

//Icons
import linkedinIcon from '../images/linkedin-icon.png';
import githubIcon from '../images/github-icon.png';
import emailIcon from '../images/mail-icon.png';
// Recent Work
import DoMADLogo from '../images/projects/DoMADLogoDark.svg';
//Files
import Resume from '../files/Resume__Tanner-ORourke.pdf';

class AboutMe extends React.Component {
        
        render() {
                return (
                <div id='AboutMaster'>

                        <div id='AboutIntro'>
                                <div id="banner" className="col-2">
                                        <h1>I am a Interface Designer and Software Developer from Seattle,&nbsp;WA.</h1>
                                        <h2>I design things, then build them. Plain and Simple.</h2>
                                        <h3>Tanner O'Rourke (signature)</h3>
                                </div>
                                <div id='intro-img' className="col-1">
                                        <p>Introductory Image</p>
                                </div>
                        </div>

                        <div id='quote-spacer'>
                                <h4>
                                <i>"Design is the intermediary between information and understanding"</i> - Hans Hoffman
                                </h4>
                        </div>

                        <div id='AboutDetails'>
                                <div className='details-container'>
                                        <h3>Who I am</h3>
                                        <p>
                                        I am a creative-minded Software Developer recently graduated from UC-Boulder
                                        with professional and scholarly experience developing effective user-centric
                                        interfaces from design to launch. Highly skilled at composing exceptional yet
                                        practical software. Incorporates an exquisite proficiency to communicate the
                                        User Experience as part of a team and in my deliverables.
                                        </p>
                                </div>

                                <div className='details-container'>
                                        <h3>What I'm Doing</h3>
                                        <p>
                                        I've recently graduated in the UC-Boulder Class of 2020 with a Bachelors in Computer Science.
                                        I am currently in the Seattle Area working on reimagining my online presence, working on my animations 
                                        skills. I am currently looking for employment in UX/UI Designer and Software Developer roles!
                                        </p>
                                </div>

                                <div className='details-container'>
                                        <h3>Where I'm Going</h3>
                                        <p>
                                        My career goal is to master the art of projecting people's ideas, products, thoughts, sights, and sounds 
                                        into the digital world. While my focus is in Web Development, I have experience working with natural interfaces 
                                        and product design.
                                        </p>
                                </div>
                        </div>   
                </div>
                )
        }
}

export default AboutMe;

