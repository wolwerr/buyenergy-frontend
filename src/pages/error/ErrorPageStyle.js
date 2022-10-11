import styled from "styled-components";

export const ErrorCnt = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding-top: 50px;
`

export const ErrorTitle = styled.h1`
    margin-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
    color: #434e65;
    font-family: 'Ubuntu';
    font-size: 2.5em;
    text-shadow: 2px 2px 5px rgba(141, 141, 141, 1);
`

export const ErrorDescription = styled.p`
    color: #434e65;
    font-family: 'Ubuntu';
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 20px;
`

export const ErrorImg = styled.img`
    width: 100%;
    max-width: 1000px;
    height: auto;
`