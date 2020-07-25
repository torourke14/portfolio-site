import React from 'react';
import './App.css';

// Packages
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Pages & Components
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Footer';
import AboutMeDrawer from './components/AboutMeDrawer';
import ExpSkillsDrawer from './components/ExpSkillsDrawer';
import ConnectDrawer from './components/ConnectDrawer';
import FloatingNav from './components/FloatingNav';


function AppContainer({ location }) {
    return (
        <div><TransitionGroup component={null}>

            <CSSTransition key={location.key} 
              classNames={'fade'}
              timeout={{ enter: 300, exit: 200 }} 
            >
                <Switch location={location}>
                    <Route path="/" render={() =>
                        <IntersectionRoutingObserver>
                            <FloatingNav />
                            <Landing/>
                            <Portfolio />
                            <Footer />
                        </IntersectionRoutingObserver>
                    }/>
                    
                    <Route exact path="/about" children={({ match }) => (
                        <AboutMeDrawer open={match ? true : false} />
                    )}/>
                    <Route exact path="/skills" children={({ match }) => (
                        <ExpSkillsDrawer open={match ? true : false} />
                    )}/>
                    <Route exact path="/connect" children={({ match }) => (
                        <ConnectDrawer open={match ? true : false} />
                    )}/>

                    <Route render={() =>
                        <div><NoMatch/></div>
                    }/>
                </Switch>
            </CSSTransition>

        </TransitionGroup></div>
    );
}


/* Sets a viewport visibility observer on the main container to apply the <FloatingNavbar>*/
function IntersectionRoutingObserver({ children, sticky=false, className, ...rest }){
    const [isSticky, setIsSticky] = React.useState(false);
    const ref = React.createRef();
    
    // mount observer
    React.useEffect(() => {
        const cachedRef = ref.current, 
                observer = new IntersectionObserver(
                    ([e]) => setIsSticky(e.intersectionRatio < 0.1), {
                        threshold: [0.1]
                    } 
                );
        observer.observe(cachedRef);
      
        // unmount
        return function(){ observer.unobserve(cachedRef); }
    }, [ref])
    
    return (
        <div className={className + (isSticky ? " isSticky" : "")} ref={ref} {...rest}>
            {children}
        </div>
    );
}


function NoMatch() {
    let location = useLocation();
    return (
        <div>
            <h3>No match for <code>{location.pathname}</code></h3>
        </div>
    );
}


export default withRouter(AppContainer);