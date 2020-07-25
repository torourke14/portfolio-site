
import React from 'react';
import './Landing.css';
import 'animate.css';

import { Link } from "react-router-dom";

//Images
import linkedinIcon from '../images/linkedin-icon.png';
import githubIcon from '../images/github-icon.png';
import emailIcon from '../images/mail-icon.png';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
// Recent Work
import DoMADLogo from '../images/projects/DoMADLogoDark.svg';
//Files
import Resume from '../files/Resume__Tanner-ORourke.pdf';

import Portfolio from "./Portfolio"

/* 
* ===== TO ADD =====
* -- underline all hyperlinks/links
        -- different colors for links, etc (reduce uncertainty)
        -- static elements should be diff. color than hyperlinks
* -- arrows on TOC links
* -- gradients?? solid lines??
*
*/

// <h5>My life of composing software apps &&nbsp;user-driven interfaces.</h4>
// <h6>(among other menagerie)</h6>

//font-family: 'Raleway', Arial, sans-serif;

class Landing extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isAnimating: false
            }
        }


        render() {
                return (
                <div id="Landing" className="panel__Landing">
                    <div id="hero-container">
                        <div id="content-container">
                            <div className="callout-container">
                                    <div className="rotating-text">
                                        <h1>- Hi; I'm Tanner.</h1>
                                        <h2><b>Driven</b></h2>
                                    </div>
                            </div>
                            
                            <HeroImgGallery />

                            <a id="dl-button" href={Resume} download="Tanner__ORourke-Resume-Copy.pdf">
                                    <div className="bt-front">
                                            <span className="icon"><FontAwesomeIcon icon={faDownload}/></span>
                                            Resume
                                    </div>
                                    <div className="bt-back">
                                            <span>Size: 179 kb</span>
                                    </div>
                            </a> 
                        </div>
                        <button class="trigger" data-info="Dive In"
                            onClick={ console.log("going down!") }>
                            <span>Trigger</span>
                        </button>
                    </div>
                    <div id="DiveIn">
                        <div className="dive-in-content">
                                <div className="about-qIntro">
                                    <h2>About</h2>
                                    <p>I am a Full-Stack Developer with a keen eye for Design from
                                        Seattle, Washington. </p>
                                </div>
                                <div className="portfolio-header">
                                    My Work.
                                </div>
                        </div>
                    </div>
                </div>
                );
        }
}

/*
<img className="hero-img pre" src={linkedinIcon} alt="" />
                        <img className="hero-img main" src={githubIcon} alt="" />
                        <img className="hero-img main" src={emailIcon} alt="" />
*/


function HeroImgGallery() {
        /*var id = setInterval(() => Switch, 5);
        function Switch() {
        }*/
        return (
                <div className="img-container">
                        <div className="hero-img pre"/>
                        <div className="hero-img post"/>
                        <div className="hero-img main"/> 
                </div>
        );
}


/*
var keys = [32, 37, 38, 39, 40], wheelIter = 0;

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
    e.preventDefault();
    e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function touchmove(e) {
    preventDefault(e);
}

function disable_scroll() {
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
    document.body.ontouchmove = touchmove;
}

function enable_scroll() {
    window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;
}


function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
}

function scrollPage() {
    let scrollVal = scrollY();
    
    if( noscroll && !ie ) {
        if( scrollVal < 0 ) return false;
        // keep it that way
        window.scrollTo( 0, 0 );
    }

    if( classie.has( container, 'notrans' ) ) {
        classie.remove( container, 'notrans' );
        return false;
    }

    if( isAnimating ) {
        return false;
    }
    
    if( scrollVal <= 0 && isRevealed ) {
        toggle(0);
    }
    else if( scrollVal > 0 && !isRevealed ){
        toggle(1);
    }
}

function toggle( reveal ) {
    isAnimating = true;
    
    if( reveal ) {
        classie.add( container, 'modify' );
    }
    else {
        noscroll = true;
        disable_scroll();
        classie.remove( container, 'modify' );
    }

    // simulating the end of the transition:
    setTimeout( function() {
        isRevealed = !isRevealed;
        isAnimating = false;
        if( reveal ) {
            noscroll = false;
            enable_scroll();
        }
    }, 1000 );
}*/


// refreshing the page...
/*var pageScroll = scrollY();
noscroll = pageScroll === 0;

disable_scroll();

if( pageScroll ) {
    isRevealed = true;
    classie.add( container, 'notrans' );
    classie.add( container, 'modify' );
}

window.addEventListener( 'scroll', scrollPage );
trigger.addEventListener( 'click', function() { toggle( 'reveal' ); } );













/* ====== code for moving letters in relation to viewport mouse x position */
/*key: "handleScroll",
value: function() {
        if (this.constraints && this.isVisible) {
        var t = this.constraints
                , e = Object(s.a)(window).scrollTop()
                , i = (e - t.scrollFrom) / (t.scrollTo - t.scrollFrom)
                , n = this.options.clamp ? Math.max(0, Math.min(1, i)) : i;
        n !== this.scrollPosition && (this.scrollPosition = n,
        this.update(n))
        }
}
}, {
key: "update",
value: function(t) {
        var e = t * this.constraints.maxScroll;
        this.$scrollable.css("transform", "translateX(" + -e + "px)")
}*/

/*
========== scroll down arrow
<div id="arrow-container" className="title-block arrow-container animate__animated animate__fadeOutDown">
        <div className="arrow-2">
                <FontAwesomeIcon className="fa" icon={faAngleDown} ></FontAwesomeIcon>
        </div>
        <div className="arrow-1 animate__animated animate__hinge animate__infinite animate__zoomIn"></div>
</div>

============== Social Links
*
<div>
        <a href="mailto:tannero@live.com?subject=From Your Website - Lets Talk">
                <img src={emailIcon} alt="Email" height="30px" width="65px"/>
        </a>
        <a href="linkedin.com/in/tworourke">
                <img src={linkedinIcon} alt="LinkedIn" height="30px" width="30px"/>
        </a>                                                                
        <a href="github.com/torourke14">
                <img src={githubIcon} alt="GitHub" height="30px" width="30px"/>
        </a>
</div>
*
*/


export default Landing;