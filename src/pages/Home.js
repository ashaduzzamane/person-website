import ReactTypingEffect from 'react-typing-effect';
import Particles from 'react-particles-js';
import HeadShot from '../images/headshot-blurbg.png';
import MountainImg from '../images/mountain.png';
import '../styles/Home.css';

function Home() {
    return (
        <div id="home">
            <header className="Home-header">
                <div className="Home-introduction-container">
                    <img className="Home-headshot-img" src={HeadShot} alt="headshot" />
                    <span className="Home-introduction">Hi there, I'm Enan Ashaduzzaman</span>
                    <div className="Home-description">
                        <span>I'm a </span>
                        <ReactTypingEffect 
                            text={["student.", "developer.", "tech enthusiast."]}
                            speed="150"
                            eraseSpeed="100"
                            eraseDelay="500"
                            typingDelay="500"
                            cursorClassName="Home-cursor-style"
                        />
                    </div>
                </div>
                <img className="Home-mountain-img" src={MountainImg} alt="mountains" />
            </header>
            <Particles
                className="Home-particles-bg"
                params={{
                    particles: {
                        number: {
                            value: 60,
                            density: {
                                enable: true,
                                value_area: 1500
                            }
                        },
                        line_linked: {
                            enable: true,
                            opacity: 0.2
                        },
                        move: {
                            direction: "right",
                            speed: 0.175
                        },
                        size: {
                            value: 1.5
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.3
                            }
                        }
                    },
                    interactivity: {
                        events: {
                            onclick: {
                                enable: true,
                                mode: "push"
                            }
                        },
                        modes: {
                            push: {
                                particles_nb: 1
                            }
                        }
                    },
                    retina_detect: true
                }}
            />
        </div>
    );
}

export default Home;