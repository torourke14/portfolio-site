import React from 'react';
import './ConnectFoot.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAtlas } from "@fortawesome/free-solid-svg-icons";

import FloatingNav from '../components/FloatingNav';

class ConnectFoot extends React.Component {
        
    render() {
        return (
            <section id="ConnectFoot" className="panel__ConnectFoot">
                <FloatingNav />
                    <div className="foot-callout-bg">
                        <div className="foot-bg-gif">
                            <video src="https://media.giphy.com/media/3owzVYk3A2E572jRSM/source.mp4" alt="" autoPlay={true} loop={true} />
                        </div>
                        <div className="foot-callout">
                            <h2>Connect With Me</h2>
                        </div>
                        <div className="foot-links">
                            <span>
                                <span>I'm active on</span>
                                <a id="linkedin-foot" className="dl-button foot" href="http://linkedin.com/in/tworourke">
                                    <div className="bt-front">
                                            <span>LinkedIn</span>
                                    </div>
                                    <div className="bt-back">
                                            <span className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                    </div>
                                </a> 
                                <span> / </span>
                                <a id="github-foot" className="dl-button foot" href="http://github.com/torourke14/to-pers">
                                    <div className="bt-front">
                                            <span className="icon">Github</span>
                                    </div>
                                    <div className="bt-back">
                                            <span><FontAwesomeIcon icon={faGithub} /></span>
                                    </div>
                                </a> 
                                <span>(incl. this site's repo!)</span>
                                <br/>
                                <a id="mail-foot" className="dl-button foot" href="mailto:tannero@live.com">
                                    <div className="bt-front">
                                            <span className="icon">Academia</span> 
                                    </div>
                                    <div className="bt-back">
                                            <span><FontAwesomeIcon icon={faAtlas} /></span>
                                    </div>
                                </a>
                                <span> / </span>
                                <a id="mail-foot" className="dl-button foot" href="https://colorado.academia.edu/TannerOR">
                                    <div className="bt-front">
                                            <span className="icon">Email</span> 
                                    </div>
                                    <div className="bt-back">
                                            <span><FontAwesomeIcon icon={faLink} /></span>
                                    </div>
                                </a>
                                <span> /&nbsp;&nbsp;&nbsp;425-786-6688</span>
                            </span>
                        </div>
                    </div>
            </section>
        )
    }
}

export default ConnectFoot;