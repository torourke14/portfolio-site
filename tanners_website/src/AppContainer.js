import React from 'react';
import './AppContainer.css';

// Packages
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Pages & Slide-out Components
import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from "./pages/Portfolio";
import ConnectFoot from './pages/ConnectFoot';

import AboutMeDrawer from './components/AboutMeDrawer';
import ExpSkillsDrawer from './components/ExpSkillsDrawer';


function AppContainer({ location }) {
    return (
        <div id="backdrop">
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} 
                classNames={'slide'}
                timeout={{ enter: 400, exit: 300 }} 
                >
                    <section className="route-section">
                        <Switch location={location}>
                            <Route exact path="/"  render={() =>
                                    <Landing />
                            }/>
                            <Route path="/about" children={({ match }) => (
                                    <About />
                            )}/>
                            <Route path="/portfolio" children={({ match }) => (
                                    <Portfolio />
                            )}/>
                            <Route path="/connect" children={({ match }) => (
                                    <ConnectFoot />
                            )}/>

                            <Route path="/me" children={({ match }) => (
                                    <AboutMeDrawer />
                            )}/>
                            <Route path="/skills" children={({ match }) => (
                                    <ExpSkillsDrawer />
                            )}/>


                            <Route children={() =>
                                <NoMatch/>
                            }/>
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

function NoMatch() {
    let location = useLocation();
    return (
        <div><h3>No match for <code>{location.pathname}</code></h3></div>
    );
}

export default withRouter(AppContainer);