import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavCnt = styled.nav`
    background-color: #434e65;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
`

export const LogoImgLink = styled(Link)`
    display: flex;

    img {
        text-align: center;
        margin: 10px auto;
    }
`

export const UlNavMenu = styled.ul`
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
`

export const LiNavMenu = styled.li`
    color: white;
    margin: 10px 0;
`

export const NavIconImg = styled.img`
    max-width: 40px;
`

export const LiSpan = styled.span`
    margin-left: 12px;
    font-size: 1.2em;
`

export const LinkNav = styled(Link)`
    display: flex;
    align-items: center;
    background-color: ${props => props.active ? "rgba(255, 255, 255, 0.3)" : ""};
    padding: 10px 20px;

    &:link, &:visited, &:hover, &:active {
        color: white;
        text-decoration: none;
    }

    &:hover {
        font-weight: 900;
    }
`

export const BottomNavDiv = styled.div`
    margin: 10px;
`

export const PSpan = styled.span`
    font-family: 'Ubuntu';
    margin-left: 12px;
`