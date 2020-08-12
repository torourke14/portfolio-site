import React from 'react';
import './ConnectFoot.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAtlas } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Resume from '../files/Resume__Tanner-ORourke.pdf';

import FloatingNav from '../components/FloatingNav';

class ConnectFoot extends React.Component {
        
    render() {
        return (
            <section id="ConnectFoot" className="panel__ConnectFoot">
                    <div className="foot-container">
                        <div className="foot-callout">
                            <h1>I'm looking for hire!</h1>
                        </div>
                        <div className="foot-links">
                            <h2>
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
                                <span>&nbsp;/&nbsp;</span>
                                <span> Download my</span> 
                                <a className="dl-button foot" href={ Resume } download={true}>
                                    <div className="bt-front">
                                            <span>Resume</span>
                                    </div>
                                    <div className="bt-back">
                                            <span className="icon"><FontAwesomeIcon icon={faDownload} /></span>
                                    </div>
                                </a> 
                            </h2>
                        </div>
                        <div className="foot-info">
                            <h6>
                                If you'd like to 'talk shop', discuss components of this site, or just say hi, feel free to contact me personally.
                            </h6>
                        </div>
                    </div>
            </section>
        )
    }
}

export default ConnectFoot;