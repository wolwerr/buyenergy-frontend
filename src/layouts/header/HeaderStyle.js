import styled from "styled-components";

export const HeaderCnt = styled.header`
    background-color: #434e65;
    position: fixed;
    top: 0px;
    left: 300px;
    padding: 5px 0;
    width: ${props => props.windowWidth - 300}px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 1.5em;
        color: white;
        font-weight: 700;
    }
`

export const HeaderIcon = styled.img`
    width: 100%;
    height: auto;
    max-width: 45px;
    margin-right: 10px;
`

export const ProfileImg = styled.img`
    width: 100%;
    height: auto;
    max-width: 60px;
    border-radius: 100px;
`

export const ProfileOptIcon = styled.img`
    width: 100%;
    height: auto;
    max-width: 20px;
    margin: 0 10px;
`

export const HeaderIconsLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ProfileOptions = styled.div`
    background-color: #434e65;
    color: white;
    width: 100px;
    height: auto;
    position: absolute;
    top: 78px;
    right: 0px;
    border: 1px solid gray;
    text-transform: uppercase;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    padding: 10px 0;
    margin: 0;
`