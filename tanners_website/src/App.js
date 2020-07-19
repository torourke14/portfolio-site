import React from 'react';
import './App.css';

import Intro from './pages/Intro';
import AboutMe from './pages/AboutMe';
import Connect from './pages/Connect';
import MyWorks from './pages/MyWorks';

//import bg from './images/LinkedInPic.jpg';
/*
*
========== Task List =============
--- cardify AboutMe
    DONE -- side padding
    -- add about me content design
---page routing

---add home icons
---home content

---portfolio entry design
---add details to project entries

---add AboutMe content
---AboutMe scroll behavior
*
*/


class App extends React.Component {
      render() {
        return (
            <div>
                <Master />
            </div>

        );
    }
}

class Master extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentRoute: 'Intro',
            menuActive: false,
            submenuActive: false,
        }

        this.closeSubMenu = this.closeSubmenu.bind(this);
    }

    closeSubmenu(e) {
        const menu = document.querySelector(".menu");
        let isClickInside = menu.contains(e.target);
      
        if (!isClickInside && menu.querySelector(".submenu-active")) {
          menu.querySelector(".submenu-active").classList.remove("submenu-active");
        }
    }

    /*
    *
    * Intro     -- Intro
                -- Hero Table of Contents
    * About Me  -- Intro Banner
                -- Timeline paragraphs
    * My Works  -- Decr. of Services
                -- Portfolio grid
                -- Skill bars
    * Connect (side pullout)
    *
    */
    render() {
        return (
            <div>
                <div id='PageBox'>
                    <Intro />
                </div>
                <div id='floating-nav'></div>
                <div id='PageBox'>
                    <AboutMe />
                </div>
                <div id='PageBox'>
                    <MyWorks />
                </div>
                <div id='PageBox'>
                    <Connect />
                </div>
                
                
            </div>
        );
    }
}

/*
<div className="App" onClick = {(e) => this.closeSubMenu(e)}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <nav>
                    <ul className={(this.state.menuActive) ? "menu active" : "menu"}>
                        <li className="logo">&nbsp;</li>

                        <li className="item">
                            <a onClick={() => this.renderSwitch('Portfolio')}>Home</a>
                        </li>
                        <li className="item">
                            <a onClick={() => this.renderSwitch('About')}>About Me</a>
                        </li>
                        <li className="item button">
                            <a onClick={() => this.renderSwitch('Connect')}>Connect</a>
                        </li>
                        <li className="item">
                            <a onClick={() => this.renderSwitch('MyWorks')}>My Works</a>
                        </li>
                        
                        <li className="toggle" onClick = { () => this.setState((prevState) => {return {menuActive: !prevState.menuActive}}) }>
                            {(this.state.menuActive) 
                                ? (<i className="fas fa-bars"></i>)
                                : (<i className="fas fa-times" />) }
                            <a href="#">  
                                <i className="fas fa-bars">----</i>
                            </a>
                        </li>
                    </ul>
                </nav>
*/
/*
<li className="item">
                            <a onClick={() => this.renderSwitch('Portfolio')}>Home</a>
                        </li>
                        <li className="item">
                            <a onClick={() => this.renderSwitch('About')}>About Me</a>
                        </li>
                        <li className="item button">
                            <a onClick={() => this.renderSwitch('Connect')}>Connect</a>
                        </li>
                        <li className="item">
                            <a onClick={() => this.renderSwitch('MyWorks')}>My Works</a>
                        </li>
*/
    /*
    * Home -- Intro to me (specialities)
            RECENT works
            Social Links icons
    Portfolio (Professional Overview) -- My creative process, 
    *                                      List of Experiences
    *                                      Downloadable resume
    *                                      Specialities
    * 
    * My Works -- Full documented 'tabs' of my work over the years
    * 
    * Connect -- All links
    *           social accounts
    *           form for contact
    * About Me -- Bio (what I've done, where Im at, what I want to do)
    *               Photo
    *               Link to Connect
    */

/*
<Tabs selectedIndex= {this.state.tabIndex} onSelect= {(i,pi) = > this.handleTabChange(i,pi)} 
          forceRenderTabPanel= {true} >
          <TabList id= "tabs-flexbox">
              <li id= "flag-wrap">
                  {(this.state.active_abbr != =  '')
                      ? (<img id= "flag-img" src= {'./flags/'+this.state.active_abbr+'.png'} alt= "No Flag" />)
                      : (<div/>) }
              </li>
              <li id= "name-wrap">
                  {this.state.active_country}
              </li>
              <li className= "regular-tabs">Country Info</li>
              <li className= "regular-tabs">Donation Items</li>
              <li className= "regular-tabs">Organizations</li>
              <li className= "regular-tabs">Blog Posts</li>
          </TabList>
          <TabPanel tabIndex= {0}>
              <CountryInfoComponent ref= 'InfoRef' data= {this.state.infoData} />
          </TabPanel>
          <TabPanel tabIndex= {1}>
              <DonationItemsComponent ref= "DonationsRef" data= {this.state.blogData} />
          </TabPanel>
          <TabPanel tabIndex= {2}>
              <OrganizationsComponent ref= "OrgsRef" data= {this.state.orgData} />
          </TabPanel>
          <TabPanel tabIndex= {3}>
              <BlogPostsComponent ref= "BlogsRef" data= {this.state} />
          </TabPanel>
          </Tabs>
*/

export default App;