import React from 'react';
import './App.css';

import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Connect from './pages/Connect';
import MyWorks from './pages/MyWorks';
import Inspiration from './pages/Inspiration';

//import bg from './images/LinkedInPic.jpg';


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
            currentPage: <Portfolio />,
            currentRoute: 'Portfolio',
            menuActive: false,
            submenuActive: false,
        }

        this.closeSubMenu = this.closeSubmenu.bind(this);
        this.renderSwitch = this.renderSwitch.bind(this);
    }

    closeSubmenu(e) {
        const menu = document.querySelector(".menu");
        let isClickInside = menu.contains(e.target);
      
        if (!isClickInside && menu.querySelector(".submenu-active")) {
          menu.querySelector(".submenu-active").classList.remove("submenu-active");
        }
    }

    renderSwitch(page) {
        switch(page) {
            case page === this.state.currentRoute:
                return;
            case 'Portfolio':
                this.setState({
                    currentPage: <Portfolio path="/" />,
                    currentRoute: 'Portfolio',
                    menuActive: false
                });
                return;
            case 'About':
                this.setState({
                    currentRoute: 'AboutMe',
                    menuActive: false
                });
                return;
            case 'Connect':
                this.setState({
                    currentPage: <Connect path="/connect"/>,
                    currentRoute: 'Connect',
                    menuActive: false
                });
                return;
            case 'Inspiration':
                this.setState({
                    currentPage: <Inspiration path="/inspiration"/>,
                    currentRoute: 'Inspiration',
                    menuActive: false
                });
                return;
            case 'MyWorks':
                this.setState({
                    currentPage: <Inspiration path="/works"/>,
                    currentRoute: 'MyWorks',
                    menuActive: false
                });
                return;
            default: 
                this.setState({
                    currentRoute: 'Portfolio',
                    menuActive: false
                });
                return;
        }
}

    render() {
        let route = this.state.currentRoute;
        let currentComponent;

        /* Navigation */
        if (route === "Portfolio") {
            currentComponent = <Portfolio path="/"/>;
        } else if (route === 'AboutMe') {
            currentComponent = <AboutMe path="/about"/>;
        } else if (route === 'Connect') {
            currentComponent = <Connect path="/connect"/>;
        } else if (route === 'Inspiration') {
            currentComponent = <Inspiration path="/inspo"/>;
        } else if (route === 'MyWorks') {
            currentComponent = <MyWorks path="/works"/>;
        }else {
            currentComponent = <Portfolio path="/"/>;
        }
        return (
            <div className="App" onClick = {(e) => this.closeSubMenu(e)}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <nav>
                    <ul className={(this.state.menuActive) ? "menu active" : "menu"}>
                        <li className="logo">LOGO</li>

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
                        <li className="item">
                            <a onClick={() => this.renderSwitch('Inspiration')}>Inspiration</a>
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
                <div id='PageBox'>
                    {currentComponent}
                </div>
                
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