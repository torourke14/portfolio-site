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
            //menuButtonStyles: { /*translateY = -400px:0px*/ },
            curtainToggleStyles: {
                /*bg-color => transform(top-right corner) => width/height=100vw/vh*/
                transition: "all 0.5s cubic-bezier(0.7,0,0.3,1)"
            },
            mobileCurtainOpen: false,
            mobileActive: false,

            navScrollToggleStyles: { 
                /*translateY = -400px:0px*/
                transition: "transform 1s cubic-bezier(0.7, 0, 0.3, 1) 0.2s"
            }
        }
        this.lastScrollTop = 0;
        this.toggleCurtain = this.toggleCurtain.bind(this);
    }

    componentDidMount() {
        window.addEventListener("load", this.handleLoad);
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
        this.handleResize();
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
            },
            mobileCurtainOpen: false // close curtain on scroll
        }));
        // set for next || mobile scroll check
        this.lastScrollTop = (scrollTop <= 0) ? 0 : scrollTop;
    }

    toggleCurtain = () => {
        this.setState(prevState => ({
            curtainToggleStyles: {
                ...prevState.curtainToggleStyles,
                visibility: (prevState.mobileActive && prevState.mobileCurtainOpen === false) ? ("visible") : ("hidden"),
                width: (prevState.mobileActive && prevState.mobileCurtainOpen === false) ? ("100vw") : ("0"),
                height: (prevState.mobileActive && prevState.mobileCurtainOpen === false) ? ("100vh") : ("0")
            },
            mobileCurtainOpen: !prevState.mobileCurtainOpen
        }));
    }

    render() {
        /*<NavLink exact to="/Portfolio" className="menu-link" activeClassName="selected" data-letters="Media.">
            <span>Media.</span>
        </NavLink>*/
        return (
            <div className="navigation" style={this.state.navScrollToggleStyles}>
                <NavLink exact to="/" className="logo">
                    <img src="" alt="signature" />
                </NavLink>

                <nav className={!(window.innerWidth < 760) ? "nav-menu" : "nav-menu mobile"} >
                    {(this.state.mobileActive) 
                        ?   (<button className="mobile-menu-btn" onClick={this.toggleCurtain}>
                                <FontAwesomeIcon icon= {faBars} size="2x" />
                                Menu.
                            </button>)
                        :   null
                    }
                    
                    <div className="menu-content" 
                     style={this.state.mobileActive ? this.state.curtainToggleStyles : null}>
                        <NavLink exact to="/About" className="menu-link overlay--magic underline--magic" activeClassName="selected" data-letters="About.">
                                <span>About.</span>
                        </NavLink>
                        <NavLink exact to="/Portfolio" className="menu-link overlay--magic underline--magic" activeClassName="selected" data-letters="Work.">
                                <span>Work.</span>
                        </NavLink>
                        <NavLink exact to="/connect" className="menu-link overlay--magic underline--magic" activeClassName="selected" data-letters="Connect.">
                                <span>Connect.</span>
                        </NavLink>
                        {(this.state.mobileActive && this.state.mobileCurtainOpen) 
                            ?   (<button id="curtain-close-btn" className="overlay--magic" onClick={this.toggleCurtain}>
                                    <FontAwesomeIcon icon= {faTimes} size="2x" />
                                </button>)
                            :   null
                        }
                    </div>
                </nav>
            </div>
        );
    }
}


export default FloatingNav;