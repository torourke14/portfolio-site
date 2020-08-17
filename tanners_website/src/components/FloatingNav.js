import React from 'react';
import './FloatingNav.css';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Resume from '../files/Resume__Tanner-ORourke.pdf';
import { findDOMNode } from 'react-dom';

class FloatingNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            mobileMenuBarStyles: {
                transition: "opacity 0.5s ease-in, visibility 0s",
                transitionDelay: "0.2s"
            },
            curtainToggleStyles: {
                width: "0%",
                transition: "width 0.5s 0.2s cubic-bezier(0.7,0,0.3,1)"
            },
            mobileCurtainOpen: false,
            mobileActive: false,

            navScrollToggleStyles: {
                transform: "translateY(0px)",
                transition: "transform 1s 0.1s cubic-bezier(0.7,0,0.3,1)"
            }
        }
        this.lastScrollTop = 0;

        this.toggleMobileCurtain = this.toggleMobileCurtain.bind(this);
    }

    componentDidMount() {
        window.addEventListener("load", this.handleLoad);
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillMount() {
        window.removeEventListener("load", this.handleLoad);
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("scroll", this.handleScroll);
    }

    // check for mobile view & reset menu visibility
    handleLoad = () => {
        this.setState(prevState => ({
            navScrollToggleStyles: {
                ...prevState.navScrollToggleStyles,
                transform: "translateY(0px)"
            }
        }), this.handleResize());
    }

    handleResize = () => {
        let isMobile = window.innerWidth < 760;
        this.setState(prevState => ({
            mobileActive: isMobile,
            mobileCurtainOpen: false, // close curtain on any resize/mount
            mobileMenuBarStyles: {
                ...prevState.mobileMenuBarStyles,
                visibility: (isMobile) ? "visible" : "hidden",
                opacity: (isMobile) ? "1" : "0"
            },
        }));
    }

    handleScroll = () => {
        // get
        const scrollTop = Math.max(
            window.pageYOffset, 
            document.documentElement.scrollTop
        );
        //set || 1=up, 0=down
        this.setState(prevState => ({
            navScrollToggleStyles: {
                ...prevState.navScrollToggleStyles,
                transform: (scrollTop > this.lastScrollTop) ? "translateY(-400px)" : "translateY(0px)"
            }
        }));
        // set for next || mobile scroll check
        this.lastScrollTop = (scrollTop <= 0) ? 0 : scrollTop;
    }

    toggleMobileCurtain = () => {
        this.setState(prevState => ({
            curtainToggleStyles: {
                ...prevState.curtainToggleStyles,
                width: (prevState.mobileActive && prevState.mobileCurtainOpen === false) ? ("100%") : ("0")
            },
            mobileCurtainOpen: !prevState.mobileCurtainOpen
        }));
    }

    render() {
        /*<NavLink exact to="/Portfolio" className="menu-link" activeClassName="selected" data-letters="Media.">
            <span>Media.</span>
        </NavLink>*/
        return (
            <nav className="navigation" style={this.state.navScrollToggleStyles}>
                <NavLink exact to="/" className="logo">
                    <img src="" alt="signature" />
                </NavLink>
                
                {(()=> {
                    if (!this.state.mobileActive) {
                        return (
                            <div className="nav-menu">
                                <NavLink exact to="/About" className="menu-link" activeClassName="selected" data-letters="About.">
                                        <span>About.</span>
                                </NavLink>
                                <NavLink exact to="/Portfolio" className="menu-link" activeClassName="selected" data-letters="Work.">
                                    <span>Work.</span>
                                </NavLink>
                                <NavLink exact to="/connect" className="menu-link" activeClassName="selected" data-letters="Connect.">
                                    <span>Connect.</span>
                                </NavLink>
                            </div>
                        );
                    } 
                    else {
                        return (
                            <React.Fragment>
                            <div className="nav-menu mobile" style={this.state.mobileMenuBarStyles}>
                                <span className="open-btn" onClick={this.toggleMobileCurtain}>
                                    <FontAwesomeIcon icon={faBars} size="1x"/>
                                    <span>Menu.</span>
                                </span>
                            </div>
                            <div className="mobile-nav-curtain" style={this.state.curtainToggleStyles}>
                                <span className="close-btn" onClick={this.toggleMobileCurtain}>
                                    <FontAwesomeIcon icon={ faTimes } size="1x" />
                                </span>
                                <div className="curtain-content">
                                    <div><NavLink exact to="/About" className="menu-link" activeClassName="selected" data-letters="About.">
                                        About.
                                    </NavLink></div>

                                    <div><NavLink exact to="/Portfolio" className="menu-link" activeClassName="selected" data-letters="Work.">
                                        Work.
                                    </NavLink></div>

                                    <div><NavLink exact to="/connect" className="menu-link" activeClassName="selected" data-letters="Connect.">
                                        Connect.
                                    </NavLink></div>
                                </div>
                            </div>
                            </React.Fragment>
                        );
                    }
                })()} 
            </nav>
        );
    }
}
FloatingNav.defaultProps = {}


export default FloatingNav;