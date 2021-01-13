import Photo from '../../images/photo.jpeg';
import Resume from '../../resources/Enan_Ashaduzzaman_Resume.pdf';
import {
    AboutContainer,
    AboutWrapper,
    AboutTitle,
    AboutText,
    AboutLink,
    AboutPdfStyle,
    AboutImageContainer,
    AboutImage,
    ContactLink
} from './AboutElements';

const About = () =>  {
    return (
        <AboutContainer>
            <AboutWrapper id="about">
                <AboutTitle>About Me</AboutTitle>
                <AboutText>
                    <div>Hey, my name is <b>Enan</b>!</div> 
                    <br />
                    <div>
                        Fourth-year B.Eng. student at <AboutLink href="https://www.mcgill.ca/">McGill University</AboutLink>, 
                        majoring in Electrical and minoring in Software.
                    </div> 
                    <br />
                    <div>
                        Over the upcoming summer I'll be a Software Development Engineer Intern @ <AboutLink href="https://www.aboutamazon.com/about-us">Amazon</AboutLink>.
                        Currently, I'm a development coordinator @ <AboutLink href="https://hackmcgill.com/">HackMcGill</AboutLink>, McGill's official hacker collective which organizes McHacks, a 36 hour hackathon!
                        Previously, I've worked @ <AboutLink href="https://www.mckesson.ca/companyoverview">McKesson Corporation</AboutLink> as a Software Developer Intern.
                    </div>
                    <br />
                    <div>
                        I strive to better myself whenever given an opportunity and also love learning new technologies. 
                        I take pride in my work and try to output the best product within my abilities. 
                        With that being said, I continually search for opportunities within companies that share similar mindsets. 
                        If you believe that I would be a good fit within your company or simply interested in learning more about me, 
                        feel free to <ContactLink to="contact" spy={true} smooth={true} exact='true'>reach out</ContactLink>!
                    </div>
                </AboutText>
                    <AboutPdfStyle href={Resume} target="blank" >
                        <span>Resume </span> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                        </svg>
                    </AboutPdfStyle>
            </AboutWrapper>
            <AboutImageContainer>
                <AboutImage src={Photo} alt="headshot" />
            </AboutImageContainer>
        </AboutContainer>
    );
}

export default About;