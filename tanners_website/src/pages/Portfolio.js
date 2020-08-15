import React, { createRef } from 'react';
import './Portfolio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findDOMNode } from 'react-dom';

// Project Images
import DoMADLogo from '../images/projects/DoMADLogoDark.svg';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import lbsLogo from '../images/projects/lbsLogo.jpg';
import libertyLogo from '../images/projects/libertyLogo.png';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";


class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollProgress: 0
        }
        this.scrollPosition = null;
        this.headerElement = null;
        this.headerRef = createRef();

        //!!! Change to ProjectInfo.js MAPPING !!!
        this.domadBG = <img src={DoMADLogo} alt="DoMAD" />;
        this.spotipyBG = <div id="spt">
            <FontAwesomeIcon icon={faSpotify} size="8x" />
            <h1>(Spotipy API - Freelance)</h1>
        </div>;
        this.libertyBG = <img src={libertyLogo} alt="Liberty Oil Services" />
        this.lbsBG = <img src={lbsLogo} alt="London Bridge Studios" />;
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("mousemove", this.handleMouseMove);
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const scrollTop = Math.max(
            window.pageYOffset, 
            document.documentElement.scrollTop
        );
        const winHeight = window.innerHeight;
        const docHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        const windowPos = docHeight - winHeight;
        
        this.scrollPosition = (scrollTop / windowPos) * 100;

        console.log(this.scrollPosition);

        this.setState({ scrollProgress: this.scrollPosition });
    }

    render() {
        const headStyles = {
            height: "100%",
            transition: "top 1000ms ease",
            transform: `translateY(calc(${this.state.scrollProgress}%))`,
            lineHeight: "6rem",
            fontSize: "6rem"
        }
        return (
            <section id="Portfolio" className="panel__Portfolio">
                <div className="portfolio-header" >
                    <p style={headStyles} >My Work.</p>
                </div>
                <div className="projects">
                    <Project ref={this.projectsRef}
                        title="Donations Make a Difference"
                        position='Lead UI Designer, Front-End Developer'
                        cardDesc='Website design and build for non-profit donation org. DoMAD'
                        location='Boulder, CO'
                        bgsrc={this.domadBG} />
                    <Project ref={this.projectsRef}
                        title="Spotipy Data Analysis" position='Data Analytics Researcher'
                        cardDesc='Discovered patterns in past, present, and future musical attributes'
                        location='Boulder, CO'
                        bgsrc={this.spotipyBG} />
                    <Project ref={this.projectsRef}
                        title="Liberty Oilfield Services" position='Software Engineering Intern'
                        cardDesc='Summer Intern'
                        location='Denver, CO'
                        bgsrc={this.libertyBG} />
                    <Project ref={this.projectsRef}
                        title="London Bridge Studios"
                        position='Web Developer'
                        cardDesc='Page flows and SEO enhancements for a Seattle-based recording studio'
                        location='Seattle, WA'
                        bgsrc={this.lbsBG} />
                </div>
                <div className="project-pagination-container">

                </div>
            </section>
        );
    }
}

//class WorksControl extends React.Component

