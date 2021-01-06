import photo from '../images/photo.jpeg';
import resume from '../resources/Enan_Ashaduzzaman_Resume.pdf';
import '../styles/About.css';

function About() {
    return (
        <div id="about" className="About-container">
            <div className="About-text-container">
                <h5 className="About-title">About Me -{">"}</h5>
                <div className="About-text">
                    <div>Hey, my name is <b>Enan</b>!</div> 
                    <br />
                    <div>I'm a 4th year B.Eng. student at <a href="https://www.mcgill.ca/" className="About-link-style">McGill University</a>, majoring in Electrical and minoring in Software.</div> 
                    <br />
                    <div>
                        Over the upcoming summer I'll be a Software Development Engineer Intern @ <a href="https://www.aboutamazon.com/about-us" className="About-link-style">Amazon</a>.
                        Currently, I'm a development coordinator @ <a href="https://hackmcgill.com/" className="About-link-style">HackMcGill</a>, McGill's official hacker collective which organizes McHacks, a 36 hour hackathon!
                        Previously, I've worked @ <a href="https://www.mckesson.ca/companyoverview" className="About-link-style">McKesson Corporation</a> as a Software Developer Intern.
                    </div>
                </div>
                <button className="About-btn">
                    <a href={resume} className="About-pdf-style" target="blank" >
                        <span>Resume </span> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                        </svg>
                    </a>
                </button>
            </div>
            <div className="About-image-container">
                <img className="About-photo" src={photo} alt="headshot" />
            </div>
        </div>
    );
}

export default About;