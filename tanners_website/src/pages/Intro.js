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
                                        <h4>Welcome to my life of developing applications &&nbsp;composing user-driven interfaces.</h4>
                                        <div>
                                                <h6>(among other things)</h6>
                                                <a id='icon' href="#table-of-contents" > 
                                                        <div id="arrow"/> 
                                                </a>
                                        </div>
                                        
                                </div>
                        </div>

                        <div id="table-of-contents">
                                <div id="svg-container">
                                        <svg viewBox="0 0 150 100" width="100%" height="100%" preserveAspectRatio="xMinYMid meet">
                                                <image href={DoMADLogo} x="0" y="0" width="75" height="100" />

                                                <g className="svg-toc">
                                                        <path d="M 20,30  L 70,10  L 112.5,10" fill="none" stroke="#3d3d3d" strokeWidth="0.5" />
                                                </g>
                                                <g className="svg-toc selected">
                                                        <path d="M 30,30  L 75,40  L 120,40" fill="none" stroke="#3d3d3d" strokeWidth="0.5" />
                                                </g>
                                                <g className="svg-toc selected">
                                                        <path  d="M 20,70  L 75,60  L 120,60" fill="none" stroke="#3d3d3d" strokeWidth="0.5" />
                                                </g>
                                                <g className="svg-toc">
                                                        <path  d="M 30,85  L 70,90  L 112.5,90" fill="none" stroke="#3d3d3d" strokeWidth="0.5" />
                                                </g>
                                        </svg>

                                        <a id="about-me" className="svg-link" href="#"><h4>About Me</h4></a>
                                        <a id="portfolio" className="svg-link" href="#"><h4>Portfolio</h4></a>
                                        <a id="exp-skills" className="svg-link" href="#"><h4>Experience & Skills</h4></a>
                                        <a id="connect" className="svg-link" href="#"><h4>Connect</h4></a>
                                </div>

                                <div className="content-container">

                                </div>
                                <div className="content-container">

                                </div>
                                <div className="content-container">

                                </div>
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