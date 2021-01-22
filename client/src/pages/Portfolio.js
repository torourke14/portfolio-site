import React, { createRef } from 'react';
import './Portfolio.css';
import { findDOMNode } from 'react-dom';
import { Route } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Project Images
import DoMADLogo from '../images/projects/DoMADLogoDark.svg';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import lbsLogo from '../images/projects/lbsLogo.jpg';
import libertyLogo from '../images/projects/libertyLogo.png';

import projectData from '../files/projectData.json';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            headerStyles: {
                position: 'fixed',
                left: '15vw',
                lineHeight: "8rem",
                fontSize: "10vw",
                color: '#eeddaa'
            },
            descriptorStyles: { 
                position: 'relative',
                top: '40%',
                left: '20vw',
                width: '30%',
                fontSize: '1.2vw',
                color: '#eeddaa',
                padding: '0 0 0 20px',
                borderLeft: '2px solid #e0e0e0',
                transform: 'rotate(90deg)',
                transformOrigin: '0% 50%'
            }
        }
        this.page = null;

        this.handlePreviousClick = this.handlePreviousClick.bind(this)
        this.handleNextClick = this.handleNextClick.bind(this)
        this.handleSlideClick = this.handleSlideClick.bind(this)

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
        this.page = findDOMNode(this);
        this.handleScroll();
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        let scrollTrans, scrollPosition;
        const elementTop = this.page.getBoundingClientRect().top;

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
        const elementPos = (docHeight - winHeight);

        scrollPosition = (scrollTop / elementPos) * 50;
        scrollTrans = `translateY(calc(10vh + ${scrollPosition * 0.1}vh))`;

        this.setState(prevState => ({ 
            headerStyles: {
                ...prevState.headerStyles,
                opacity: (elementTop > window.innerHeight/3) ? '0' : '0.8',
                transform: scrollTrans,
                //top: `calc(${scrollPosition * -0.1}vh)`,
                transition: "opacity 1s, transform 300ms linear"
            },
            descriptorStyles: {
                ...prevState.descriptorStyles,
                opacity: (scrollPosition > 0 || elementTop < window.innerHeight * - 0.25) 
                    ? '0.25' : '1',
                transform: (scrollPosition > 0 || elementTop < window.innerHeight * - 0.25) 
                    ? 'rotate(90deg) translateY(100vh)' 
                    : 'rotate(90deg)',
                transition: 'opacity 200ms, transform 250ms ease-out 250ms'
            }
        }));
    }

    handlePreviousClick() {
        const previous = this.state.current - 1
        this.setState({ 
          current: (previous < 0)  
            ? /*this.props.slides.length*/ 4 - 1
            : previous
        })
      }

    handleNextClick() {
        const next = this.state.current + 1;
        this.setState({ 
            current: (next === 4/*this.props.slides.length*/) 
            ? 0
            : next
        })
    }

    handleSlideClick = (index) => {
        console.log('handling');
        if (this.state.current !== index) {
            this.setState({ current: index })
        }
    }

    /*
    {slides.map(project => {
        return (
        <Project
            index={project.index}
            current={current}
            handleSlideClick={this.handleSlideClick}
            title={project.headline}
            position={project.position}
            cardDesc={project.description}
            location={project.location} year={project.year}
            project={project}
            bgsrc={this.domadBG}
        />
        )
    })}
    */

    render() {
        const { current, direction } = this.state
        const { slides, heading } = this.props 
        //const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
        const wrapperTransform = {
          'transform': `translateX(-${current * (100 / 4/*slides.length*/)}%)`
        }

        return (
            <section id="Portfolio" className="panel__Portfolio">
                
                <div className="portfolio-intro" >
                    <p style={this.state.headerStyles}>My&nbsp;Work.</p>

                    <div className="intro-content" style={this.state.descriptorStyles}>
                        <p>A glimpse of my recent<br/><b>freelance & professional work.</b></p>
                    </div>
                </div>
                
                <div className="projects-slider">
                    <ul className="projects-slider__flex-wrap" style={wrapperTransform}>
                    
                        <Project index={0} current={current}
                            handleSlideClick={this.handleSlideClick}
                            title="Donations Make a Difference"
                            position='Lead UI Designer, Front-End Developer'
                            cardDesc='Website design and build for non-profit donation org. DoMAD'
                            location='Boulder, CO' year='2019-2020'
                            bgsrc={this.domadBG} 
                        />
                        <Project index={1} current={current}
                            handleSlideClick={this.handleSlideClick}
                            title="Spotipy Data Analysis" 
                            position='Data Analytics Researcher'
                            cardDesc='Discovered patterns in past, present, and future musical attributes'
                            location='Boulder, CO' year='2018 (Winter)'
                            bgsrc={this.spotipyBG} 
                        />
                        <Project index={2} current={current}
                            handleSlideClick={this.handleSlideClick}
                            title="Liberty Oilfield Services" 
                            position='Software Engineering Intern'
                            cardDesc='Summer Intern'
                            location='Denver, CO' year='2018 (Summer)'
                            bgsrc={this.libertyBG} 
                        />
                        <Project index={3} current={current}
                            handleSlideClick={this.handleSlideClick}
                            title="London Bridge Studios"
                            position='Web Developer'
                            cardDesc='Page flows and SEO enhancements for a Seattle-based recording studio'
                            location='Seattle, WA' year='2019 (Summer)'
                            bgsrc={this.lbsBG}
                        />
                    </ul>
                
                    <nav className="slider-controls">
                        <button className="previous" title='prev' onClick={this.handlePreviousClick}>
                            <span className="icon-wrap">
                                <FontAwesomeIcon icon={faArrowLeft} size='1x' />
                            </span>
                            <h3>Spotipy!</h3>
                        </button>
                        <button className="next" title='next' onClick={this.handleNextClick}>
                            <span className="icon-wrap">
                                <FontAwesomeIcon icon={faArrowRight} size='1x' />
                            </span>
                            <h3>Spotipy!</h3>
                        </button>
                    </nav>
                </div>

                <Route path='/portfolio'>
                    <div className="portfolio-footer">
                        <div>
                            <h2>Still not convinced? Want to talk shop?</h2>
                            <p>
                                I keep a solid menagerie of my conceptual, archived, and miscellaneous work on&nbsp;
                                <span className="underline--magic">
                                    <span className="overlay--magic" data-letters='Github'>Github</span>
                                    <FontAwesomeIcon icon={faGithub} size='2x'/>
                                    .
                                </span>
                            </p>
                        </div>
                    </div>
                </Route>
            </section>
        );
    }
}


