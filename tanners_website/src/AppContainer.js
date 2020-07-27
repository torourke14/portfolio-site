import React from 'react';
import './App.css';

// Packages
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Pages & Components
import Landing from './pages/Landing';

import AboutMeDrawer from './components/AboutMeDrawer';
import ExpSkillsDrawer from './components/ExpSkillsDrawer';
import ConnectDrawer from './components/ConnectDrawer';


function AppContainer({ location }) {
    return (
        <div style={{transition: "margin-right 0.5s"}}>
        <TransitionGroup component={null}>

            <CSSTransition key={location.key} 
              classNames={'fade'}
              timeout={{ enter: 300, exit: 200 }} 
            >
                <Switch location={location}>
                    <Route path="/" render={() =>
                        <Landing />
                    }/>
                    
                    <Route exact path="/about" children={({ match }) => (
                        <AboutMeDrawer />
                    )}/>
                    <Route exact path="/skills" children={({ match }) => (
                        <ExpSkillsDrawer />
                    )}/>
                    <Route exact path="/connect" children={({ match }) => (
                        <ConnectDrawer />
                    )}/>

                    <Route render={() =>
                        <div><NoMatch/></div>
                    }/>
                </Switch>
            </CSSTransition>

        </TransitionGroup>
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