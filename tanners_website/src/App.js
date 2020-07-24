// Modules
import React, { Fragment } from 'react';
import './App.css';

// Packages
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import AppContainer from './AppContainer';

/** ---PAGES-----------------------------------
    * music
    * Intro.js   
    *   -- Intro callout (left-top)   (~50vh)  
    *   -- Hero Navigation (right--bottom) (95vh)
    *   -- About intro (75-100vh)
    *       -- banner quote (5vh)
    *       -- My Services section (basically) (cards)
    * Portfolio, Works.js (down)  
    *   -- Portfolio grid  
    *   -- personal dev space?
    * Footer.js (down) (mac 50vh)
    *   -- "Lets work together. Dont hesitate to <a>contact me</a>" (slide ConnectDrawer.js)
    *   -- site map
    *   -- cool bottom foot design
    * 
    * * ---SP app COMPONENTS-------------------------------
    * 
    * * AboutMeDrawer.js (slide left full)
    *   -- intro banner (left 75%)
    *   -- MY VALUES
    *   -- 3 details paragraphs
    * 
    * Experience + Skills, ExpSkillsDrawer.js (slide left full)  
    *   -- Intro Banner (not too high)
    *   -- Timeline paragraphs
    *   -- descr of my services
    *
    * * ConnectDrawer.js (slide left) 
    *   -- modal with form OR simple 'mailto:'
    *
    * FloatingNav.js (appears right [intro hero-nav])
    *   -- top-r nav hamburger    
    *   -- scroll induicator
    *   -- bottom-r 'Connect'
    * 
*/


/** --- TO DO ---------------------------------
DONE* Get app running again
    * Finish implementing the home callout/TOC
    *   --> flush design
    * 
    * Develop the <FloatingNavbar>
    *   --> get linking to send to console
    * 
    * Create BASIC impkementations of the 3 side drawers
    *   --> Get the linking to work
    *   --> Finish designing
    * 
    * Develop <Portfolio>
    *   --> working project SLIDES (to right, not left)
    *   --> Add CONTENT for each project
    * l
    * Finish Footer, 3 drawers, 
*/

const history = createBrowserHistory();

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNavbar: false,
            aboutDrawerOpen: false,
            skillsDrawerOpem: false,
            ConnectDrawerOpen: false
        };
        this.handleURLChange = this.handleURLChange.bind(this);
    }
    
    componentDidMount() {
        this.unlisten = history.listen((location, action) => {
            this.handleURLChange(location, action);
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    handleURLChange(location, action) {
        console.log("action:_", action, "  ||  pathname:_", location.pathname, "state:_ ", location.state);
        //this.setState({pathname: location});
    }

    render() {
        const location = this.props.location;
        //<Link to={{pathname: '/nextpath', state: { prevPath: location.pathname }}}>Example Link</Link>
        //history.push(updatedURL); //can move to custom <Link /> if needed
        //<Link to={pathname: 'somewhere', state: {} }></Link>

        return (
            <Router history={history} location={location} onChange={this.urlChangeHandler} forceRefresh={false}>
                <AppContainer/>
            </Router>
        );
    }
}

export default App;