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
            headerStyles: {
                position: 'fixed',
                left: '10vw',
                lineHeight: "6rem",
                fontSize: "6rem",
                color: '#eeddaa',
                height: '100%'
            },
            headerDescStyles: { 
                position: 'relative',
                top: '80%',
                left: '60%',
                width: '30%',
                fontSize: '0.8rem',
                color: '#eeddaa',
                padding: '0 0 0 20px',
                borderLeft: '2px solid #e0e0e0'
            }
        }

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
        const scrollPosition = (scrollTop / windowPos) * 100;
        this.setState(prevState => ({ 
            headerStyles: {
                ...prevState.headerStyles,
                transform: `translateY(calc(${scrollPosition}%))`,
                top: `calc(${(scrollPosition * -0.01) * 20}vh + 75px)`,
                transition: "all 500ms ease-in"
            },
            headerDescStyles : {
                ...prevState.headerDescStyles,
                opacity: (scrollPosition > 2) ? '0.5' : '1',
                transform: (scrollPosition > 2) ? 'translateX(200%)' : 'translateX(0%)',
                transition: (scrollPosition > 2) ? 'all 600ms ease-out 100ms' : 'transform 600ms ease-in 0ms'
            }
        }));
    }

    render() {
        return (
            <section id="Portfolio" className="panel__Portfolio">
                <div className="portfolio-intro" >
                    <p style={this.state.headerStyles}>My Work.</p>

                    <div className="intro-content" style={this.state.headerDescStyles}>
                        <p>A collection of my recent<br/><b>freelance & professional work</b></p>
                    </div>
                </div>
                
                {/*<Route path={`${path}/:1`}/>*/}
                <div className="projects">
                    <Project refID={1} title="Donations Make a Difference"
                        position='Lead UI Designer, Front-End Developer'
                        cardDesc='Website design and build for non-profit donation org. DoMAD'
                        location='Boulder, CO' year='2019-2020'
                        bgsrc={this.domadBG} 
                    />
                    <Project refID={2} title="Spotipy Data Analysis" 
                        position='Data Analytics Researcher'
                        cardDesc='Discovered patterns in past, present, and future musical attributes'
                        location='Boulder, CO' year='2018 (Winter)'
                        bgsrc={this.spotipyBG} 
                    />
                    <Project refID={3} title="Liberty Oilfield Services" 
                        position='Software Engineering Intern'
                        cardDesc='Summer Intern'
                        location='Denver, CO' year='2018 (Summer)'
                        bgsrc={this.libertyBG} 
                    />
                    <Project refID={4} title="London Bridge Studios"
                        position='Web Developer'
                        cardDesc='Page flows and SEO enhancements for a Seattle-based recording studio'
                        location='Seattle, WA' year='2019 (Summer)'
                        bgsrc={this.lbsBG}
                    />
                </div>
                <div className="portfolio-pagination">

                </div>
                <div className="porttfolio-footer">

                </div>
            </section>
        );
    }
}
class Project extends React.Component {
    constructor(props) {
        super(props);

        this.defaultProjectTransitionStyle = {
            backgroundColor: 'transparent',
            top: '0',
            left: '0',
            height: '0',
            width: '0',
            visibility: 'hidden',
            opacity: '0'
        }
        this.state = {
            animate: false,
            show: false,
            projectTransitionStyle: { }
        }
        this.settings = {
            page: props.refID,
            title: props.title,
            position: props.position,
            description: props.desc,
            location: props.location,
            year: props.year,
            bgImg: props.bgsrc
        }
        this.element = null;
    }
    componentDidMount() {
        window.addEventListener('unload', this.handleUnload);
        this.element = findDOMNode(this);
    }
    componentWillUnmount() {
        window.removeEventListener('unload', this.handleUnload);
    }

    handleUnload = () => {
        this.setState({
            show: false,
            cardTransitionStyle: {}
        });
    }
    
