import React, { useState } from 'react';
import HeadShot from '../../images/headshot-blurbg.png';
import MountainImg from '../../images/mountain.png';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import { 
    HomeContainer,
    HomeWrapper,
    HeadshotImage,
    HomeTitle,
    HomeSubtitle,
    MountainImage,
    ParticlesBg,
    TypeWriter
 } from './HomeElements';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => { 
        setIsOpen(!isOpen); 
    };

    return (
        <div id="home">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HomeContainer>
                <HomeWrapper>
                    <HeadshotImage src={HeadShot} alt="headshot" />
                    <HomeTitle>Hi there, I'm Enan Ashaduzzaman</HomeTitle>
                    <HomeSubtitle>
                        <span>I'm a </span>
                        <TypeWriter 
                            text={["student.", "developer.", "tech enthusiast."]}
                            speed="150"
                            eraseSpeed="100"
                            eraseDelay="500"
                            typingDelay="500"
                            cursorClassName="CursorStyle"
                        />
                    </HomeSubtitle>
                </HomeWrapper>
                <MountainImage src={MountainImg} alt="mountains" />
            </HomeContainer>
            <ParticlesBg
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