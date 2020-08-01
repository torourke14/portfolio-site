
import React, { useState, useEffect } from 'react';
import './Landing.css';
import 'animate.css';
import scrollToComponent from 'react-scroll-to-component';

import Resume from '../files/Resume__Tanner-ORourke.pdf';

// Pages
import FloatingNav from '../components/FloatingNav';
import Portfolio from "./Portfolio";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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

            this.portfolioRef = React.createRef();
        }


        render() {
                return (
                <div id="Landing" className="panel__Landing">
                    <NavigatorIntersectionObserver>
                        <div id="landing-container">
                            <div id="landing-content">
                                <div className="callout-container">
                                    <div className="rotating-text">
                                        <span>
                                            <h1>- Hi;</h1><h1>I'm&nbsp;Tanner.</h1>
                                        </span>
                                        <h2><b>Driven</b></h2>
                                    </div>
                                </div>
                                <HeroImgGallery />
                            </div>
                        
                            <div className="linkDown">
                                <span className="landingLinkBox" 
                                    onClick={ console.log("going down!") }>
                                    My Work
                                    <span className="arrow">
                                        <FontAwesomeIcon icon={faArrowDown} />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </NavigatorIntersectionObserver>
                    
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

                    <Portfolio ref={this.portfolioRef}/>
                
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

/* ===============================
--- Sets an observer on the landing container visibility 
--- to apply deprecation to the <FloatingNavbar>
=============================== */
function NavigatorIntersectionObserver({ children, sticky=false, className, ...rest }){
    const [isScrolled, setisScrolled] = useState(false);
    const ref = React.createRef();
    
    // mount observer
    useEffect(() => {
        const cachedRef = ref.current, 
            observer = new IntersectionObserver(
                ([e]) => setisScrolled(e.intersectionRatio < 0.15), { threshold: [0.15] } 
            );
        observer.observe(cachedRef);
      
        // unmount
        return function(){ observer.unobserve(cachedRef); }
    }, [ref])
    
    return (
        <div className={(isScrolled ? "deprecate" : "")} ref={ref} {...rest}>
            <FloatingNav deprecate={isScrolled ? true : false} />
            {children}
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
</div>*/

export default Landing;