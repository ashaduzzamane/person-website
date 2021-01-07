import styled from 'styled-components';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import SkyBg from '../../images/sky-bg.jpeg';

export const HomeContainer = styled.div`
    z-index: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    background-color: #010104;
`
export const HomeWrapper = styled.div`
    height: 60vh;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
`
export const HeadshotImage = styled.img`
    z-index: 1;
    height: 250px;
    border: 2px solid #ebebeb;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media screen and (max-width: 768px) {    
        height: 180px;
    }
`

export const HomeTitle = styled.div`
    z-index: 1;
    margin: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    text-align: center;

    @media screen and (max-width: 768px) {    
        font-size: 24px;
    }
`

export const HomeSubtitle = styled.div`
    z-index: 1;
    font-family: 'Inconsolata', monospace;
    font-size: 24px;
    
    @media screen and (max-width: 768px) {    
        font-size: 18px;
    }
`

export const MountainImage = styled.img`
    z-index: 1;
    width: 100%;
    height: 25vh;

    @media screen and (max-width: 768px) {    
        display: none;
    }
`

export const ParticlesBg = styled(Particles)`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${SkyBg});
`

export const TypeWriter = styled(ReactTypingEffect)`
    .CursorStyle {
        color: #74b3ce
    }
`