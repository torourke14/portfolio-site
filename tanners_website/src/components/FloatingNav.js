import React from 'react';
import './FloatingNav.css';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Resume from '../files/Resume__Tanner-ORourke.pdf';

class FloatingNav extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                scrollProgress: 0
            }
            this.scrollPosition = null;
        }

        componentDidMount() {
            window.addEventListener( "scroll", this.handleScroll);
        }
        componentWillMount() {
            window.removeEventListener( "scroll", this.handleScroll);
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

            this.setState({ scrollProgress: this.scrollPosition });
        }

        render() {
            const progressBarStyles = {
                height: this.state.scrollProgress + "%",
                width: "10%",
                backgroundColor: "#e0bf00",
                borderRadius: "0.5vw" 
            }
            
            return (
                <div className="fixed-navigator" >
                    <nav className="nav-menu">
                        <ul>
                            <li><NavLink exact to="/" activeClassName="selected">
                                Home
                            </NavLink></li>
                            <li><NavLink exact to="/About" activeClassName="selected">
                                About Me
                            </NavLink></li>
                            <li><NavLink exact to="/Portfolio" activeClassName="selected">
                                Portfolio
                            </NavLink></li>
                            <li><NavLink exact to="/connect" activeClassName="selected">
                                Connect
                            </NavLink></li>
                        </ul>
                    </nav>
                    <div className="progress-bar" style={progressBarStyles} />
                </div>
            );
        }
}

FloatingNav.defaultProps = {

}

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

export default FloatingNav;


/*
*/