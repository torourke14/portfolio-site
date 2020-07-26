import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


class Footer extends React.Component {
        
    render() {
        return (
            <footer className="foot-master">
                <div className="foot-callout">
                    <div className="foot-callout-bg">
                        <div className="foot-callout-text">
                            <h2>Seen enough?</h2>

                            <a id="mail-foot" className="dl-button mail-foot" href="mailto:tannero@live.com">
                                <div className="bt-front foot">
                                        <span className="icon"><FontAwesomeIcon icon={faLink} /></span> 
                                </div>
                                <div className="bt-back foot">
                                        <span>Mail Me!</span>
                                </div>
                            </a>
                            <a id="linkedin-foot" className="dl-button" href="linkedin.com/in/tworourke">
                                <div className="bt-front foot">
                                        <span className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                </div>
                                <div className="bt-back foot">
                                        <span>LinkedIn</span>
                                </div>
                            </a> 
                            <a id="github-foot" className="dl-button" href="github.com/torourke14">
                                <div className="bt-front foot">
                                        <span className="icon"><FontAwesomeIcon icon={faLink} /></span>
                                </div>
                                <div className="bt-back foot">
                                        <span>Github Repo</span>
                                </div>
                            </a> 
                        </div>
                    </div>
                </div>
                <div className='foot-container'>
                    <div className="foot-logo">
                        <Link to="/"><img src="" alt="LOGO"/></Link>
                    </div>  
                    <ul className='foot-items'>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/">Portfolio</Link></li>
                            <li><Link to="/connect">Connect</Link></li>
                            <li><Link to="/disclaimer">Disclaimer</Link></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;