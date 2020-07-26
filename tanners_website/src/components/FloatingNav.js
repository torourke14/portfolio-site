import React from 'react';
import './FloatingNav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';

class FloatingNav extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                deprecatePullout: props.deprecate,
                sidenavOpen: false
            }
            this.openNav = this.openNav.bind(this);
            this.closeNav = this.closeNav.bind(this);
        }

        static getDerivedStateFromProps(props, state) {
            console.log("derived:", props.deprecate);
            return {deprecatePullout: props.deprecate};
        }

        openNav() {
            this.setState({sidenavOpen: !this.state.sidenavOpen});
        }

        closeNav() {
            this.setState({sidenavOpen: !this.state.sidenavOpen});
        }

        // CHANGE HREF'S TO 'SCROLL-TOP-COMPONENT */
        render() {
            const deprecated = this.state.deprecatePullout;
            console.log(this.state.sidenavOpen && deprecated);

            let landingSidenavStyles = {
                opacity: (!deprecated ? 1 : 0),
                visibility: (!deprecated ? 'visible' : 'hidden'),
                transition: "visibility 0s, opacity 0.5s linear",
                transitionDuration: "0.3s", transitionDelay: "0.25s"
            };
            let closedSidenavStyles = {
                //display: (deprecated && !this.state.sidenavOpen) ? ("block") : ("none"),
                opacity: (deprecated && !this.state.sidenavOpen) ? 1 : 0,
                visibility: (deprecated && !this.state.sidenavOpen ? 'visible' : 'hidden'),
                transition: "visibility 0.15s, opacity 0.25s linear",
                transitionDuration: "0.4s", transitionDelay: "0.25s"
            };
            let openSidenavStyles = {
                width: (deprecated && this.state.sidenavOpen) ? ("30vw") : ("0"),
                transition: "width 0.5s linear",
                transitionDuration: "0.4s", transitionDelay: "0.25s"
            };

            return (
                <div className="side-navigator">
                    <div className="landing" style={landingSidenavStyles}>
                        <Link to="/about">About</Link>
                        <Link to='/skills'>Skills</Link>
                        <a href="#foot-master">Connect</a>
                    </div>

                    <div className="pullout-closed" style={closedSidenavStyles}>
                        <div >
                        <span className="three-bars">
                                <FontAwesomeIcon icon={faBars} size="1x" onClick={this.openNav}/>
                        </span>
                        </div>
                    </div>
                    <div className="pullout-open" >
                        <div className="navbar" style={openSidenavStyles}>
                            <span><FontAwesomeIcon icon={ faTimes } size="2x" onClick={this.closeNav}/>
                            </span>
                            <Link to="/about">About</Link>
                            <Link to='/skills'>Skills</Link>
                            <a href="#foot-master">Connect</a>
                        </div>
                    </div>
                </div>
            );
        }
}

export default FloatingNav;


/*
<a id="resume-dl" className="dl-button" href={Resume} download="Tanner__ORourke-Resume-Copy.pdf">
                                        <div className="bt-front">
                                                <span className="icon"><FontAwesomeIcon icon={faDownload}/></span>
                                                Resume
                                        </div>
                                        <div className="bt-back">
                                                <span>Size: 179 kb</span>
                                        </div>
                                </a> 
*/