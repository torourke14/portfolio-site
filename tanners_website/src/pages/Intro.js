import React from 'react';
import './Intro.css';

//Images

//Icons
import linkedinIcon from '../images/linkedin-icon.png';
import githubIcon from '../images/github-icon.png';
import emailIcon from '../images/mail-icon.png';
// Recent Work
import DoMADLogo from '../images/projects/DoMADLogoDark.svg';
//Files
import Resume from '../files/Resume__Tanner-ORourke.pdf';

/* 
* ===== TO ADD =====
* -- underline all hyperlinks/links
        -- different colors for links, etc (reduce uncertainty)
        -- static elements should be diff. color than hyperlinks
* -- arrows on TOC links
* -- gradients?? solid lines??
*
*/


class Intro extends React.Component {
        render() {
                return (
                <div className="IntroMaster">
                        <div id="hero-contents">
                                <div id="hero-title-block">
                                        <h1>Hello;<br/>I am Tanner.</h1>
                                        <h4>Software Developer&nbsp;&nbsp;|&nbsp;&nbsp;Interface Designer</h4>
                                </div>
                                <div id="hero-desc-block">
                                        <div id="title-link">
                                                <a id="arrow" href="#TOC-container"/> 
                                        </div>
                                        <h4>Welcome to my life of composing software apps &&nbsp;user-driven interfaces.</h4>
                                        <h6>(among other menagerie)</h6>

                                        <a id="dl-button" href={Resume} download="Tanner__ORourke-Resume-Copy.pdf">
                                                <div className="bt-front">
                                                        <span className="icon fa fa-cloud"></span>Download&nbsp;Resume
                                                </div>
                                                <div className="bt-back">
                                                        <span className="icon fa fa-hdd-o"></span>Size: 179 kb
                                                </div>
                                        </a>
                                </div>
                        </div>

                        <div className="transition-spacer first" />

                        <div id="TOC-container">
                                <div id="content-cover">
                                        <button id="about-me" className="content-link" href="">
                                                <h4>About Me</h4>
                                        </button>

                                        <button id="portfolio" className="content-link" href="#">
                                                <h4>Portfolio</h4>
                                        </button>

                                        <button id="exp-skills" className="content-link" href="#">
                                                <h4>Experience & Skills</h4>
                                        </button>

                                        <button id="connect" className="content-link" href="#">
                                                <h4>Connect</h4>
                                        </button>                                       
                                </div>

                                <svg id="svg-container" viewBox="0 0 150 100" preserveAspectRatio="xMinYMid meet">
                                        <image href={DoMADLogo} x="0" y="0" width="50" height="100" />

                                        <g className="svg-gpath">
                                                <path d="M 15,20  L 45,10  L 120,10" fill="none" stroke="#3d3d3d" strokeWidth="0.4" />
                                        </g>
                                        <g className="svg-gpath selected">
                                                <path d="M 30,30  L 50,40  L 120,40" fill="none" stroke="#3d3d3d" strokeWidth="0.4" />
                                        </g>
                                        <g className="svg-gpath selected">
                                                <path  d="M 35,70  L 50,60  L 120,60" fill="none" stroke="#3d3d3d" strokeWidth="0.4" />
                                        </g>
                                        <g className="svg-gpath">
                                                <path  d="M 15,85  L 45,90  L 120,90" fill="none" stroke="#3d3d3d" strokeWidth="0.4" />
                                        </g>
                                </svg>
                        </div>
                        
                        <div className="transition-spacer second" />
                </div>
                );
        }
}


/*
*
<div>
        <a href="mailto:tannero@live.com">
                <img src={emailIcon} alt="Email" height="30px" width="65px"/>
        </a>
        <a href="linkedin.com/in/tworourke">
                <img src={linkedinIcon} alt="LinkedIn" height="30px" width="30px"/>
        </a>                                                                
        <a href="github.com/torourke14">
                <img src={githubIcon} alt="GitHub" height="30px" width="30px"/>
        </a>
</div>


* <div>
        <div className="hero-links"><a>UI Designer</a></div>
        <div className="hero-links"><a>Software Developer</a></div>
        <div className="hero-links"><a>...and an awesome beast.</a></div>
</div>

*
*
*
*/
export default Intro;