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



class Intro extends React.Component {
        render() {
                return (
                <div className="IntroMaster">
                        <div id="HeroWrapper" className="container">
                                <div id="hero-content">
                                        <div id="hero-block-left">
                                                <div id="hero-name"><p><b>Hello ;</b></p></div>
                                                <div className="hero-links"><a >UX / UI Design</a></div>
                                                <div className="hero-links"><a>Front-End</a></div>
                                                <div className="hero-links"><a>Freelance</a></div>
                                        </div>
                                        <div id="hero-block-right">
                                                <h4 id="desscription">
                                                I. . .<br/>Design what I Love,<br/>Build what I Design, and <br/>Love what I Build.
                                                </h4>
                                        
                                        </div>
                                </div>
                        </div>

                        <div>
                                Hero Table of Contents
                        </div>
                </div>
                );
        }
}

/*
*
*
*
*
*
*/
export default Intro;