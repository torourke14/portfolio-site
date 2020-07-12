import React from 'react';
import './Portfolio.css';

//Icons
import linkedinIcon from '../images/linkedin-icon.png';
import githubIcon from '../images/github-icon.png';
import emailIcon from '../images/mail-icon.png';
// Recent Work
import DoMADLogo from '../images/projects/DoMADLogoDark.svg';
//Files
import Resume from '../files/Resume__Tanner-ORourke.pdf';



class Portfolio extends React.Component {
        render() {
                return (
                <div>
                        <div id="HeroWrapper" className="container">
                                <div id="hero-content">
                                        <div id="hero-block-left">
                                                <div id="hero-name"><p><b>Tanner</b> <i>O'Rourke</i></p></div>
                                                <div className="hero-links"><a >UX / UI Design</a></div>
                                                <div className="hero-links"><a>Front-End</a></div>
                                                <div className="hero-links"><a>Freelance</a></div>
                                        </div>
                                        <div id="hero-block-right">
                                                <h4 id="desscription">
                                                I Design what I Love,<br/>Build how I Design,<br/> and Love what I Build.
                                                </h4>
                                        
                                        </div>
                                </div>
                        </div>
                        
                        <div id='AboutIntro' className="container">
                                <div className="col-1">
                                        <div id="about-title">
                                                <div>
                                                <p><b>About<br/><span>Me</span></b></p>
                                                </div>
                                        </div>
                                </div>
                                <div className="col-2">
                                        <div className="description">
                                                <h2>Hello! I'm Tanner O'Rourke.</h2>
                                                <h2>I am a Web Designer based in Seattle.</h2>
                                                <h5>
                                                I am a creative-minded Software Developer recently graduated from UC-Boulder
                                                with professional and scholarly experience developing effective user-centric
                                                interfaces from design to launch. Highly skilled at composing exceptional yet
                                                practical software. Incorporates an exquisite proficiency to communicate the
                                                User Experience as part of a team and in my deliverables.
                                                </h5>

                                                <h4>
                                                <i>"Designing may not save the world, but it damn well makes it look good"</i>
                                                </h4>
                                                <h4>
                                                <i>"Design is the intermediary between information and understanding"</i> - Hans Hoffman
                                                </h4>

                                                <h3>
                                                        Tanner O'Rourke (signature)
                                                </h3>
                                        </div>

                                        <div id='AboutLinks'>
                                                <a href="mailto:tannero@live.com">
                                                        <img src={emailIcon} alt="Email" height="30px" width="65px"/>
                                                </a>
                                                <a href="linkedin.com/in/tworourke">
                                                        <img src={linkedinIcon} alt="LinkedIn" height="30px" width="30px"/>
                                                </a>                                                                
                                                <a href="github.com/torourke14">
                                                        <img src={githubIcon} alt="GitHub" height="30px" width="30px"/>
                                                </a>
                                                <button href={Resume} download>
                                                        Download CV
                                                </button>
                                        </div>

                                </div>      
                        </div>
                        
                        <div id="KnowledgeIntro" className="container">
                                <div id='Knowledge-left'className='col-2'>
                                        <p>Knowledge</p>
                                        <div id='Skills'>
                                                <div className="knowledge-box">
                                                        <div className="skill-header">
                                                                <img/>
                                                                <h4>Web Development</h4>
                                                        </div>
                                                        <p>
                                                        I have proven experience building websites from the 
                                                        ground-up utilizing various development stacks
                                                        </p>
                                                </div>
                                                <div className="knowledge-box">
                                                        <div className="skill-img">
                                                                <img />
                                                                <h4>UX/UI Design</h4>
                                                        </div>
                                                        <p>
                                                        
                                                        </p> 
                                                </div>
                                        
                                                <div className="knowledge-box">
                                                        <div className="skill-img">
                                                                <img />
                                                                <h4>App Development</h4>
                                                        </div>
                                                        <p>
                                                        
                                                        </p> 
                                                </div>
                                                <div className="knowledge-box">
                                                        <div className="skill-img">
                                                                <img />
                                                                <h4>Full-Stack Development</h4>
                                                        </div>
                                                        <p>
                                                        
                                                        </p> 
                                                </div>
                                        
                                                <div className="knowledge-box">
                                                        <div className="skill-img">
                                                                <img />
                                                                <h4>Analytics</h4>
                                                        </div>
                                                        <p>
                                                        
                                                        </p> 
                                                </div>
                                                <div className="knowledge-box">
                                                        <div className="skill-img">
                                                                <img />
                                                                <h4>Human-Computer Interaction</h4>
                                                        </div>
                                                        <p>
                                                        
                                                        </p> 
                                                </div>
                                        </div>
                                </div>
                                <div id='Knowledge-right' className="col-1">
                                        <div id="knowledge-title">
                                        <p><b>My<br/><span>Services</span></b></p>
                                        </div>
                                </div>
                        </div>
                        
                        <div id="SkillsIntro" className="container">
                                <div className='col-1'>
                                        <div id="skills-title">
                                                <p>My</p>
                                        </div>
                                </div>
                                <div id="MySkills" className='col-2'>
                                        <p>What you Need to Know</p>

                                        <div className="skill-bar">
                                                <p>HTML/CSS</p>
                                                <div className="bar">
                                                        <div id='html'>95%</div>
                                                </div>
                                        </div>
                                        <div className="skill-bar">
                                                <p>JavaScript</p>
                                                <div className="bar">
                                                        <div id='js'>80%</div>
                                                </div>
                                        </div>
                                        <div className="skill-bar">
                                                <p>ReactJS</p>
                                                <div className="bar">
                                                        <div id='react'>85%</div>
                                                </div>
                                        </div>
                                        <div className="skill-bar">
                                                <p>Python</p>
                                                <div className="bar">
                                                        <div id='python'>70%</div>
                                                </div>
                                        </div>
                                        <div className="skill-bar">
                                                <p>Prototyping</p>
                                                <div className="bar">
                                                        <div id='prototyping'>70%</div>
                                                </div>
                                        </div>
                                        <div className="skill-bar">
                                                <p>Illustrator / Figma</p>
                                                <div className="bar">
                                                        <div id='illustrator-figma'>75%</div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div id="WorksIntro" className="container">
                                <div id='works-title'>
                                        <p>Most Recent Work</p>
                                </div>
                                <div id="recent-project-grid">
                                        <div className='flip-card'>
                                                <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                                <div className="card-front-contents">
                                                                        <img id='project-img' src={DoMADLogo} alt="DoMAD" style={{width: "150px", height: "150px", }}/>
                                                                        <h3>Lead UI/UI Designer, Front-End Developer</h3>
                                                                </div>
                                                                
                                                        </div>
                                                        <div className="flip-card-back">
                                                                <div className="card-back-contents">
                                                                        <p>Full website redesign and development for a non-profit organization with a senior Project team at CU-Boulder</p>
                                                                        <p>Boulder, CO</p>
                                                                        <p>Details...</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='flip-card'>
                                                <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                                <img id='project-img' src={DoMADLogo} alt="DoMAD" style={{width: "200px", height: "200px", }}/>
                                                                <h3>Lead UI/UI Designer, Front-End Developer</h3>
                                                        </div>
                                                        <div className="flip-card-back">
                                                                <p>Full website redesign and development for a non-profit organization with a senior Project team at CU-Boulder</p>
                                                                <p>Boulder, CO</p>
                                                                <p>Details...</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div id="projects-link">
                                                <p>See my full portfolio..</p>
                                        </div>
                                </div>
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
export default Portfolio;