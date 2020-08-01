import React from 'react';
import './AppContainer.css';

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
                            <AboutMeDrawer />
                        )}/>
                        <Route path="/skills" children={({ match }) => (
                            <ExpSkillsDrawer />
                        )}/>
                        <Route path="/connect" children={({ match }) => (
                            <ConnectDrawer />
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
        <div>
            <h3>No match for <code>{location.pathname}</code></h3>
        </div>
    );
}


export default withRouter(AppContainer);