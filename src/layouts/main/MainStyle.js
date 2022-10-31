import styled from "styled-components";
import backgroundImg from "../../assets/images/background.png"

export const MainCnt = styled.main`
    /* background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: right top;
    background-size: cover; */
    // position: fixed;
    position: absolute;
    top: 78px;
    left: 300px;
    width: ${props => props.windowWidth - 300}px;
    height: 100%;
    background-color: rgb(238,240,245);
    overflow: auto;
`
