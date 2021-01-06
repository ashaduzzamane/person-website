import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import McHacksLogo from '../images/mchacks-logo.png';
import McKessonLogo from '../images/mckesson-logo.png';
import NobeLogo from '../images/nobe-logo.png';
import MyriadeLogo from '../images/myriade-logo.png';
import McGillLogo from '../images/mcgill-logo.png';
import MarianopolisLogo from '../images/marianopolis-logo.png';
import SelwynLogo from '../images/selwyn-logo.png';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experiences.css';

class Experiences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandExperiencesHackMcgillDevelopment: false,
            expandExperiencesMckesson: false,
            expandExperiencesNobe: false,
            expandExperiencesHackMcgillLogistics: false,
            expandExperiencesMyriade: false,
            expandExperiencesHackMcgillSponsorship: false,
            viewMoreExperiences: false,
            expandEducationMcGill: false,
            expandEducationSelwyn: false,
        }
    }

    expand = (e, stateName ) => {
        e.preventDefault();
        this.setState({ [stateName] : true });
    }

    hide = (e, stateName ) => {
        e.preventDefault();
        this.setState({ [stateName] : false });
    }

    render() {
        return(
            <div id="experiences" className="Experiences-container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <h5 className="Experiences-title">Experiences</h5>
                <br />
                <br />
                <br />
                <h3 className="Experience-subtitle">Work Experience</h3>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74B3CE', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74B3CE' }}
                        date="Apr 2020 - present"
                        iconStyle={{ background: '#FFFFFF', color: '#010104' }}
                        icon={<img className="Experiences-timeline-logo" src={McHacksLogo} alt="McHacks logo" />}
                    >
                        <h3 className="vertical-timeline-element-title">HackMcGill | Development Coordinator</h3>
                        <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
                        <br />
                        { this.state.expandExperiencesHackMcgillDevelopment ? 
                            <div>
                                <button className="learn-more-btn" onClick={ e => this.hide(e, "expandExperiencesHackMcgillDevelopment") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </button>
                                <div className="Experience-details-container">
                                    <ul>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                Assisting with building tools, services, and platforms that power McHacks. 
                                                This includes static websites, and web applications. 
                                            </span>
                                        </li>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                The websites and applications are used by thousands of people each year.
                                            </span>
                                        </li>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                McHacks is a student-run collegiate hackathon hosted at McGill University in Montreal. 
                                                We bring over 600 students from across North America together for 24 hours to build projects and applications that range from hardware to mobile to artificial intelligence.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div> : 
                            <div>
                                <button className="learn-more-btn" onClick={ e => this.expand(e, "expandExperiencesHackMcgillDevelopment") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </button>
                            </div>
                        }
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74B3CE', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74B3CE' }}
                        date="Jan 2020 - Aug 2020"
                        iconStyle={{ background: '#FFFFFF', color: '#010104' }}
                        icon={<img className="Experiences-timeline-logo" src={McKessonLogo} alt="McKesson logo" />}
                    >
                        <h3 className="vertical-timeline-element-title">McKesson | Software Developer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
                        <br />
                        { this.state.expandExperiencesMckesson ? 
                            <div>
                                <button className="learn-more-btn" onClick={ e => this.hide(e, "expandExperiencesMckesson") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </button>
                                <div className="Experience-details-container">
                                    <ul>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                Utilized <b>NodeJS</b>, <b>ReactJS</b>, and <b>Redux</b> to create a Jira time tracking and sprint tracking application to be used 
                                                by managers and release train engineers. The application <b>saves 75%</b> of the RTE’s reporting time.
                                            </span>
                                        </li>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                Utilized Jira <b>REST API</b> to extract data from McKesson’s Jira cloud and Jira server.
                                            </span>
                                        </li>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                Transformed data and created visual representation of the data using <b>ChartJS</b>. 
                                                Facilitated McKesson’s transition to an agile development process.
                                            </span>
                                        </li>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                Utilized <b>Microsoft Azure</b> logic apps to connect the back end and front-end. Had the application hosted on Azure’s web services
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div> : 
                            <div>
                                <button className="learn-more-btn" onClick={ e => this.expand(e, "expandExperiencesMckesson") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </button>
                            </div>
                        }
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74B3CE', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74B3CE' }}
                        date="Apr 2019 - Apr 2020"
                        iconStyle={{ background: '#FFFFFF', color: '#010104' }}
                        icon={<img className="Experiences-timeline-logo" src={NobeLogo} alt="National Organization for Business and Engineering logo" />}
                    >
                        <h3 className="vertical-timeline-element-title">National Organization for Business and Engineering | VP Events</h3>
                        <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
                        <br />
                        { this.state.expandExperiencesNobe ? 
                            <div>
                                <button className="learn-more-btn" onClick={ e => this.hide(e, "expandExperiencesNobe") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </button>
                                <div className="Experience-details-container">
                                    <ul>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                Led the Events team to run NOBE conferences, competition, and workshops. <b>Increased NOBE event participation by 25%</b>.
                                            </span>
                                        </li>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                Hosted over 100+ Engineering and Business students as well an industry leading professional.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div> : 
                            <div>
                                <button className="learn-more-btn" onClick={ e => this.expand(e, "expandExperiencesNobe") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </button>
                            </div>
                        }
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74B3CE', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74B3CE' }}
                        date="Apr 2019 - Apr 2020"
                        iconStyle={{ background: '#FFFFFF', color: '#010104' }}
                        icon={<img className="Experiences-timeline-logo" src={McHacksLogo} alt="McHacks logo" />}
                    >
                        <h3 className="vertical-timeline-element-title">HackMcGill | Logistics Coordinator</h3>
                        <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
                        <br />
                        { this.state.expandExperiencesHackMcgillLogistics ? 
                            <div>
                                <button className="learn-more-btn" onClick={ e => this.hide(e, "expandExperiencesHackMcgillLogistics") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </button>
                                <div className="Experience-details-container">
                                    <ul>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                Working with a team of organizers to run McHacks, a 24 hour long hackathon.
                                            </span>
                                        </li>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                Responsible for venue, food logistics, transportation, and volunteers.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div> : 
                            <div>
                                <button className="learn-more-btn" onClick={ e => this.expand(e, "expandExperiencesHackMcgillLogistics") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </button>
                            </div>
                        }
                    </VerticalTimelineElement>
                    { this.state.viewMoreExperiences ? 
                        <div>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#74B3CE', color: '#010104' }}
                                contentArrowStyle={{ borderRight: '7px solid  #74B3CE' }}
                                date="Aug 2019 - Dec 2019"
                                iconStyle={{ background: '#FFFFFF', color: '#010104' }}
                                icon={<img className="Experiences-timeline-logo" src={MyriadeLogo} alt="Myriade logo" />}
                            >
                                <h3 className="vertical-timeline-element-title">Myriade Inc | Software Developer Intern</h3>
                                <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
                                <br />
                                { this.state.expandExperiencesMyriade ? 
                                    <div>
                                        <button className="learn-more-btn" onClick={ e => this.hide(e, "expandExperiencesMyriade") }>
                                            Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                            </svg>
                                        </button>
                                        <div className="Experience-details-container">
                                            <ul>
                                                <li className="Experience-list-style">
                                                    <span className="Experience-text-style">
                                                        Creating a cross-platform executable that connects to a mining pool and provide an intuitive UI for Stratum operations.
                                                    </span>
                                                </li>
                                                <li className="Experience-list-style">
                                                    <span className="Experience-text-style">
                                                        Utilized ElectronJS, NodeJS, and ReactJS.
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> : 
                                    <div>
                                        <button className="learn-more-btn" onClick={ e => this.expand(e, "expandExperiencesMyriade") }>
                                            Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                            </svg>
                                        </button>
                                    </div>
                                }
                            </VerticalTimelineElement> 
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#74B3CE', color: '#010104' }}
                                contentArrowStyle={{ borderRight: '7px solid  #74B3CE' }}
                                date="Apr 2019 - Apr 2020"
                                iconStyle={{ background: '#FFFFFF', color: '#010104' }}
                                icon={<img className="Experiences-timeline-logo" src={McHacksLogo} alt="McHacks logo" />}
                            >
                                <h3 className="vertical-timeline-element-title">HackMcGill | Sponsorship Coordinator</h3>
                                <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
                                <br />
                                { this.state.expandExperiencesHackMcgillSponsorship ? 
                                    <div>
                                        <button className="learn-more-btn" onClick={ e => this.hide(e, "expandExperiencesHackMcgillSponsorship") }>
                                            Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                            </svg>
                                        </button>
                                        <div className="Experience-details-container">
                                            <ul>
                                                <li className="Experience-list-style">
                                                    <span className="Experience-text-style">
                                                    Assisting HackMcGill meet fundraising targets through the acquisition of new sponsorships while maintaining and developing current sponsorship relations.
                                                    </span>
                                                </li>
                                                <li className="Experience-list-style">
                                                    <span className="Experience-text-style">
                                                        Responsible for venue, food logistics, transportation, and volunteers.
                                                    </span>
                                                </li>
                                                <li className="Experience-list-style">
                                                    <span className="Experience-text-style">
                                                        Hosting over 600+ students from around the world as well as over 26 industry leading companies.
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> : 
                                    <div>
                                        <button className="learn-more-btn" onClick={ e => this.expand(e, "expandExperiencesHackMcgillSponsorship") }>
                                            Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                            </svg>
                                        </button>
                                    </div>
                                }
                            </VerticalTimelineElement>
                        </div>: null
                    }
                </VerticalTimeline>
                <div className="btn-container">
                    { !this.state.viewMoreExperiences ?  
                         <button className="Experiences-view-more-btn" onClick={ e => this.expand(e, "viewMoreExperiences") }>View More Experiences +</button> : 
                         <button className="Experiences-view-more-btn" onClick={ e => this.hide(e, "viewMoreExperiences") }>View Less Experiences -</button>
                    }
                </div>
                <br />
                <br />
                <br />
                <h3 className="Experience-subtitle">Education</h3>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74B3CE', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74B3CE' }}
                        date="Sept 2017 - Apr 2022 [Expected]"
                        iconStyle={{ background: '#FFFFFF', color: '#010104' }}
                        icon={<img className="Education-timeline-logo" src={McGillLogo} alt="McGill logo" />}
                    >
                        <h3 className="vertical-timeline-element-title">McGill University</h3>
                        <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
                        <p>B.Eng. | Bachelor of Electrical Eng, Software Eng (Minor)</p>
                        { this.state.expandEducationMcGill ? 
                            <div className="Education-button-container">
                                <button className="learn-more-btn" onClick={ e => this.hide(e, "expandEducationMcGill") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </button>
                                <div className="Experience-details-container">
                                    <h4 className="Education-subtitle">Awards</h4>
                                    <ul>
                                        <li className="Experience-list-style">
                                            <div className="Experience-text-style">
                                                Business Analytics in Engineering Case Competition (Mar. 2019)
                                            </div>
                                            <div className="Experience-text-style">
                                                - Placed first in the business analytics case that was hosted by Microsoft and EY.
                                            </div>
                                        </li>
                                        <li className="Experience-list-style">
                                            <div className="Experience-text-style">
                                                McGill Institute for Aerospace Engineering Case Competition (Jan. 2018)
                                            </div>
                                            <div className="Experience-text-style">
                                                - Winner of the best solution to an Aerospace case study.
                                            </div>
                                        </li>
                                        <li className="Experience-list-style">
                                            <div className="Experience-text-style">
                                                goLead  (Jan. 2018 - Mar. 2018)
                                            </div>
                                            <div className="Experience-text-style">
                                                - Placed 1st in a ten-week project development working in a group collaboratively with other students in achieving a goal/solution to better the world.
                                            </div>
                                        </li>
                                    </ul>

                                    <h4 className="Education-subtitle">Notable Courses</h4>
                                    <div className="Experience-text-style">
                                        + Intro to Computer Vision, Realistic Image Synthesis, Computer Organization Design Principles and Methods, Digital Logic, Intro to Computer Science, Intro to Software Development, Intro to Software Engineering, Linear Systems and Control, Model-Based Programming
                                    </div>
                                </div>
                            </div> : 
                            <div className="Education-button-container">
                                <button className="learn-more-btn" onClick={ e => this.expand(e, "expandEducationMcGill") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </button>
                            </div>
                        }
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74B3CE', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74B3CE' }}
                        date="Aug 2015 - May 2017"
                        iconStyle={{ background: '#FFFFFF', color: '#010104' }}
                        icon={<img className="Education-timeline-logo" src={MarianopolisLogo} alt="Marianopolis logo" />}
                    >
                        <h3 className="vertical-timeline-element-title">Marianopolis College</h3>
                        <h4 className="vertical-timeline-element-subtitle">Westmount, QC</h4>
                        <p>Diploma of College Studies (D.E.C.) | Health Science</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74B3CE', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74B3CE' }}
                        date="Sept 2010 - Jun 2015"
                        iconStyle={{ background: '#FFFFFF', color: '#010104' }}
                        icon={<img className="Education-timeline-logo" src={SelwynLogo} alt="Selwyn logo" />}
                    >
                        <h3 className="vertical-timeline-element-title">Selwyn House School</h3>
                        <h4 className="vertical-timeline-element-subtitle">Westmount, QC</h4>
                        <p>Secondary School Diploma (D.E.S.)</p>
                        { this.state.expandEducationSelwyn ? 
                            <div className="Education-button-container">
                                <button className="learn-more-btn" onClick={ e => this.hide(e, "expandEducationSelwyn") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </button>
                                <div className="Experience-details-container">
                                    <h4 className="Education-subtitle">Awards</h4>
                                    <ul>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                Cum Laude Society Inductee
                                            </span>
                                        </li>
                                        <li className="Experience-list-style">
                                            <span className="Experience-text-style">
                                                High Honours (90+ GPA)
                                            </span>
                                        </li>
                                    </ul>

                                    <h4 className="Education-subtitle">Notable Courses</h4>
                                    <div className="Experience-text-style">
                                        + AP Calculus, AP Physics
                                    </div>
                                </div>
                            </div> : 
                            <div className="Education-button-container">
                                <button className="learn-more-btn" onClick={ e => this.expand(e, "expandEducationSelwyn") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </button>
                            </div>
                        }
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <br />
                <br />
            </div>
        )
    }
}

export default Experiences;