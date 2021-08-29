import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import AmazonLogo from '../../images/amazon-logo.png';
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

var visibleExperiences = [
    {
        date: "May 2021 - Aug 2021",
        logo: {
            src: AmazonLogo,
            alt: "Amazon Logo",
        },
        title: "Amazon | Software Development Engineer Intern",
        subtitle: "Vancouver, BC",
        experienceState: "expandExperiencesAmazon",
        details: [
            <span>Implemented a feature for the Alexa Mobile App using <b>React Native</b> and <b>Spring</b>.</span>,
            <span>Created the backend calls and unit tests which are consumed by the Alexa App using <b>Spring Boot</b>.</span>,
            <span>Created the frontend features and unit tests using <b>React Native</b>, <b>Redux</b>, and <b>TypeScript</b>.</span>,
        ],
    },
    {
        date: "Apr 2020 - Apr 2021",
        logo: {
            src: McHacksLogo,
            alt: "McHacks Logo",
        },
        title: "HackMcGill | Development Coordinator",
        subtitle: "Montreal, QC",
        experienceState: "expandExperiencesHackMcgillDevelopment",
        details: [
            <span>Assisting with building tools, services, and platforms that power McHacks. This includes static websites, and web applications.</span>,
            <span>The websites and applications are used by thousands of people each year.</span>,
            <span>McHacks is a student-run collegiate hackathon hosted at McGill University in Montreal. 
            We bring over 600 students from across North America together for 24 hours to build projects and applications that range from hardware to mobile to artificial intelligence.</span>,
        ],
    },
    {
        date: "Jan 2020 - Aug 2020",
        logo: {
            src: McKessonLogo,
            alt: "McKesson Logo",
        },
        title: "McKesson | Software Developer Intern",
        subtitle: "Saint-Laurent, QC",
        experienceState: "expandExperiencesMckesson",
        details: [
            <span>Utilized <b>NodeJS</b>, <b>ReactJS</b>, and <b>Redux</b> to create a Jira time tracking and sprint tracking application to be used by managers and release train engineers. 
            The application <b>saves 75%</b> of the RTE’s reporting time.</span>,
            <span>Utilized Jira <b>REST API</b> to extract data from McKesson’s Jira cloud and Jira server.</span>,
            <span>Transformed data and created visual representation of the data using <b>ChartJS</b>. 
            Facilitated McKesson’s transition to an agile development process.</span>,
            <span>Utilized <b>Microsoft Azure</b> logic apps to connect the back end and front-end. Had the application hosted on Azure’s web services.</span>,
        ],
    },
    {
        date: "Apr 2019 - Apr 2020",
        logo: {
            src: NobeLogo,
            alt: "National Organization for Business and Engineering Logo",
        },
        title: "National Organization for Business and Engineering | VP Events",
        subtitle: "Montreal, QC",
        experienceState: "expandExperiencesNobe",
        details: [
            <span>Led the Events team to run NOBE conferences, competition, and workshops. <b>Increased NOBE event participation by 25%</b>.</span>,
            <span>Hosted over 100+ Engineering and Business students as well an industry leading professional.</span>,
        ],
    },
]

var hiddenExperiences = [
    {
        date: "Aug 2019 - Dec 2019",
        logo: {
            src: MyriadeLogo,
            alt: "Myriade Logo",
        },
        title: "Myriade Inc | Software Developer Intern",
        subtitle: "Montreal, QC",
        experienceState: "expandExperiencesMyriade",
        details: [
            <span>Creating a cross-platform executable that connects to a mining pool and provide an intuitive UI for Stratum operations.</span>,
            <span>Utilized <b>ElectronJS</b>, <b>NodeJS</b>, and <b>ReactJS</b>.</span>,
        ],
    },
    {
        date: "Apr 2019 - Apr 2020",
        logo: {
            src: McHacksLogo,
            alt: "McHacks Logo",
        },
        title: "HackMcGill | Logistics Coordinator",
        subtitle: "Montreal, QC",
        experienceState: "expandExperiencesHackMcgillLogistics",
        details: [
            <span>Working with a team of organizers to run McHacks, a 24 hour long hackathon.</span>,
            <span>Responsible for venue, food logistics, transportation, and volunteers.</span>,
        ],
    },
    {
        date: "Apr 2018 - Apr 2019",
        logo: {
            src: McHacksLogo,
            alt: "McHacks Logo",
        },
        title: "HackMcGill | Sponsorship Coordinator",
        subtitle: "Montreal, QC",
        experienceState: "expandExperiencesHackMcgillSponsorship",
        details: [
            <span>Assisting HackMcGill meet fundraising targets through the acquisition of new sponsorships while maintaining and developing current sponsorship relations.</span>,
            <span>Hosting over 600+ students from around the world as well as over 26 industry leading companies.</span>,
        ],
    },
]

