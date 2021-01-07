import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 8% auto 8%;
    height: 40px;
    min-width: 100%;
    background-color: #202020;
    position: absolute;
    z-index: 2;
    color: #ebebeb;
`

export const FooterText = styled.span`
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
`