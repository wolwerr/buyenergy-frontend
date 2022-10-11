import styled from "styled-components"

export const PopupBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    top: 0;
    width: 100%;
    height: 92vh;
`
  
export const Box = styled.div`
    position: absolute;
    margin: 2% 2% 0 0;
    top: ${props => props.top || '0'};
    bottom: ${props => props.bottom || '0'};
    left: ${props => props.left || '1'};
    right: ${props => props.right || '0'};
    width: ${props => props.width || '500px'};
    max-width: 650px;
    height: ${props => props.height || '500px'};
    background: #fff;
    border-radius: 10px;
    border: 1px solid rgb(217, 214, 214);
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #434E65;
    font-family: 'Ubuntu';
`
  
export const CloseIcon = styled.span`
    display: flex;
    align-items: center;
    content: 'x';
    cursor: pointer;
    background: #fff;
    color: #434E65;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    font-size: 4vh;
    align-self: flex-end;
`
