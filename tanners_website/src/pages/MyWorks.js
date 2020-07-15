import React from 'react';
import './MyWorks.css';

// Project Images
import DoMADLogo from '../images/projects/DoMADLogoDark.svg';
import { render } from '@testing-library/react';

class MyWorks extends React.Component {
        constructor(props) {
                super(props);
                this.filters = ['design', 'dev', 'freelance', 'professional'];
        }
        render() {
                return (
                        <div id="WorksMaster">   
                                <div id="KnowledgeIntro" className="container">
                                        <div id='knowledge-content'className='col-2'>
                                                <h2>Knowledge</h2>
                                                <div id='Skills'>
                                                        <div className="knowledge-box">
                                                                <div className="skill-header">
                                                                        <img/>
                                                                        <h4>Web Development</h4>
                                                                </div>
                                                                <p>
                                                                I have proven experience building websites from the 
                                                                ground-up utilizing various development stacks
                                                                </p>
                                                        </div>
                                                        <div className="knowledge-box">
                                                                <div className="skill-img">
                                                                        <img />
                                                                        <h4>UX/UI Design</h4>
                                                                </div>
                                                                <p>
                                                                
                                                                </p> 
                                                        </div>
                                                
                                                        <div className="knowledge-box">
                                                                <div className="skill-img">
                                                                        <img />
                                                                        <h4>App Development</h4>
                                                                </div>
                                                                <p>
                                                                
                                                                </p> 
                                                        </div>
                                                        <div className="knowledge-box">
                                                                <div className="skill-img">
                                                                        <img />
                                                                        <h4>Full-Stack Development</h4>
                                                                </div>
                                                                <p>
                                                                
                                                                </p> 
                                                        </div>
                                                
                                                        <div className="knowledge-box">
                                                                <div className="skill-img">
                                                                        <img />
                                                                        <h4>Analytics</h4>
                                                                </div>
                                                                <p>
                                                                
                                                                </p> 
                                                        </div>
                                                        <div className="knowledge-box">
                                                                <div className="skill-img">
                                                                        <img />
                                                                        <h4>Human-Computer Interaction</h4>
                                                                </div>
                                                                <p>
                                                                
                                                                </p> 
                                                        </div>
                                                </div>
                                        </div>
                                        <div id='Knowledge-right' className="col-1">
                                                <div id="knowledge-title">
                                                        <p>My<br/><span>Services</span></p>
                                                </div>
                                        </div>
                                </div>

                                <div className="Works">
                                        <div className="works-row">
                                                <div className="entry entry-cover" onClick={(e) => this.refs.domad.openTab(e)}>
                                                        <img src={DoMADLogo} alt="" />
                                                        <div className='mask'>
                                                                <h2>DoMAD</h2>
                                                                <p>A Donation Database for worldwide travelers.</p>
                                                                <p><a href="#" className='info'>Read More</a></p>
                                                        </div>
                                                </div>
                                                <div className="entry entry-cover" onClick={(e) => this.refs.lbs.openTab(e)}>
                                                        <img src={DoMADLogo} alt="" />
                                                        <div className='mask'>
                                                                <h2>DoMAD</h2>
                                                                <p>A Donation Database for worldwide travelers.</p>
                                                                <p><a href="#" className='info'>Read More</a></p>
                                                        </div>
                                                </div>

                                                <div className="entry entry-cover" onClick={(e) => this.refs.spotipy.openTab(e)}>
                                                        <img src={DoMADLogo} alt="" />
                                                        <div className='mask'>
                                                                <h2>DoMAD</h2>
                                                                <p>A Donation Database for worldwide travelers.</p>
                                                                <p><a href="#" className='info'>Read More</a></p>
                                                        </div>
                                                </div>
                                                                                                        
                                                <Project ref='domad' tags={['design', 'dev', 'professional']}
                                                title="DoMAD" position='Lead UI Designer, Front-End Developer' 
                                                desc='Website design and build for non-profit donation org. DoMAD' 
                                                location='Boulder, CO'
                                                imgsrc={DoMADLogo} />
                                                <Project ref='lbs' tags={['dev', 'freelance']}
                                                title="London Bridge Studios" position='Web Developer' 
                                                desc='Page flows and SEO enhancements for a Seattle-based recording studio' 
                                                location='Seattle, WA'
                                                imgsrc={DoMADLogo}  />
                                                <Project ref='spotipy' tags={['dev', 'freelance']}
                                                title="Spotipy Data Analysis" position='Data Analytics Researcher' 
                                                desc='Discovered patterns in past, present, and future musical attributes' 
                                                location='Boulder, CO'
                                                imgsrc={DoMADLogo} />
                                        </div>
                                        <div className="works-row">
                                                <div className="entry entry-cover" onClick={(e) => this.refs.d.openTab(e)}>
                                                        <img src={DoMADLogo} alt="" />
                                                        <div className='mask'>
                                                                <h2>DoMAD</h2>
                                                                <p>A Donation Database for worldwide travelers.</p>
                                                                <p><a href="#" className='info'>Read More</a></p>
                                                        </div>
                                                </div>
                                                <div className="entry entry-cover" onClick={(e) => this.refs.l.openTab(e)}>
                                                        <img src={DoMADLogo} alt="" />
                                                        <div className='mask'>
                                                                <h2>DoMAD</h2>
                                                                <p>A Donation Database for worldwide travelers.</p>
                                                                <p><a href="#" className='info'>Read More</a></p>
                                                        </div>
                                                </div>

                                                <div className="entry entry-cover" onClick={(e) => this.refs.s.openTab(e)}>
                                                        <img src={DoMADLogo} alt="" />
                                                        <div className='mask'>
                                                                <h2>DoMAD</h2>
                                                                <p>A Donation Database for worldwide travelers.</p>
                                                                <p><a href="#" className='info'>Read More</a></p>
                                                        </div>
                                                </div>
                                                
                                                <Project ref='d' title="DoMAD" tags={['dev','freelance']}
                                                position='Lead UI Designer, Front-End Developer' 
                                                desc='Website design and build for non-profit donation org. DoMAD' 
                                                location='Boulder, CO'
                                                imgsrc={DoMADLogo} />
                                                <Project ref='l' title="London Bridge Studios" tags={['dev','freelance']}
                                                position='Web Developer' 
                                                desc='Page flows and SEO enhancements for a Seattle-based recording studio' 
                                                location='Seattle, WA'
                                                imgsrc={DoMADLogo} />
                                                <Project ref='s' title="Spotipy Data Analysis" tags={['dev','freelance']}
                                                position='Data Analytics Researcher' 
                                                desc='Discovered patterns in past, present, and future musical attributes' 
                                                location='Boulder, CO'
                                                imgsrc={DoMADLogo} />
                                        </div>
                                </div>

                                <div id="SkillsIntro" className="container">
                                        <div className='col-1'>
                                                <div id="skills-title">
                                                        <p>My<br/><span>Skills</span></p>
                                                </div>
                                        </div>
                                        <div id="my-skills-content" className='col-2'>
                                                <h2>What you Need to Know</h2>

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
                        </div>
                );
        }
}

