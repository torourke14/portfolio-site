import React from 'react';
import './FloatingNav.css';
import { Link, NavLink } from 'react-router-dom';
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
                deprecatePullout: props.deprecate,
                sidenavOpen: false
            }
            this.opScroll = this.onScroll.bind(this);

            const mainNavLinks = document.querySelectorAll("nav ul li a");
            const mainSections = document.querySelectorAll("main section");
        }

        componentDidMount() {
            window.addEventListener("scroll", this.onScroll);
        }

        static getDerivedStateFromProps(props, state) {
            console.log("derived:", props.deprecate);
            return {deprecatePullout: props.deprecate};
        }

        onScroll() {
            
        }

        componentWillMount() {
            window.removeEventListener("scroll");
        }

        render() {
            const deprecated = this.state.deprecatePullout;
            console.log(this.state.sidenavOpen && deprecated);

            // Tanner
                // Who? (to About slideout)
            // About 
                // Skills (to Skills pullout)
            // Work
            // Connect
            return (
                <nav className="nav-menu">
                    <ul>
                        <li><a href="#Landing">-</a></li>
                        <li><a href="#About">About Me</a></li>
                        <li><a href="#Portfolio">Portfolio</a></li>
                        <li><a href="#Connect">Connect</a></li>
                    </ul>
                </nav>
            );
        }
}

let mainNavLinks = document.querySelectorAll("nav ul li a");
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

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

export default FloatingNav;


/*
*/