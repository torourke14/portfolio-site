import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './App.css';

import Portfolio from './pages/Portfolio';
//import Connect from './pages/Connect';
//import AboutMe from './pages/AboutMe';

//import bg from './images/LinkedInPic.jpg';


class App extends React.Component {
      render() {
        return (
            <div>
                <Home />
            </div>

        );
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

    render() {
        return (
            <div className="App" onClick = {(e) => this.closeSubMenu(e)}>
                
                    <ul className={(this.state.menuActive) ? "menu active" : "menu"}>
                        <li className="logo">Logo img</li>

                        <li className="item"> <a>Portfolio</a> </li>
                        <li className="item"> <a>My Works</a> </li>
                        <li className="item button"><a href="#">Connect</a></li>
                        <li className="item"> <a>About Me</a> </li>
                        
                        <li className="toggle" onClick = { () => this.setState((prevState) => {return {menuActive: !prevState.menuActive}}) }>
                            {(this.state.menuActive) 
                                ? (<i className="fas fa-bars"></i>)
                                : (<i className="fas fa-times" />) }
                            <a href="#">  
                                <i className="fas fa-bars">----</i>
                            </a>
                        </li>
                    </ul>

                    <Portfolio />
            </div>
        );
    }
}
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