import React from 'react';
import './Portfolio.css';

// Project Images
import DoMADLogo from '../images/projects/DoMADLogoDark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";



class Portfolio extends React.Component {
        constructor(props) {
                super(props);

                this.projectRef = React.createRef();

                this.positionOnMouseMove = this.positionOnMouseMove.bind(this);
        }

        componentDidMount() {
            window.addEventListener("mousemove", this.positionOnMouseMove);
        }

        positionOnMouseMove = e => {
            const projects = this.projectRef.current;
            console.log(projects);
            let relX = e.offsetX / window.innerWidth;
            let relY = e.offsetY / window.innerHeight;

            //this.refs.projectRef.
            //current.style.margin = relX + "vh";
            //console.log(relX, relY);
        };

        /* MAYBE add function to show active open project */
        render() {
                return (
                        <section id="Portfolio" className="panel__Portfolio">         
                            <div className="portfolio-header">
                                My Work.
                            </div>
                                <Project ref={this.projectRef}
                                    title="DoMAD" position='Lead UI Designer, Front-End Developer' 
                                    desc='Website design and build for non-profit donation org. DoMAD' 
                                    location='Boulder, CO'
                                    imgsrc={DoMADLogo} />
                                <Project ref={this.projectRef}
                                    title="Spotipy Data Analysis" position='Data Analytics Researcher' 
                                    desc='Discovered patterns in past, present, and future musical attributes' 
                                    location='Boulder, CO'
                                    imgsrc={DoMADLogo} />
                                <Project ref={this.projectRef}
                                    title="London Bridge Studios"
                                    position='Web Developer' 
                                    desc='Page flows and SEO enhancements for a Seattle-based recording studio' 
                                    location='Seattle, WA'
                                    imgsrc={DoMADLogo} />
                        </section>
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
            x = document.getElementsByClassName("work-dropbox--open");
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
            borderRadius: '4px',
            width: '100%',
            background: '#EBEBEB',
            display: this.state.display ? 'block' : 'none'
        }

        //console.log(document.getElementsByClassName('work-dropbox--open') !== null);
        return (
            <div className="project-container">
                <div className="entry entry-cover" >
                    <img src={DoMADLogo} alt="logo" />
                    <div className='mask'>
                        <h2>DoMAD</h2>
                        <p>A Donation Database for worldwide travelers.</p>
                        <p><a href="#" className='info' onClick={(e) => this.openTab(e)}>Read More</a></p>
                    </div>
                </div>
                <div className="project-detail">

                </div>
                <div className={this.state.display ? "entry-dropbox--open" : "entry-dropbox--closed"} style={this.styles} >
                    <div className="content-bg">
                        <div className="content">
                            <div className="header">
                                <div><h4>{this.state.title}</h4></div>
                                <div className="detail">
                                    <h5>Position</h5>
                                    <h6>{this.state.position}</h6>
                                </div>
                                <div className="detail">
                                    <h5>Location</h5>
                                    <h6>{this.state.location}</h6>
                                </div>
                                <div className="detail">
                                    <h5>Year</h5>
                                    <h6>2020</h6>
                                </div>
                                <span className="closebtn" onClick={() => this.closeTab()}>
                                    <FontAwesomeIcon icon={faTimesCircle}/>
                                </span>
                            </div>
                            <div className="problem">
                                <div className="section-title"><h3>The Problem</h3></div>
                            </div>
                            <div className="approach">
                            <div className="section-title"><h3>The Approach</h3></div>
                            </div>
                            <div className="outcome">
                                <div className="section-title"><h3>The Outcome</h3></div>
                            </div>
                        </div>
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

export default Portfolio;