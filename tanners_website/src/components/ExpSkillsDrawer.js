import React from 'react';
import './ExpSkillsDrawer.css';

import FloatingNav from './FloatingNav';



class ExpSkillsDrawer extends React.Component {
        render() {
                return (
                        <div id="Skills" className="panel__Skills">
                            <div id="About_DrawerServices" className="container">
                                <div id='services-content'>
                                        <h2>Knowledge</h2>
                                        <div id='skill-blocks'>
                                                <div className="skill-box">
                                                        <div className="skill-header">
                                                                <img/>
                                                                <h4>Web Development</h4>
                                                        </div>
                                                        <p>
                                                        I have proven experience building websites from the 
                                                        ground-up utilizing various development stacks
                                                        </p>
                                                </div>
                                                <div className="skill-box">
                                                        <div className="skill-img">
                                                                <img />
                                                                <h4>UX/UI Design</h4>
                                                        </div>
                                                        <p>
                                                        </p> 
                                                </div>
                                                <div className="skill-box">
                                                        <div className="skill-img">
                                                                <img />
                                                                <h4>App Development</h4>
                                                        </div>
                                                        <p>
                                                        </p> 
                                                </div>
                                                <div className="skill-box">
                                                        <div className="skill-img">
                                                                <img />
                                                                <h4>Full-Stack Development</h4>
                                                        </div>
                                                        <p>
                                                        </p> 
                                                </div>
                                                <div className="skill-box">
                                                        <div className="skill-img">
                                                                <img />
                                                                <h4>Analytics</h4>
                                                        </div>
                                                        <p>
                                                        </p> 
                                                </div>
                                                <div className="skill-box">
                                                        <div className="skill-img">
                                                                <img />
                                                                <h4>Human-Computer Interaction</h4>
                                                        </div>
                                                        <p>
                                                        </p> 
                                                </div>
                                        </div>
                                </div>
                                <div id='services-right'>
                                        <div id="title">
                                                <p>My<br/><span>Services</span></p>
                                        </div>
                                </div>
                        </div>

                        <div className='col-1'>
                                <div id="skills-title">
                                        <p>My<br/><span>Skills</span></p>
                                </div>
                        </div>
                        <div id="skills-content" className='col-2'>
                            <div className='skills-header'>
                                    <h2>What you Need to Know</h2>
                                    <hr id='title-hr' className='header-hr' />
                                    <h4>Development</h4>
                                    <hr className='header-hr' />
                            </div>

                            <div className="skill-bar">
                                    <p>HTML/CSS</p>
                                    <div className="bar">
                                            <div id='html'>95%</div>
                                    </div>
                            </div>
                            <div className="skill-bar">
                                    <p>JavaScript</p>
                                    <div className="bar">
                                            <div id='js'>80%</div>
                                    </div>
                            </div>
                            <div className="skill-bar">
                                    <p>ReactJS</p>
                                    <div className="bar">
                                            <div id='react'>85%</div>
                                    </div>
                            </div>
                            <div className="skill-bar">
                                    <p>Python</p>
                                    <div className="bar">
                                            <div id='python'>70%</div>
                                    </div>
                            </div>
                            <div className='skills-header'>
                                    <h4>Design</h4>
                                    <hr className='header-hr' />
                            </div>
                            <div className="skill-bar">
                                    <p>Prototyping</p>
                                    <div className="bar">
                                            <div id='prototyping'>70%</div>
                                    </div>
                            </div>
                            <div className="skill-bar">
                                    <p>Illustrator / Figma</p>
                                    <div className="bar">
                                            <div id='illustrator-figma'>75%</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                )
        }
}

export default ExpSkillsDrawer;