    animateCard = (direction) => {
        if (this.cardRef !== undefined) {
            var cardRect = this.cardRef.getBoundingClientRect();
            var cardBG;

            if (direction) {
                cardBG = window.getComputedStyle(this.bgRef).backgroundColor;
                this.setState({ 
                    animate: true 
                }, this.setProjectToCard(cardRect, cardBG, direction));
            } else {
                cardBG = 'transparent'
                this.setState({ 
                    show: false 
                }, this.setProjectToCard(cardRect, cardBG, direction));
            }
        }
    }
    animateCardBack = () => {
        if (this.cardRef !== undefined) {
            var cardRect = this.cardRef.getBoundingClientRect();

            this.setState({ 
                show: false
            }, this.setProjectToCard(cardRect, 'transparent', 'out'));
        }
    }
    setProjectToCard = (cardRect, cardBG, direction) => {
        setTimeout(() => {
            this.setState(prevState => ({
                projectTransitionStyle: {
                    ...prevState.cardTransitionStyle,
                    backgroundColor: cardBG,
                    visibility: 'visible',
                    opacity: '0.25',
                    width: cardRect.width,
                    height: cardRect.height,
                    left: cardRect.left,
                    top: cardRect.top,
                    transition: 'all 500ms ease-in'
                }
            }), (direction)
                ? this.scaleProjectToWindow(cardRect, cardBG)
                : this.scaleProjectToClosed(cardRect, cardBG));
        }, 100);
    }

    scaleProjectToWindow = (cardRect, cardBG) => {
        setTimeout(() => {
            this.setState({ 
                projectTransitionStyle: {
                    backgroundColor: cardBG,
                    visibility: 'visible',
                    opacity: '1',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    minHeight: '100vh',
                    transition: 'all 500ms ease-in',
                }
            })
        }, 1000);
        setTimeout(() => {
            this.setState({
                show: true
            }) 
        }, 1500);
    }

    scaleProjectToClosed = (cardRect, cardBG) => {
        setTimeout(() => {
            this.setState({ 
                projectTransitionStyle: {
                    backgroundColor: cardBG,
                    visibility: 'hidden',
                    opacity: '0',
                    width: '0',
                    height: '0',
                    transition: 'all 500ms ease-in',
                }
            })
        }, 1000);
        console.log('cut it');
        setTimeout(() => {
            this.setState({
                animate: false,
                projectTransitionStyle: {}
            }) 
        }, 1250);
    }
    
    handleToggle = () => {
        if (!this.state.show) {
            this.animateCard(true);
        } else {
            this.animateCard(false);
        }
    }

    render() {
        const projectStyle = {
            ...this.state.projectTransitionStyle
        };
        console.log(projectStyle);
        console.log(this.state.animate);
        return (
            <div className="project-container">
                <div className={(this.state.animate) ? "card-wrapper clicked" : "card-wrapper"} 
                 ref={el => this.cardRef = el}>
                    <AnimatedCard>
                        <div className="card card-cover" ref={el => this.bgRef = el}>
                            <div className="card-bg-img">
                                {this.settings.bgImg}
                            </div>
                            <div className='mask'>
                                <h2>DoMAD</h2>
                                <p>A Donation Database for worldwide travelers.</p>
                                <button className="toggle-card" onClick={this.handleToggle}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </AnimatedCard>
                </div>

                <div className={this.state.show ? "project open" : "project closed"}
                 style={projectStyle}>
                    <div className='project-contents'>
                        <span className='toggle-project' onClick={this.handleToggle}>
                            <FontAwesomeIcon  icon={faTimesCircle} size="2x" />
                        </span>
                        <div className="project-header">                        
                            <div className="titles">
                                <div>
                                    <h5>Role</h5>
                                    <p>{this.settings.position}</p>
                                </div>
                                <div>
                                    <h5>Location</h5>
                                    <p>{this.settings.location}</p>
                                </div>
                                <div>
                                    <h5>Year</h5>
                                    <p>{this.settings.year}</p>
                                </div>
                            </div>
                            <img src={this.settings.bgImg} alt="" />
                        </div>
                        <div className="project-content">
                        <div id='problem' className="content-section">
                            <h3>The Problem</h3>
                            <p></p>
                        </div>
                        <div id='approach' className="content-section">
                            <h3>The Approach</h3>
                            <p></p>
                        </div>
                        <div id='outcome' className="content-section">
                            <h3>The Outcome</h3>
                            <p></p>
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
            max: 20,
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
                left: `${values.boxShiftX}vw`
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
                    top: 'initial',
                    left: 'initial'
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

        const boxShiftX =  ((e.nativeEvent.clientX / this.winWidth) - 1) * 10;
        const boxShiftY = ((e.nativeEvent.clientY / this.winHeightt) - 1) * 10;

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