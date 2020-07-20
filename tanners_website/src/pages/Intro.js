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
* -- 
* -- 
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
                                                <a id="arrow" href="table-of-contents"/> 
                                        </div>
                                        <h4>Welcome to my life of composing software apps &&nbsp;user-driven interfaces.</h4>
                                        <h6>(among other menagerie)</h6>
                                        <button href={Resume} download={Resume}>Download CV</button>
                                </div>
                                <div id="hero-links-block">
                                        
                                </div>
                        </div>

                        
                        <div id="TOC-container">
                                <div id="contents-cover">
                                        <a id="about-me" className="svg-link" href="#"><h4>About Me</h4></a>

                                        <a id="portfolio" className="svg-link" href="#"><h4>Portfolio</h4></a>

                                        <a id="exp-skills" className="svg-link" href="#"><h4>Experience & Skills</h4></a>

                                        <a id="connect" className="svg-link" href="#"><h4>Connect</h4></a>
                                        
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
                                        
                                </div>

                                <svg id="svg-container" viewBox="0 0 150 100" preserveAspectRatio="xMinYMid meet">
                                        <image href={DoMADLogo} x="0" y="0" width="75" height="100" />

                                        <g className="svg-gpath">
                                                <path d="M 20,30  L 70,10  L 112.5,10" fill="none" stroke="#3d3d3d" strokeWidth="0.4" />
                                        </g>
                                        <g className="svg-gpath selected">
                                                <path d="M 30,30  L 75,40  L 120,40" fill="none" stroke="#3d3d3d" strokeWidth="0.4" />
                                        </g>
                                        <g className="svg-gpath selected">
                                                <path  d="M 20,70  L 75,60  L 120,60" fill="none" stroke="#3d3d3d" strokeWidth="0.4" />
                                        </g>
                                        <g className="svg-gpath">
                                                <path  d="M 30,85  L 70,90  L 112.5,90" fill="none" stroke="#3d3d3d" strokeWidth="0.4" />
                                        </g>
                                </svg>
                        </div>
                        
                </div>
                );
        }
}


/*
*
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