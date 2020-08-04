import React from 'react';
import './ConnectFoot.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


class ConnectFoot extends React.Component {
        
    render() {
        return (
            <section id="ConnectFoot" className="panel__ConnectFoot">
                <div className="foot-callout">
                    <div className="foot-callout-bg">
                        <div className="foot-callout-text">
                            <h2>Seen enough?</h2>

                            <a id="mail-foot" className="dl-button" href="mailto:tannero@live.com">
                                <div className="bt-front foot">
                                        <span className="icon"><FontAwesomeIcon icon={faLink} /></span> 
                                </div>
                                <div className="bt-back foot">
                                        <span>Mail Me!</span>
                                </div>
                            </a>
                            <a id="linkedin-foot" className="dl-button" href="http://linkedin.com/in/tworourke">
                                <div className="bt-front foot">
                                        <span className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                </div>
                                <div className="bt-back foot">
                                        <span>LinkedIn</span>
                                </div>
                            </a> 
                            <a id="github-foot" className="dl-button" href="http://github.com/torourke14/to-pers">
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
            </section>
        )
    }
}

export default ConnectFoot;