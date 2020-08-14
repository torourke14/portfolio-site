import React from 'react';
import './ExpSkillsDrawer.css';

import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';



class ExpSkillsDrawer extends React.Component {
    render() {
        return (
            <div className="Skills_Drawer">
                <div className="Services">
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
                    <div id='services-title'>
                            <div>
                                    <p>My<br/><span>Strengths</span></p>
                            </div>
                    </div>
            </div>

                <SkillTabs />
            </div>
        );
    }
}

class SkillTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = { tabIndex: 0 };

        //this.handleTabChange = this.handleTabChange.bind(this);

        this.defaultTabStyle = {
            transition: "visibility 0s, opacity 0.5s linear",
            transitionDuration: "0.2s", transitionDelay: "0"
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="tabs-component" style={this.defaultTabStyle}>
                <div className='skills-header'>
                    <h2>What you Need to Know</h2>
                    <hr />
                </div>
                <Tabs defaultIndex={1} selectedIndex={this.state.tabIndex} 
                  onSelect={tabIndex => this.setState({ tabIndex })}>
                    
                    <TabList className="tab-headers-flex">
                        <Tab className="skill-tab-header">Development</Tab>
                        <Tab className="skill-tab-header">Design</Tab>
                    </TabList>

                    <TabPanel tabIndex={1}>
                        <SkillTabDev />
                    </TabPanel>

                    <TabPanel tabIndex={2}>
                        <SkillTabDesign />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

class SkillTabDev extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(element) {
        let sibling = document.getElementById(element.target.classList[1]);
        sibling.classList.add("active");
    }

    handleMouseLeave(element) {
        let sibling = document.getElementById(element.target.classList[1]);
        sibling.classList.remove("active");
    }

    render() {
        return (
            <div className="skill-tab">
                <div className="skills-container">
                    <div className="skill-wrapper">
                        <p className="link--animate html/css" data-letters="HTML/CSS"
                         onMouseEnter={(e) => {this.handleMouseEnter(e)}} 
                         onMouseLeave={(e) => {this.handleMouseLeave(e)}}>
                            HTML/CSS
                        </p>
                        <div id="html/css" className="skill-content">
                            <div className="bubble">
                                <p>8+ years<br/>Experience</p>
                            </div>
                            <div className="text">
                                <p>I've been using HTML & CSS since AP Computer Science in high school. I consider myself a wiz.</p>
                            </div>
                        </div>
                    </div>

                    <div className="skill-wrapper">
                        <p className="link--animate react" data-letters="React"
                         onMouseEnter={(e) => {this.handleMouseEnter(e)}} 
                         onMouseLeave={(e) => {this.handleMouseLeave(e)}}>
                            React
                        </p>
                        <div id="react" className="skill-content">
                            <div className="bubble">
                                <p>3+ years<br/>Experience</p>
                            </div>
                            <div className="text">
                                <p>I started using the MERN stack in Full-Stack projects throughout college (its my favorite). While I'm no savant, I can make my way around any problem.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="skill-wrapper">
                        <p className="link--animate javascript" data-letters="JavaScript"
                         onMouseEnter={(e) => {this.handleMouseEnter(e)}} 
                         onMouseLeave={(e) => {this.handleMouseLeave(e)}}>
                            Javascript
                        </p>

                        <div id="javascript" className="skill-content">
                            <div className="bubble">
                                <p>5+ years<br/>Experience</p>
                            </div>
                            <div className="text">
                                <p>In my senior year of high school I built a fraction calculator in Java. I thren tailored the synatical similarities to naster JavaScript. <b>I love animating things.</b></p>
                            </div>
                        </div>
                    </div>

                    <div className="skill-wrapper">
                        <p className="link--animate sql" data-letters="SQL"
                         onMouseEnter={(e) => {this.handleMouseEnter(e)}} 
                         onMouseLeave={(e) => {this.handleMouseLeave(e)}}>
                            SQL
                        </p>

                        <div id="sql" className="skill-content">
                            <div className="bubble">
                                <p>4+ years<br/>Experience</p>
                            </div>
                            <div className="text">
                                <p>I've utilized SQL to query enterprise databases with millions of transactions (See Liberty), as well as integrating with projects throughout college.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class SkillTabDesign extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(element) {
        let sibling = document.getElementById(element.target.classList[1]);
        sibling.classList.add("active");
    }

    handleMouseLeave(element) {
        let sibling = document.getElementById(element.target.classList[1]);
        sibling.classList.remove("active");
    }

    render() {
        return (
            <div className="skill-tab">
                <div className="skills-container">
                    
                    <div className="skill-wrapper">
                        <p className="link--animate interface-design" data-letters="UI Design"
                         onMouseEnter={(e) => {this.handleMouseEnter(e)}} 
                         onMouseLeave={(e) => {this.handleMouseLeave(e)}}>
                            UI Design
                        </p>
                        <div id="interface-design" className="skill-content">
                            <div className="bubble">
                                <p>8+ years<br/>Experience</p>
                            </div>
                            <div className="text">
                                <p>I've been using HTML & CSS since AP Computer Science in high school. I consider myself a wiz.</p>
                            </div>
                        </div>
                    </div>

                    <div className="skill-wrapper">
                        <p className="link--animate wireframing" data-letters="Wireframing"
                         onMouseEnter={(e) => {this.handleMouseEnter(e)}} 
                         onMouseLeave={(e) => {this.handleMouseLeave(e)}}>
                            Wireframing
                        </p>
                        <div id="wireframing" className="skill-content">
                            <div className="bubble">
                                <p>3+ years<br/>Experience</p>
                            </div>
                            <div className="text">
                                <p>I started using the MERN stack in Full-Stack projects throughout college (its my favorite). While I'm no savant, I can make my way around any problem.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="skill-wrapper">
                        <p className="link--animate ideation" data-letters="Ideation"
                         onMouseEnter={(e) => {this.handleMouseEnter(e)}} 
                         onMouseLeave={(e) => {this.handleMouseLeave(e)}}>
                            Ideation
                        </p>

                        <div id="ideation" className="skill-content">
                            <div className="bubble">
                                <p>5+ years<br/>Experience</p>
                            </div>
                            <div className="text">
                                <p>In my senior year of high school I built a fraction calculator in Java. I thren tailored the synatical similarities to naster JavaScript. <b>I love animating things.</b></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ExpSkillsDrawer;