var educations = [
    {
        date: "Sep 2017 - Dec 2021 [Expected]",
        logo: {
            src: McGillLogo,
            alt: "McGill Logo",
        },
        title: "McGill University",
        subtitle: "Montreal, QC",
        degree: "B.Eng. | Bachelor of Electrical Eng, Software Eng (Minor)",
        educationState: "expandEducationMcGill",
        details: {
            awards: [
                {
                    title: "Business Analytics in Engineering Case Competition (Mar. 2019)",
                    description: "Placed first in the business analytics case that was hosted by Microsoft and EY.",
                },
                {
                    title: "McGill Institute for Aerospace Engineering Case Competition (Jan. 2018)",
                    description: "Winner of the best solution to an Aerospace case study.",
                },
                {
                    title: "goLead  (Jan. 2018 - Mar. 2018)",
                    description: "Placed 1st in a ten-week project development working in a group collaboratively with other students in achieving a goal/solution to better the world.",
                },
            ],
            notableCourses: [
                "Artificial Intelligence",
                "Intro to Computer Vision",
                "Realistic Image Synthesis",
                "Operating Systems",
                "Intro to Software Engineering",
            ]
        },
    },
    {
        date: "Aug 2015 - May 2017",
        logo: {
            src: MarianopolisLogo,
            alt: "Marianopolis Logo",
        },
        title: "Marianopolis University",
        subtitle: "Westmount, QC",
        degree: "Diploma of College Studies (D.E.C.) | Health Science",
        educationState: null,
        details: null,
    },
    {
        date: "Sep 2007 - Jun 2015",
        logo: {
            src: SelwynLogo,
            alt: "Selwyn Logo",
        },
        title: "Selwyn House School",
        subtitle: "Westmount, QC",
        degree: "Secondary School Diploma (D.E.S.)",
        educationState: "expandEducationSelwyn",
        details: {
            awards: [
                {
                    title: "Cum Laude Society Inductee",
                    description: "Cum Laude Society recognizes academic achievement in secondary schools for the purpose of promoting excellence, justice, and honor.",
                },
                {
                    title: "High Honours",
                    description: "Recognizing students with a 90+ grade point average.",
                },
            ],
            notableCourses: [
                "AP Calculus", 
                "AP Physics",
            ]
        },
    },
]