class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false,
        }
        
        this.settings = {
            title: props.title,
            position: props.position,
            description: props.desc,
            location: props.location,
            bg: props.bgsrc,
        }

        this.openTab = this.openTab.bind(this);
        this.closeTab = this.closeTab.bind(this);
    }

    /*componentDidMount() {
        this.element = findDOMNode(this);
    }
    componentWillUnmount() {
    }
    */

    openTab() {
        if (!this.settings.display && document.getElementsByClassName('work-dropbox--open').length === 0) { //{
            var i, x;
            x = document.getElementsByClassName("work-dropbox--open");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            this.setState({ display: true });
            //console.log(document.getElementsByClassName('work-dropbox--open') !== null);
        }
    }
    closeTab() {
        this.setState({ display: false });
    }

    render() {
        let displayStyles = {
            borderRadius: '4px',
            width: '100%',
            background: '#EBEBEB',
            display: this.state.display ? 'block' : 'none',
            transition: 'ease cubic-bezier(.03,.98,.52,.99)'
        }

        return (
            <div className="project-container" /*onMouse={this.handleMouseMove}*/>
                <AnimatedCard>
                    <div className="entry entry-cover" /*style={overlayStyles}*/>
                        <div className="entry-bg-wrap">
                            {this.settings.bg}
                        </div>
                        <div className='mask'>
                            <h2>DoMAD</h2>
                            <p>A Donation Database for worldwide travelers.</p>
                            <button className='info' onClick={(e) => this.openTab(e)}>Read More</button>
                        </div>
                    </div>
                </AnimatedCard>
                <div className="project-detail">

                </div>
                <div className={this.state.display ? "entry-dropbox--open" : "entry-dropbox--closed"} style={displayStyles} >
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
                                    <FontAwesomeIcon icon={faTimesCircle} />
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


/*
* --- Animate Card --------------------------------
*
* Includes:
*   -   An EVENT listener that shifts the containing card 
*       relative to the mouses's window position.
    -   event HANDLERS for mouse enter, move, and leave 
        of a card for 3d perspective animatuons
*/
class AnimatedCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardStyle: { }
        }
        this.settings = {
            max: 35,
            perspective: 1250,
            scale: '1.1',
            speed: '1000'
        }
        this.width = null
        this.height = null
        this.left = null
        this.top = null
        this.winWidth = null
        this.winHeight = null

        this.transitionTimeout = null
        this.updateCall = null
        this.element = null

        this.handleMouseEnter = this.handleMouseEnter.bind(this, this.props.handleMouseEnter)
        this.handleMouseMove = this.handleMouseMove.bind(this, this.props.handleMouseMove)
        this.handleMouseLeave = this.handleMouseLeave.bind(this, this.props.handleMouseLeave)
    }

    componentDidMount() {
        this.element = findDOMNode(this);
    }
    componentWillUnmount() {
        clearTimeout(this.transitionTimeout);
        cancelAnimationFrame(this.updateCall);
    }

    handleMouseEnter(cb = () => { }, e) {
        this.updateElementPosition();
        this.setTransition();
        return cb(e);
    }
    //
    setTransition() {
        clearTimeout(this.transitionTimeout);
        this.setState(prevState => ({
            cardStyle: {
                ...prevState.cardStyle,
                transition: `1000ms cubic-bezier(.03,.98,.52,.99)`
            }
        }));
        this.transitionTimeout = setTimeout(() => {
            this.setState(prevState => ({
                cardStyle: {
                    ...prevState.cardStyle,
                    transition: ''
                }
            }));
        }, this.settings.speed);
    }

    handleMouseMove(cb = () => { }, e) {
        e.persist();
        if (this.updateCall !== null) {
            window.cancelAnimationFrame(this.updateCall);
        }
        this.event = e;
        this.updateCall = requestAnimationFrame(this.update.bind(this, e));
        return cb(e);
    }
    update(e) {
        const values = this.getValues(e);
        this.setState(prevState => ({
            cardStyle: {
                ...prevState.cardStyle,
                position: "relative",
                transform: `perspective(${this.settings.perspective}px) rotateX(${values.tiltY}deg) rotateY(${values.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`,
                top: `${values.boxShiftY}vh`,
                left: `${values.boxShiftX}vw`,
                opacity: '1'
            }
        }));
        this.updateCall = null;
    }

    handleMouseLeave(cb = () => { }, e) {
        this.setTransition();
        this.reset();
        return cb(e);
    }
    reset() {
        window.requestAnimationFrame(() => {
            this.setState(prevState => ({
                cardStyle: {
                    ...prevState.cardStyle,
                    transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateX(0px) translateY(0px)`,
                    opacity: '0.85'
                }
            }))
        });
    }

//translateX(${values.boxShiftX}vw) translateY(${values.boxShiftY}vh)

    updateElementPosition() {
        const rect = this.element.getBoundingClientRect();
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.left = rect.left;
        this.top = rect.top;
        this.winWidth = window.innerWidth;
        this.winHeight = window.innerHeight;
    }
    getValues(e) {
        const x = (e.nativeEvent.clientX - this.left) / this.width;
        const y = (e.nativeEvent.clientY - this.top) / this.height;
        const _x = Math.min(Math.max(x, 0), 1);
        const _y = Math.min(Math.max(y, 0), 1);
        const tiltX = (this.settings.max / 2 - _x * this.settings.max).toFixed(2);
        const tiltY = (_y * this.settings.max - this.settings.max / 2).toFixed(2);

        const boxShiftX =  ((e.nativeEvent.clientX / this.winWidth) - 0.5) * 10;
        const boxShiftY = ((e.nativeEvent.clientY / this.winHeightt) - 0.5) * 10;

        return {
            tiltX,
            tiltY,
            boxShiftX,
            boxShiftY
        };
    }

    render() {
        const card_style = {
            ...this.state.cardStyle
        };
        return (
            <div style={card_style}
             onMouseEnter={this.handleMouseEnter}
             onMouseMove={this.handleMouseMove}
             onMouseLeave={this.handleMouseLeave}>
                {this.props.children}
            </div>
        );
    }
}

export default Portfolio;