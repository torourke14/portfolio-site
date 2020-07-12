import React from 'react';
import './MyWorks.css';

// Project Images
import DoMADLogo from '../images/projects/DoMADLogoDark.svg';

class MyWorks extends React.Component {
        render() {
                return (
                        <div>My Works!

                        <Project title='DoMAD' role='Lead UI Designer, Front-End Developer' 
                                desc="Website design and build for non-profit donation org. DoMAD"
                                location='Boulder, CO'
                                imgsrc={DoMADLogo}/>
                        <Project title='London Bridge Studios' role='Web Developer'
                                desc='Website page flow and SEO enhancements for a renowned recording studio'
                                location='Seattle, WA'
                                imgsrc=''/>
                        </div>
                )
        }
}


class Project extends React.Component {
        constructor(props) {
                super(props);
                
                this.state = {
                        title: props.title,
                        type: props.type,
                        description: props.desc,
                        location: props.location,
                        image: props.imgsrc
                }
                 
        }

        render() {

        /* Chamge into inherited subclasses of Project, i.e. Project.type - Project.Design */
        return (
                <div>
                        <div className="content">
                                <img src={this.state.image} alt='' style={{width: "50px", height: "50px"}}/>
                                <h3>Lead UI/UI Designer, Front-End Developer</h3>
                                <div>
                                <p>Full website redesign and development for a non-profit organization with a senior Project team at CU-Boulder</p>
                                <p>Details...</p>
                                </div>
                        </div>
                </div>
        );
        }
}

export default MyWorks;