class Experiences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandExperiencesAmazon: false,
            expandExperiencesHackMcgillDevelopment: false,
            expandExperiencesMckesson: false,
            expandExperiencesNobe: false,
            expandExperiencesHackMcgillLogistics: false,
            expandExperiencesMyriade: false,
            expandExperiencesHackMcgillSponsorship: false,
            viewMoreExperiences: false,
            expandEducationMcGill: false,
            expandEducationSelwyn: false
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
                <ExperiencesTitle>Experiences</ExperiencesTitle>
                <ExperiencesSubtitle>Work Experience</ExperiencesSubtitle>
                <VerticalTimeline animate={window.innerWidth > 768}>
                    { visibleExperiences.map(experience => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#74b3ce', color: '#010104' }}
                            contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                            date={ experience.date }
                            iconStyle={{ background: '#ffffff', color: '#010104' }}
                            icon={<ExperiencesTimelineLogo src={ experience.logo.src } alt={ experience.logo.alt } />}
                        >
                            <TimelineTitle className="vertical-timeline-element-title">{ experience.title }</TimelineTitle>
                            <TimelineSubtitle className="vertical-timeline-element-subtitle">{ experience.subtitle }</TimelineSubtitle>
                            <br />
                            { this.state[experience.experienceState] ? 
                                <div>
                                    <TimelineBtn onClick={ e => this.hide(e, experience.experienceState) }>
                                        Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                        </svg>
                                    </TimelineBtn>
                                    <ExperiencesDetailContainer>
                                        <ul>
                                            { experience.details.map(detail => (
                                                <ExperiencesBulletPoint>
                                                    <ExperiencesDetail>
                                                        { detail }
                                                    </ExperiencesDetail>
                                                </ExperiencesBulletPoint>
                                            ))}
                                        </ul>
                                    </ExperiencesDetailContainer>
                                </div> : 
                                <div>
                                    <TimelineBtn onClick={ e => this.expand(e, experience.experienceState) }>
                                        Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    </TimelineBtn>
                                </div>
                            }
                        </VerticalTimelineElement>
                    ))}
                    { this.state.viewMoreExperiences ? 
                        <div>
                            { hiddenExperiences.map(experience => (
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#74b3ce', color: '#010104' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                                    date={ experience.date }
                                    iconStyle={{ background: '#ffffff', color: '#010104' }}
                                    icon={<ExperiencesTimelineLogo src={ experience.logo.src } alt={ experience.logo.alt } />}
                                >
                                    <TimelineTitle className="vertical-timeline-element-title">{ experience.title }</TimelineTitle>
                                    <TimelineSubtitle className="vertical-timeline-element-subtitle">{ experience.subtitle }</TimelineSubtitle>
                                    <br />
                                    { this.state[experience.experienceState] ? 
                                        <div>
                                            <TimelineBtn onClick={ e => this.hide(e, experience.experienceState) }>
                                                Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                                </svg>
                                            </TimelineBtn>
                                            <ExperiencesDetailContainer>
                                                <ul>
                                                    { experience.details.map(detail => (
                                                        <ExperiencesBulletPoint>
                                                            <ExperiencesDetail>
                                                                { detail }
                                                            </ExperiencesDetail>
                                                        </ExperiencesBulletPoint>
                                                    ))}
                                                </ul>
                                            </ExperiencesDetailContainer>
                                        </div> : 
                                        <div>
                                            <TimelineBtn onClick={ e => this.expand(e, experience.experienceState) }>
                                                Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                </svg>
                                            </TimelineBtn>
                                        </div>
                                    }
                                </VerticalTimelineElement>
                            ))}
                        </div>: null
                    }
                </VerticalTimeline>
                <ExperiencesBtnContainer>
                    { !this.state.viewMoreExperiences ?  
                         <ExperiencesBtn onClick={ e => this.expand(e, "viewMoreExperiences") }>View More Experiences +</ExperiencesBtn> : 
                         <ExperiencesBtn onClick={ e => this.hide(e, "viewMoreExperiences") }>View Less Experiences -</ExperiencesBtn>
                    }
                </ExperiencesBtnContainer>
                <ExperiencesSubtitle>Education</ExperiencesSubtitle>
                <VerticalTimeline animate={window.innerWidth > 768}>
                    { educations.map(education => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#74b3ce', color: '#010104' }}
                            contentArrowStyle={{ borderRight: '7px solid  #74b3ce' }}
                            date={ education.date }
                            iconStyle={{ background: '#ffffff', color: '#010104' }}
                            icon={<EducationTimelineLogo src={ education.logo.src } alt={ education.logo.alt } />}
                        >
                            <TimelineTitle className="vertical-timeline-element-title">{ education.title }</TimelineTitle>
                            <TimelineSubtitle className="vertical-timeline-element-subtitle">{ education.subtitle }</TimelineSubtitle>
                            <EducationDegree>{ education.degree }</EducationDegree>
                            { education.details ? 
                                <div>
                                    { this.state[education.educationState] ? 
                                        <EducationBtnContainer>
                                            <TimelineBtn onClick={ e => this.hide(e, education.educationState) }>
                                                Hide <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                                </svg>
                                            </TimelineBtn>
                                            <ExperiencesDetailContainer>
                                                <EducationDetailsSubtitle>Awards</EducationDetailsSubtitle>
                                                <ul>
                                                    { education.details.awards.map(award => (
                                                        <ExperiencesBulletPoint>
                                                            <ExperiencesDetail>
                                                                { award.title }
                                                            </ExperiencesDetail>
                                                            <ExperiencesDetail>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>
                                                                { " " + award.description }
                                                            </ExperiencesDetail>
                                                        </ExperiencesBulletPoint>
                                                    ))}
                                                </ul>

                                                <EducationDetailsSubtitle>Notable Courses</EducationDetailsSubtitle>
                                                <ExperiencesDetail>
                                                    { education.details.notableCourses.map((course, index) => (
                                                        <span>
                                                            { course }
                                                            {index < education.details.notableCourses.length - 1 && 
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 10">
                                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                                </svg>
                                                            }
                                                        </span>
                                                    )) }
                                                </ExperiencesDetail>
                                            </ExperiencesDetailContainer>
                                        </EducationBtnContainer> : 
                                        <EducationBtnContainer>
                                            <TimelineBtn onClick={ e => this.expand(e, education.educationState) }>
                                                Expand <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                </svg>
                                            </TimelineBtn>
                                        </EducationBtnContainer>
                                    }
                                </div> : null
                            }
                        </VerticalTimelineElement>                        
                    ))}
                </VerticalTimeline>
                <br />
                <br />
            </ExperiencesContainer>
        )
    }
}

export default Experiences;