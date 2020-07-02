import React from 'react';
import './Portfolio.css';



class Portfolio extends React.Component {
        render() {
                return (
                <div id="portfolio-container">
                        <div className="container">
                                <div id="hero-wrapper">
                                        <div id="hero-content">
                                                <div id="hero-block-left">
                                                        <div id="name"><h1>Tanner O'Rourke</h1></div>
                                                        <div><a>UX / UI Ddesign</a></div>
                                                </div>
                                                <div id="hero-block-right">
                                                        <h4 id="desscription">
                                                        I Design Websites!!
                                                        </h4>
                                                
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="container">
                                <div id="works-wrapper">
                                        My Works
                                </div>
                        </div>

                </div>
                )
        }
}

export default Portfolio;