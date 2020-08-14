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

           
            this.handleScroll = this.handleScroll.bind(this);

            //const mainNavNavLinks = document.querySelectorAll("nav ul li a");
            //const mainSections = document.querySelectorAll("main section");
        }

        componentDidMount() {
            window.addEventListener("scroll", this.handleScroll);
        }

        handleScroll() {
            return
        }

        componentWillMount() {
            window.removeEventListener("scroll", this.handleScroll);
        }

        render() {
            console.log(this.props.activeLoc.pathname);

            return (
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
            );
        }
}

let mainNavNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavNavLinks.forEach(NavLink => {
    let section = document.querySelector(NavLink.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      NavLink.classList.add("current");
    } else {
      NavLink.classList.remove("current");
    }
  });
});

export default FloatingNav;


/*
*/