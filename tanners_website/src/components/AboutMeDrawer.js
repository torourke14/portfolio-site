import React from 'react';
import './AboutMeDrawer.css';

//Icons
import linkedInHero from '../images/LinkedInPic.jpg';
import picFiller from '../images/enchantments.jpg';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';



class AboutMeDrawer extends React.Component {
        
        render() {
                return (
                <div id='About_MeDrawer'>

                        <div className="aboutme-back-button">
                            <Link to='/about'>
                                <FontAwesomeIcon icon={ faTimesCircle } size="2x" />
                            </Link>
                        </div>

                        <div id='AboutDrawer_Intro'>
                                <div id="banner">
                                        <h2>I design. I develop. I create.</h2>
                                        <h3>(signature)</h3>
                                </div>
                                <div className="intro-img-container">
                                        <img src={ linkedInHero } alt="" />
                                </div>
                
                            <div className='AboutDrawer_Details'>
                                <div className='details-column-3'>
                                        <h3>Who I am</h3>
                                        <p>
                                        I am a creative-minded Software Developer recently graduated from UC-Boulder
                                        with professional and scholarly experience developing effective user-centric
                                        interfaces from design to launch. Highly skilled at composing exceptional yet
                                        practical software. Incorporates an exquisite proficiency to communicate the
                                        User Experience as part of a team and in my deliverables.
                                        </p>
                                </div>
                                <div className='details-column-3'>
                                        <h3>What I'm Doing</h3>
                                        <p>
                                        I've recently graduated in the UC-Boulder Class of 2020 with a Bachelors in Computer Science.
                                        I am currently in the Seattle Area working on reimagining my online presence, working on my animations 
                                        skills. I am currently looking for employment in UX/UI Designer and Software Developer roles!
                                        </p>
                                </div>
                                <div className='details-column-3'>
                                        <h3>Where I'm Going</h3>
                                        <p>
                                        My career goal is to master the art of projecting people's ideas, products, thoughts, sights, and sounds 
                                        into the digital world. While my focus is in Web Development, I love to work with the likes of natural interfaces 
                                        and product design.
                                        </p>
                                </div>
                            </div>   

                            <div id='img-spacer'>
                                <div id="img-spacer-container">
                                    <h4>
                                    <i>"If you're reading this, I got your attention."</i> - Me
                                    </h4>
                                    <div className="spacer-img-overlay">
                                        <div className="img-overlay">
                                            <img src={picFiller} alt="" height="200px" width="200px"/>
                                        </div>
                                        <div className="img-overlay">
                                            <img src={picFiller} alt="" height="200px" width="200px"/>
                                        </div>
                                        <div className="img-overlay">
                                            <img src={picFiller} alt="" height="200px" width="200px"/>
                                        </div>
                                        <div className="img-overlay">
                                            <img src={picFiller} alt="" height="200px" width="200px"/>
                                        </div>
                                        <div className="img-overlay">
                                            <img src={picFiller} alt="" height="200px" width="200px"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='AboutDrawer_Details'>
                                <div className='details-col-2'>
                                        <h3>History</h3>
                                        <ul>
                                            <li>University of Colorado Boulder
                                                <ul>
                                                    <li>Bachelor of Science in Computer Science</li>
                                                </ul>
                                            </li>
                                            <li>Liberty Oil Services, Software Engineer Intern</li>
                                            <li>London Bridge Studios, Technical Consultant</li>
                                        </ul>

                                        <ul>
                                            <li>Google Cloud Platform Student Innovator Summit, 2018</li>
                                            <li>HackCU Events (UC-Boulder sponsored)</li>
                                            <li>Hackathons inn the Denver Area</li>
                                            <li>Behind a Text Editor</li>
                                        </ul>
                                </div>
                                <div className='details-col-2'>
                                    <h3>Where you may have seen me</h3>
                                    <p>fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddd</p>
                                        <ul>
                                            <li>Google Cloud Platform Student Innovator Summit, 2018</li>
                                            <li>HackCU Events (UC-Boulder sponsored)</li>
                                            <li>Hackathons inn the Denver Area</li>
                                            <li>Behind a Text Editor</li>
                                        </ul>
                                </div>
                            </div>   



                        </div>
                </div>
                )
        }
}

export default AboutMeDrawer;

