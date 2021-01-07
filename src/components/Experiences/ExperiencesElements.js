import styled from 'styled-components';

export const ExperiencesContainer = styled.div`
    min-height: 100vh;
    background-color: #ebebeb;
`

export const ExperiencesTitle = styled.h5`
    display: flex;
    justify-content: center;
    width: 50vw;
    color: #74b3ce;
    font-family: 'Roboto Mono', monospace;
    font-size: 48px;
    letter-spacing: 3px;
    text-transform: uppercase;
    border: 2px solid #74b3ce;

    @media screen and (max-width: 768px) {    
        width: 100vw;
    }
`

export const ExperiencesSubtitle = styled.h3`
    font-family: 'Roboto Mono', monospace;
    font-size: 20px;
    background-color: #74b3ce;
    color: #ebebeb;
    width: fit-content;
    padding: 5px 5px 5px 10px;
`

export const ExperiencesTimelineLogo = styled.img`
    width: 100%;
    padding: 5px;
`

export const TimelineBtn = styled.button`
    background-color: #74b3ce;
    border: 1px solid #000000;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition: 0.3s ease-in-out;

    &:focus {
        outline: none;
        box-shadow: none;
    }

    &:hover {
        cursor: pointer;
        color: #ebebeb;
        border: 1px solid #ebebeb;
    }
`

export const ExperiencesDetailContainer = styled.div`
    padding: 10px;
`

export const ExperiencesBulletPoint = styled.li`
    list-style-type: circle;
    font-size: large;
    margin: 5px 0;
`

export const ExperiencesDetail = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
`

export const ExperiencesBtn = styled.button`
    background-color: #ebebeb;
    border: 3px solid #74b3ce;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    color: #74b3ce;
    font-size: 1.3rem;
    transition: 0.3s ease-in-out;

    &:focus {
        outline: none;
        box-shadow: none;
    }

    &:hover {
        cursor: pointer;
        background-color: #74b3ce;
        color: #ebebeb;
    }
`

export const ExperiencesBtnContainer = styled.div`
    width: 50vw;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {    
        width: 100vw;
    }
`

export const EducationTimelineLogo = styled.img`
    width: 100%;
    padding: 10px;
`

export const EducationBtnContainer = styled.div`
    margin-top: 10px;
`

export const EducationDetailsSubtitle = styled.h4`
    margin-top: 10px;
`