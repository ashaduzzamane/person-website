import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import McHacksLogo from '../../images/mchacks-logo.png';
import McKessonLogo from '../../images/mckesson-logo.png';
import NobeLogo from '../../images/nobe-logo.png';
import MyriadeLogo from '../../images/myriade-logo.png';
import McGillLogo from '../../images/mcgill-logo.png';
import MarianopolisLogo from '../../images/marianopolis-logo.png';
import SelwynLogo from '../../images/selwyn-logo.png';
import {
    ExperiencesContainer,
    ExperiencesTitle,
    ExperiencesSubtitle,
    ExperiencesTimelineLogo,
    TimelineTitle,
    TimelineSubtitle,
    TimelineBtn,
    ExperiencesDetailContainer,
    ExperiencesBulletPoint,
    ExperiencesDetail,
    ExperiencesBtn,
    ExperiencesBtnContainer,
    EducationTimelineLogo,
    EducationDegree,
    EducationBtnContainer,
    EducationDetailsSubtitle
} from './ExperiencesElements';
import 'react-vertical-timeline-component/style.min.css';

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
            <ExperiencesContainer id="experiences">
                <br />
                <br />
                <br />
                <br />
                <br />
                <ExperiencesTitle>Experiences</ExperiencesTitle>
                <br />
                <br />
                <br />
                <ExperiencesSubtitle>Work Experience</ExperiencesSubtitle>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74b3ce', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                        date="Apr 2020 - present"
                        iconStyle={{ background: '#ffffff', color: '#010104' }}
                        icon={<ExperiencesTimelineLogo src={McHacksLogo} alt="McHacks logo" />}
                    >
                        <TimelineTitle className="vertical-timeline-element-title">HackMcGill | Development Coordinator</TimelineTitle>
                        <TimelineSubtitle className="vertical-timeline-element-subtitle">Montreal, QC</TimelineSubtitle>
                        <br />
                        { this.state.expandExperiencesHackMcgillDevelopment ? 
                            <div>
                                <TimelineBtn onClick={ e => this.hide(e, "expandExperiencesHackMcgillDevelopment") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                                <ExperiencesDetailContainer>
                                    <ul>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                Assisting with building tools, services, and platforms that power McHacks. 
                                                This includes static websites, and web applications. 
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                The websites and applications are used by thousands of people each year.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                McHacks is a student-run collegiate hackathon hosted at McGill University in Montreal. 
                                                We bring over 600 students from across North America together for 24 hours to build projects and applications that range from hardware to mobile to artificial intelligence.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                    </ul>
                                </ExperiencesDetailContainer>
                            </div> : 
                            <div>
                                <TimelineBtn onClick={ e => this.expand(e, "expandExperiencesHackMcgillDevelopment") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                            </div>
                        }
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74b3ce', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                        date="Jan 2020 - Aug 2020"
                        iconStyle={{ background: '#ffffff', color: '#010104' }}
                        icon={<ExperiencesTimelineLogo src={McKessonLogo} alt="McKesson logo" />}
                    >
                        <TimelineTitle className="vertical-timeline-element-title">McKesson | Software Developer Intern</TimelineTitle>
                        <TimelineSubtitle className="vertical-timeline-element-subtitle">Montreal, QC</TimelineSubtitle>
                        <br />
                        { this.state.expandExperiencesMckesson ? 
                            <div>
                                <TimelineBtn onClick={ e => this.hide(e, "expandExperiencesMckesson") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                                <ExperiencesDetailContainer>
                                    <ul>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                Utilized <b>NodeJS</b>, <b>ReactJS</b>, and <b>Redux</b> to create a Jira time tracking and sprint tracking application to be used 
                                                by managers and release train engineers. The application <b>saves 75%</b> of the RTE’s reporting time.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                Utilized Jira <b>REST API</b> to extract data from McKesson’s Jira cloud and Jira server.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                Transformed data and created visual representation of the data using <b>ChartJS</b>. 
                                                Facilitated McKesson’s transition to an agile development process.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                Utilized <b>Microsoft Azure</b> logic apps to connect the back end and front-end. Had the application hosted on Azure’s web services
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                    </ul>
                                </ExperiencesDetailContainer>
                            </div> : 
                            <div>
                                <TimelineBtn onClick={ e => this.expand(e, "expandExperiencesMckesson") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                            </div>
                        }
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74b3ce', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                        date="Apr 2019 - Apr 2020"
                        iconStyle={{ background: '#ffffff', color: '#010104' }}
                        icon={<ExperiencesTimelineLogo src={NobeLogo} alt="National Organization for Business and Engineering logo" />}
                    >
                        <TimelineTitle className="vertical-timeline-element-title">National Organization for Business and Engineering | VP Events</TimelineTitle>
                        <TimelineSubtitle className="vertical-timeline-element-subtitle">Montreal, QC</TimelineSubtitle>
                        <br />
                        { this.state.expandExperiencesNobe ? 
                            <div>
                                <TimelineBtn onClick={ e => this.hide(e, "expandExperiencesNobe") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                                <ExperiencesDetailContainer>
                                    <ul>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                Led the Events team to run NOBE conferences, competition, and workshops. <b>Increased NOBE event participation by 25%</b>.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                Hosted over 100+ Engineering and Business students as well an industry leading professional.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                    </ul>
                                </ExperiencesDetailContainer>
                            </div> : 
                            <div>
                                <TimelineBtn onClick={ e => this.expand(e, "expandExperiencesNobe") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                            </div>
                        }
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74b3ce', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                        date="Apr 2019 - Apr 2020"
                        iconStyle={{ background: '#ffffff', color: '#010104' }}
                        icon={<ExperiencesTimelineLogo src={McHacksLogo} alt="McHacks logo" />}
                    >
                        <TimelineTitle className="vertical-timeline-element-title">HackMcGill | Logistics Coordinator</TimelineTitle>
                        <TimelineSubtitle className="vertical-timeline-element-subtitle">Montreal, QC</TimelineSubtitle>
                        <br />
                        { this.state.expandExperiencesHackMcgillLogistics ? 
                            <div>
                                <TimelineBtn onClick={ e => this.hide(e, "expandExperiencesHackMcgillLogistics") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                                <ExperiencesDetailContainer>
                                    <ul>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                Working with a team of organizers to run McHacks, a 24 hour long hackathon.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                Responsible for venue, food logistics, transportation, and volunteers.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                    </ul>
                                </ExperiencesDetailContainer>
                            </div> : 
                            <div>
                                <TimelineBtn onClick={ e => this.expand(e, "expandExperiencesHackMcgillLogistics") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                            </div>
                        }
                    </VerticalTimelineElement>
                    { this.state.viewMoreExperiences ? 
                        <div>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#74b3ce', color: '#010104' }}
                                contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                                date="Aug 2019 - Dec 2019"
                                iconStyle={{ background: '#ffffff', color: '#010104' }}
                                icon={<ExperiencesTimelineLogo src={MyriadeLogo} alt="Myriade logo" />}
                            >
                                <TimelineTitle className="vertical-timeline-element-title">Myriade Inc | Software Developer Intern</TimelineTitle>
                                <TimelineSubtitle className="vertical-timeline-element-subtitle">Montreal, QC</TimelineSubtitle>
                                <br />
                                { this.state.expandExperiencesMyriade ? 
                                    <div>
                                        <TimelineBtn onClick={ e => this.hide(e, "expandExperiencesMyriade") }>
                                            Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                            </svg>
                                        </TimelineBtn>
                                        <ExperiencesDetailContainer>
                                            <ul>
                                                <ExperiencesBulletPoint>
                                                    <ExperiencesDetail>
                                                        Creating a cross-platform executable that connects to a mining pool and provide an intuitive UI for Stratum operations.
                                                    </ExperiencesDetail>
                                                </ExperiencesBulletPoint>
                                                <ExperiencesBulletPoint>
                                                    <ExperiencesDetail>
                                                        Utilized ElectronJS, NodeJS, and ReactJS.
                                                    </ExperiencesDetail>
                                                </ExperiencesBulletPoint>
                                            </ul>
                                        </ExperiencesDetailContainer>
                                    </div> : 
                                    <div>
                                        <TimelineBtn onClick={ e => this.expand(e, "expandExperiencesMyriade") }>
                                            Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                            </svg>
                                        </TimelineBtn>
                                    </div>
                                }
                            </VerticalTimelineElement> 
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#74b3ce', color: '#010104' }}
                                contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                                date="Apr 2019 - Apr 2020"
                                iconStyle={{ background: '#ffffff', color: '#010104' }}
                                icon={<ExperiencesTimelineLogo src={McHacksLogo} alt="McHacks logo" />}
                            >
                                <TimelineTitle className="vertical-timeline-element-title">HackMcGill | Sponsorship Coordinator</TimelineTitle>
                                <TimelineSubtitle className="vertical-timeline-element-subtitle">Montreal, QC</TimelineSubtitle>
                                <br />
                                { this.state.expandExperiencesHackMcgillSponsorship ? 
                                    <div>
                                        <TimelineBtn onClick={ e => this.hide(e, "expandExperiencesHackMcgillSponsorship") }>
                                            Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                            </svg>
                                        </TimelineBtn>
                                        <ExperiencesDetailContainer>
                                            <ul>
                                                <ExperiencesBulletPoint>
                                                    <ExperiencesDetail>
                                                    Assisting HackMcGill meet fundraising targets through the acquisition of new sponsorships while maintaining and developing current sponsorship relations.
                                                    </ExperiencesDetail>
                                                </ExperiencesBulletPoint>
                                                <ExperiencesBulletPoint>
                                                    <ExperiencesDetail>
                                                        Responsible for venue, food logistics, transportation, and volunteers.
                                                    </ExperiencesDetail>
                                                </ExperiencesBulletPoint>
                                                <ExperiencesBulletPoint>
                                                    <ExperiencesDetail>
                                                        Hosting over 600+ students from around the world as well as over 26 industry leading companies.
                                                    </ExperiencesDetail>
                                                </ExperiencesBulletPoint>
                                            </ul>
                                        </ExperiencesDetailContainer>
                                    </div> : 
                                    <div>
                                        <TimelineBtn onClick={ e => this.expand(e, "expandExperiencesHackMcgillSponsorship") }>
                                            Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                            </svg>
                                        </TimelineBtn>
                                    </div>
                                }
                            </VerticalTimelineElement>
                        </div>: null
                    }
                </VerticalTimeline>
                <ExperiencesBtnContainer>
                    { !this.state.viewMoreExperiences ?  
                         <ExperiencesBtn onClick={ e => this.expand(e, "viewMoreExperiences") }>View More Experiences +</ExperiencesBtn> : 
                         <ExperiencesBtn onClick={ e => this.hide(e, "viewMoreExperiences") }>View Less Experiences -</ExperiencesBtn>
                    }
                </ExperiencesBtnContainer>
                <br />
                <br />
                <br />
                <ExperiencesSubtitle>Education</ExperiencesSubtitle>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74b3ce', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                        date="Sept 2017 - Apr 2022 [Expected]"
                        iconStyle={{ background: '#ffffff', color: '#010104' }}
                        icon={<EducationTimelineLogo src={McGillLogo} alt="McGill logo" />}
                    >
                        <TimelineTitle className="vertical-timeline-element-title">McGill University</TimelineTitle>
                        <TimelineSubtitle className="vertical-timeline-element-subtitle">Montreal, QC</TimelineSubtitle>
                        <EducationDegree>B.Eng. | Bachelor of Electrical Eng, Software Eng (Minor)</EducationDegree>
                        { this.state.expandEducationMcGill ? 
                            <EducationBtnContainer>
                                <TimelineBtn onClick={ e => this.hide(e, "expandEducationMcGill") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                                <ExperiencesDetailContainer>
                                    <EducationDetailsSubtitle>Awards</EducationDetailsSubtitle>
                                    <ul>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                Business Analytics in Engineering Case Competition (Mar. 2019)
                                            </ExperiencesDetail>
                                            <ExperiencesDetail>
                                                - Placed first in the business analytics case that was hosted by Microsoft and EY.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                McGill Institute for Aerospace Engineering Case Competition (Jan. 2018)
                                            </ExperiencesDetail>
                                            <ExperiencesDetail>
                                                - Winner of the best solution to an Aerospace case study.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                goLead  (Jan. 2018 - Mar. 2018)
                                            </ExperiencesDetail>
                                            <ExperiencesDetail>
                                                - Placed 1st in a ten-week project development working in a group collaboratively with other students in achieving a goal/solution to better the world.
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                    </ul>

                                    <EducationDetailsSubtitle>Notable Courses</EducationDetailsSubtitle>
                                    <ExperiencesDetail>
                                        + Intro to Computer Vision, Realistic Image Synthesis, Computer Organization Design Principles and Methods, Digital Logic, Intro to Computer Science, Intro to Software Development, Intro to Software Engineering, Linear Systems and Control, Model-Based Programming
                                    </ExperiencesDetail>
                                </ExperiencesDetailContainer>
                            </EducationBtnContainer> : 
                            <EducationBtnContainer>
                                <TimelineBtn onClick={ e => this.expand(e, "expandEducationMcGill") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                            </EducationBtnContainer>
                        }
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74b3ce', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                        date="Aug 2015 - May 2017"
                        iconStyle={{ background: '#ffffff', color: '#010104' }}
                        icon={<EducationTimelineLogo src={MarianopolisLogo} alt="Marianopolis logo" />}
                    >
                        <TimelineTitle className="vertical-timeline-element-title">Marianopolis College</TimelineTitle>
                        <TimelineSubtitle className="vertical-timeline-element-subtitle">Westmount, QC</TimelineSubtitle>
                        <EducationDegree>Diploma of College Studies (D.E.C.) | Health Science</EducationDegree>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#74b3ce', color: '#010104' }}
                        contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                        date="Sept 2010 - Jun 2015"
                        iconStyle={{ background: '#ffffff', color: '#010104' }}
                        icon={<EducationTimelineLogo src={SelwynLogo} alt="Selwyn logo" />}
                    >
                        <TimelineTitle className="vertical-timeline-element-title">Selwyn House School</TimelineTitle>
                        <TimelineSubtitle className="vertical-timeline-element-subtitle">Westmount, QC</TimelineSubtitle>
                        <EducationDegree>Secondary School Diploma (D.E.S.)</EducationDegree>
                        { this.state.expandEducationSelwyn ? 
                            <EducationBtnContainer>
                                <TimelineBtn onClick={ e => this.hide(e, "expandEducationSelwyn") }>
                                    Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                                <ExperiencesDetailContainer>
                                    <EducationDetailsSubtitle>Awards</EducationDetailsSubtitle>
                                    <ul>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                Cum Laude Society Inductee
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                        <ExperiencesBulletPoint>
                                            <ExperiencesDetail>
                                                High Honours (90+ GPA)
                                            </ExperiencesDetail>
                                        </ExperiencesBulletPoint>
                                    </ul>

                                    <EducationDetailsSubtitle>Notable Courses</EducationDetailsSubtitle>
                                    <ExperiencesDetail>
                                        + AP Calculus, AP Physics
                                    </ExperiencesDetail>
                                </ExperiencesDetailContainer>
                            </EducationBtnContainer> : 
                            <EducationBtnContainer>
                                <TimelineBtn onClick={ e => this.expand(e, "expandEducationSelwyn") }>
                                    Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </TimelineBtn>
                            </EducationBtnContainer>
                        }
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <br />
                <br />
            </ExperiencesContainer>
        )
    }
}

export default Experiences;