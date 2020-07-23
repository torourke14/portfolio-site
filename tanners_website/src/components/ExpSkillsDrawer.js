import React from 'react';
import './ExpSkillsDrawer.css';

class ExpSkillsDrawer extends React.Component {
        render() {
                return (
                        <div id="Skills" className="panel__Skills">
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