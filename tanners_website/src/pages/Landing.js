
import React, { useState, useEffect } from 'react';
import './Landing.css';
import 'animate.css';

// Pages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import FloatingNav from '../components/FloatingNav';

// Card images
import linkedInPic from '../images/LinkedInPic.jpg'; 
import rainier from '../images/rainier.JPG';
import codeShot from '../images/codeScreenshot.png'

/* 
* ===== TO ADD =====
* -- DONE underline all hyperlinks/links
        -- different colors for links, etc (reduce uncertainty)
        -- static elements should be diff. color than hyperlinks
* -- arrows on TOC links
====================
*/

//font-family: 'Raleway', Arial, sans-serif;

class Landing extends React.Component {
    render() {
        return (
        <header id="Landing" className="panel__Landing">
            <div id="landing-container">
                <div className="callout-container">
                    <h1>- Hi;</h1>
                    <h1>I'm&nbsp;Tanner.</h1>

                    <div className="down-link">
                        <Link to="/about">
                        <button className="landingLinkBox">
                                Who?
                                <span className="arrow">
                                    <FontAwesomeIcon icon={faArrowDown} />
                                </span>
                        </button>
                        </Link>
                    </div>

                    <div className="rotating-words-wrap">
                        <h2 className="rw-sentence">
                            <span>Welcome to my life of</span>
                            <br/>
                            <div className="rw-words">
                                <span>developing</span>
                                <span>building</span>
                                <span>designing</span>
                                <span>stylizing</span>
                            </div>
                        </h2>
                    </div>
                </div>

                <div className="polaroid-container">
                    <div className="bg-streak" />
                    <img src={rainier} alt="oops :(" className="hero-img top" />
                    <img src={linkedInPic} alt="oops :(" className="hero-img mid" />
                    <img src={codeShot} alt="oops :(" className="hero-img bot" />
                </div>
            </div>
        </header>
        );
    }
}

/*fun/tion HeroImgGallery() {
    /*var id = setInterval(() => Switch, 5);
    //function Switch() {
    //}
    return (
        
    );
}*/


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
</div>*/

export default Landing;