class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animate: false,
            show: false,
            projectTransitionStyle: { }
        }
        this.settings = {
            title: props.title,
            position: props.position,
            description: props.cardDesc,
            location: props.location,
            year: props.year,
            bgImg: props.bgsrc
        }
        //this.cardRef
    }
    componentDidMount() {
        window.addEventListener('unload', this.handleUnload);
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

            if (direction) {
                var cardBG = window.getComputedStyle(this.bgRef).backgroundColor;
                this.setState({ 
                    animate: true 
                }, this.setProjectToCard(cardRect, cardBG, direction));
            } else {
                this.setState({ 
                    show: false 
                }, this.setProjectToCard(cardRect, 'transparent', direction));
            }
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
                    /*left: '0',*/
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
        setTimeout(() => {
            this.setState({
                animate: false,
                projectTransitionStyle: {}
            }) 
        }, 1250);
    }

    handleSlideClickToggle = () => {
        console.log(this.props.current, this.props.index);
        if (this.props.current !== this.props.index) {
            this.props.handleSlideClick(this.props.index);
        } else {
            if (!this.state.show) {
                this.animateCard(true);
            } else {
                this.animateCard(false);
            }
        }
    }

    render() {
        //const { src, button, headline, index } = this.props.slide
        const current = this.props.current;
        const index = this.props.index;
        const curClass = (current === index) ? '__current' : '';
        const prvClass = (current - 1 === index) ? '__previous' : '';
        const nxtClass = (current + 1 === index) ? '__next' : '';
        const projectStyle = {
            ...this.state.projectTransitionStyle
        };

        return (
            <li className={`project ${curClass} ${prvClass} ${nxtClass}`} onClick={this.handleSlideClickToggle}>
                <div className={this.state.animate ? 'card-wrapper __animating' : 'card-wrapper'} 
                 ref={el => this.cardRef = el}>
                    <AnimatedCard>
                        <div className="card card-cover" ref={el => this.bgRef = el}>
                            <div className="card-bg-img">
                                {this.settings.bgImg}
                            </div>
                            <div className='mask'>
                                <h2>{this.settings.title}</h2>
                                <h3>{this.settings.position}</h3>
                                <p>{this.settings.description}</p>
                            </div>
                        </div>
                    </AnimatedCard>
                </div>

                <div className={this.state.show ? "project-content open" : "project-content closed"}
                 style={projectStyle}>
                    <div className='contents'>
                        <span className='toggle-project' onClick={this.handleSlideClickToggle}>
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
            </li>
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
            perspective: 2500,
            scale: '1.025',
            speed: '500'
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
                transition: `500ms cubic-bezier(0.25, 0.46, 0.45, 0.84)`
            }
            //cubic-bezier(.03,.98,.52,.99)
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
                overflow: 'hidden',
                transform: `perspective(${this.settings.perspective}px) rotateX(${values.tiltY}deg) rotateY(${values.tiltX}deg) scale(${this.settings.scale}, ${this.settings.scale})`,
                top: `${values.boxShiftY}px`,
                left: `${values.boxShiftX}px`
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
                    transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale(1, 1) translateX(0px) translateY(0px)`,
                    top: '0px',
                    left: '0px'
                }
            }))
        });
    }

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

        const boxShiftX =  ((e.clientX / this.winWidth) - 0.5) * 100;
        const boxShiftY = ((e.clientY / this.winHeight) - 0.5) * 100;
        //const boxShiftX =  e.nativeEvent.clientX - (this.left + Math.floor(this.width / 2));
        //const boxShiftY = e.nativeEvent.clientY - (this.top + Math.floor(this.height / 2))  ;
        console.log(boxShiftX, boxShiftY);
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