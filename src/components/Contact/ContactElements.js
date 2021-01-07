import styled from 'styled-components';

export const ContactContainer = styled.div`
    min-height: 90vh;
    background-color: #010104;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
`

export const ContactWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {    
        flex-direction: column;
    }
`

export const ContactInformation = styled.div`
    height: 90vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
        width: 80vw;    
    }
`

export const ContactTitle = styled.h5`
    color: #ebebeb;
    font-family: 'Roboto Mono', monospace;
    font-size: 48px;
    letter-spacing: 3px;
    text-transform: uppercase;
`

export const ContactName = styled.h5`
    color: #ebebeb;
    font-family: 'Roboto Mono', monospace;
    font-size: 32px;
    letter-spacing: 4px;
    text-transform: uppercase;
`

export const ContactEducation = styled.p`
    line-height: 1.8;
`

export const SocialsContainer = styled.div`
    margin-bottom: 2rem;
`

export const ContactSocialLinks = styled.a`
    text-decoration: none;
    color: #ebebeb;
    padding-right: 25px;
    transition: 0.3s ease-in-out;

    &:hover {
        color: #ffffff;
    }
`

export const ContactInputContainer = styled.form`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 80vw;    
        margin: 2rem 0;
    }
`

export const ContactInput = styled.input`
    background-color: #010104;
    color: #ebebeb;
    border: none;
    border-bottom: 3px solid #ebebeb;
    margin-bottom: 20px;
    height: 40px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;

    &:focus {
        outline: none;
        box-shadow: none;
    }

    &.empty {
        border-bottom: 3px solid #ef3f5d;
    }

    &:hover {
        cursor: text;
    }

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #ebebeb;
        opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #ebebeb;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
        color: #ebebeb;
    }
`

export const ContactTextArea = styled.textarea`
    background-color: #010104;
    color: #ebebeb;
    border: none;
    border-bottom: 3px solid #ebebeb;
    margin-bottom: 20px;
    height: 40px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    height: 160px;

    &:focus {
        outline: none;
        box-shadow: none;
    }

    &:hover {
        cursor: text;
    }

    &.empty {
        border-bottom: 3px solid #ef3f5d;
    }

    &::placeholder {
        color: #ebebeb;
        opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
        color: #ebebeb;
    }

    &::-ms-input-placeholder {
        color: #ebebeb;
    }
`

export const ContactBtn = styled.input`
    background-color: #010104; 
    border: none;
    color: #ebebeb;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    border: 2px solid #ebebeb;
    transition: 0.3s ease-in-out;

    &:focus {
        outline: none;
        box-shadow: none;
    }

    &:hover {
        cursor: pointer;
        color: white;
        background-color: #74b3ce;
        border: 2px solid #010104;
    }
`

export const ResponseContainer = styled.div`
    height: 60px;
`

export const SuccessResponse = styled.div`
    border-radius: 10px; 
    padding: 15px 20px;
    margin-top: 10px;
    font-size: 16px;
    background-color: #43be6e;
    color: #ebebeb;
`

export const FailureResponse = styled.div`
    border-radius: 10px; 
    padding: 15px 20px;
    margin-top: 10px;
    font-size: 16px;
    background-color: #ef3f5d;
    color: #ebebeb;
`