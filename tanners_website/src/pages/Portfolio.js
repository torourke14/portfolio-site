import React from 'react';
import './Portfolio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findDOMNode } from 'react-dom';

// Project Images
import DoMADLogo from '../images/projects/DoMADLogoDark.svg';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import lbsLogo from '../images/projects/lbsLogo.jpg';
import libertyLogo from '../images/projects/libertyLogo.png';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import FloatingNav from '../components/FloatingNav';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.projectRef = React.createRef();

        this.element = null;

        this.domadBG = <img src={DoMADLogo} alt="DoMAD"/>;
        this.spotipyBG = <div id="spt">
                            <FontAwesomeIcon icon={faSpotify} size="8x" />
                            <h1>(Spotipy API - Freelance)</h1>
                        </div>;
        this.libertyBG = <img src={libertyLogo} alt="Liberty Oil Services" />
        this.lbsBG = <img src={lbsLogo} alt="London Bridge Studios" />;
    
    }

    componentDidMount() {
        this.element = findDOMNode(this);
        //window.addEventListener("scroll", )
    }
    /* MAYBE add function to show active open project */
    render() {
        // move header X% of document vh
        let headerStyle = {
            top: window.scrollTop + "px" // / this.element.scrollHeight) * 100) + "vh"
        }
        return (
            <section id="Portfolio" className="panel__Portfolio">   
                <div className="portfolio-header" styles={headerStyle}>
                    My Work.
                </div>
                <div className="projects">
                    <Project ref={this.projectRef}
                        title="Donations Make a Difference" 
                        position='Lead UI Designer, Front-End Developer' 
                        cardDesc='Website design and build for non-profit donation org. DoMAD' 
                        location='Boulder, CO'
                        bgsrc={this.domadBG} />
                    <Project ref={this.projectRef}
                        title="Spotipy Data Analysis" position='Data Analytics Researcher' 
                        cardDesc='Discovered patterns in past, present, and future musical attributes' 
                        location='Boulder, CO'
                        bgsrc={this.spotipyBG} />
                    <Project ref={this.projectRef}
                        title="Liberty Oilfield Services" position='Software Engineering Intern' 
                        cardDesc='Summer Intern' 
                        location='Denver, CO'
                        bgsrc={this.libertyBG} />
                    <Project ref={this.projectRef}
                        title="London Bridge Studios"
                        position='Web Developer' 
                        cardDesc='Page flows and SEO enhancements for a Seattle-based recording studio' 
                        location='Seattle, WA'
                        bgsrc={this.lbsBG} />
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
            overlayOffsetX: "5%",
            overlayOffsetY: "5%"
        }
        this.settings = {
            title: props.title,
            position: props.position,
            description: props.desc,
            location: props.location,
            bg: props.bgsrc,
        }
        this.element = null;
        this.width = null;
        this.height = null;
        this.top = null;
        this.left = null;

        this.openTab = this.openTab.bind(this);
        this.closeTab = this.closeTab.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    componentDidMount() {
        window.addEventListener("mousemove", this.handleMouseMove);
        this.element = findDOMNode(this);
    }
    
    handleMouseMove = e => {
        //setInterval, 10ms

        //const box = this.element.getBoundingClientRect();
        this.width = null;
        this.height = null;
        this.top = null;
        this.left = null;

        /*setInterval(() => {
            let relX = (((e.pageX / window.innerWidth) - 0.5) * 5);
            let relY = (((e.pageY / window.innerHeight) - 0.5) * 5);  

            this.setState({
                overlayOffsetX: relX + "%",
                overlayOffsetY: relY + "%"
            });
        }, 1)*/
        
        //this.refs.projectRef.
        //current.style.margin = relX + "vh";
 //console.log(relX, relY);
    };

    openTab() {
        if (!this.settings.display && document.getElementsByClassName('work-dropbox--open').length === 0) { //{
            var i, x;
            x = document.getElementsByClassName("work-dropbox--open");
            for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
            }
            this.setState({display: true});
            //console.log(document.getElementsByClassName('work-dropbox--open') !== null);
        }
    } 

    closeTab() {
        this.setState({display: false});
    }

    render() {
        let displayStyles = {
            borderRadius: '4px',
            width: '100%',
            background: '#EBEBEB',
            display: this.state.display ? 'block' : 'none'
        }

        let overlayStyles ={
            transform: "translate("+this.state.overlayOffsetX+","+this.state.overlayOffsetY+")"
        }

        return (
            <div className="project-container" /*onMouse={this.handleMouseMove}*/>
                <TiltyCard>
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
                </TiltyCard>
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


class TiltyCard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        style: {}
      }
      const defaultSettings = {
        max: 35,
        perspective: 1000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        scale: '1.1',
        speed: '1000',
        transition: true,
        axis: null,
        reset: true
      }
      this.width = null
      this.height = null
      this.left = null
      this.top = null
      this.transitionTimeout = null
      this.updateCall = null
      this.element = null
      this.settings = {
        ...defaultSettings,
        ...this.props.options,
      }
      this.handleMouseEnter = this.handleMouseEnter.bind(this, this.props.handleMouseEnter)
      this.handleMouseMove = this.handleMouseMove.bind(this, this.props.handleMouseMove)
      this.handleMouseLeave = this.handleMouseLeave.bind(this, this.props.handleMouseLeave)
    }
    componentDidMount() {
      this.element = findDOMNode(this)
    }

    componentWillUnmount() {
      clearTimeout(this.transitionTimeout)
      cancelAnimationFrame(this.updateCall)
    }

    handleMouseEnter(cb = () => { }, e) {
      this.updateElementPosition()
      this.setTransition()
      return cb(e)
    }
    reset() {
      window.requestAnimationFrame(() => {
        this.setState(prevState => ({
          style: {
            ...prevState.style,
            transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
          }
        }))
      })
    }
    handleMouseMove(cb = () => { }, e) {
      e.persist()
      if (this.updateCall !== null) {
        window.cancelAnimationFrame(this.updateCall)
      }
      this.event = e
      this.updateCall = requestAnimationFrame(this.update.bind(this, e))
      return cb(e)
    }
    setTransition() {
      clearTimeout(this.transitionTimeout)
      this.setState(prevState => ({
        style: {
          ...prevState.style,
          transition: `${this.settings.speed}ms ${this.settings.easing}`,
        }
      }))
      this.transitionTimeout = setTimeout(() => {
        this.setState(prevState => ({
          style: {
            ...prevState.style,
            transition: '',
          }
        }))
      }, this.settings.speed)
    }

    handleMouseLeave(cb = () => { }, e) {
      this.setTransition()
      if (this.settings.reset) {
        this.reset()
      }
      return cb(e)
    }
    getValues(e) {
      const x = (e.nativeEvent.clientX - this.left) / this.width
      const y = (e.nativeEvent.clientY - this.top) / this.height
      const _x = Math.min(Math.max(x, 0), 1)
      const _y = Math.min(Math.max(y, 0), 1)
      const tiltX = (this.settings.max / 2 - _x * this.settings.max).toFixed(2)
      const tiltY = (_y * this.settings.max -   this.settings.max / 2).toFixed(2)
      const percentageX = _x * 100
      const percentageY = _y * 100
      return {
        tiltX,
        tiltY,
        percentageX,
        percentageY,
      }
    }
    updateElementPosition() {
      const rect = this.element.getBoundingClientRect()
      this.width = this.element.offsetWidth
      this.height = this.element.offsetHeight
      this.left = rect.left
      this.top = rect.top
    }
    update(e) {
      const values = this.getValues(e)
      this.setState(prevState => ({
        style: {
          ...prevState.style,
          transform: `perspective(${this.settings.perspective}px) rotateX(${values.tiltY}deg) rotateY(${values.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`,
        }
      }))
      this.updateCall = null
    }
    render() {
      const style = {
        ...this.props.style,
        ...this.state.style,
      }
      return (
        <div
          style={style}
          onMouseEnter={this.handleMouseEnter}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.props.children}
        </div>
      )
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