//class WorksControl extends React.Component

class Project extends React.Component {
        constructor(props) {
                super(props);
                
                this.state = {
                        title: props.title,
                        position: props.position,
                        description: props.desc,
                        location: props.location,
                        image: props.imgsrc,
                        display: false
                }
                this.openTab = this.openTab.bind(this);
                this.closeTab = this.closeTab.bind(this);
        }

        openTab() {
                if (!this.state.display && document.getElementsByClassName('work-dropbox--open').length === 0) { //{
                        var i, x;
                        x = document.getElementsByClassName("work-dropbox");
                        for (i = 0; i < x.length; i++) {
                                x[i].style.display = "none";
                        }
                        this.setState({display: true});
                }
        } 

        closeTab() {
                this.setState({display: false});
        }

        render() {
                this.styles = {
                        border: '2px solid #333',
                        borderRadius: '4px',
                        width: '100%',
                        background: '#EBEBEB',
                        display: this.state.display ? 'block' : 'none'
                }
                //console.log(document.getElementsByClassName('work-dropbox--open') !== null);
                /* <img src={this.state.image} alt='' style={{width: "50px", height: "50px"}}/>*.
                /* Chamge into inherited subclasses of Project, i.e. Project.type - Project.Design */
                return (
                        <div className={this.state.display ? "work-dropbox--open" : "work-dropbox--closed"}
                        style={this.styles} >
                                <div className="content">
                                        <span onClick={() => this.closeTab()} className="closebtn">X</span>
                                        <div>
                                                <p>{this.state.title}</p>
                                                <h4>{this.state.position}</h4>
                                                <h4>{this.state.location}</h4>
                                                <p>{this.state.description}</p>
                                        </div>
                                </div>
                        </div>
                );
        }
}





class ToTopBtn extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {
                show: false,
                scrollInterval: 0
            };
            this.handleScroll = this.handleScroll.bind(this);
            this.scrollToTop = this.scrollToTop.bind(this);
        }
    
        /* -- componentDidMount ----
            - Description: Member function called on page load and re-render, invokes an initial
                        handle of page position and adds scroll event listener.
        */
        componentDidMount() {
            this.handleScroll();
            window.addEventListener('scroll', this.handleScroll);
        }
        componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    
        /* -- handleScroll --->
            - Description: Determines button render state based on pageYoffset value
            - Parameters: none
            - Returns: T/F button show state
        */
        handleScroll() {
            if (window.pageYOffset > 100) {
                if (!this.state.show) {
                    //this.props.style.display = "block";
                    this.setState({show: true });
                }
            } else {
                if (this.state.show) {
                    //this.props.style.display = "none";
                    this.setState({show: false });
                }
            }
        }
    
        /* -- SendCountryOnSelect ---
            - Description: Initiate scrolling the document to top on button click
            - Parameters: none
            - Returns: new interval state for next scroll step
        */
        scrollToTop() { 
            let interval = setInterval(this.scrollStep.bind(this), this.props.returnstepinms);
            this.setState({ scrollInterval: interval});
        }
    
        /* -- scrollStep ---
            - Description: Creates a dynamic scroll effect as part of scrollToTop() 
                        by scrolling X pixels every Y milliseconds 
            - Parameters: none
            - Returns: scrolls window up
        */
        scrollStep() {
            if (window.pageYOffset === 0) {
                clearInterval(this.state.scrollInterval);
            }
            window.scroll(0, window.pageYOffset - this.props.returnstepinpx);
        }
    
        render () {
            let defaultStyles = {
                position: "fixed", 
                bottom: "75px", right: "10px",
                padding: "12px",
                zIndex: "98", /*--make sure theres no overlap */
                outline: "none",
                border: "none", borderRadius: "6px",
                backgroundColor: "#CBB95A",
                fontSize: "0.9em", 
                color: "black",
                cursor: "pointer", 
                
                display: "block", /* toggling display doesnt allow for animation */
                opacity: (this.state.show ? 1 : 0),
                visibility: (this.state.show ? 'visible' : 'hidden'),
                transition: "visibility 0s, opacity 0.5s linear",
                transitionDuration: "0.2s", transitionDelay: "0"
            }
            
            return (
                <div>
                    <button id='new-search-btn' style={defaultStyles}
                        onClick={ () => {this.scrollToTop()}}>To Top</button>
                </div>
            )
        }
    }

export default MyWorks;